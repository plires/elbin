<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];


if ($method == "OPTIONS") {
  die();
}

require_once(__DIR__ . '/../vendor/autoload.php');
require_once(__DIR__ . '/../clases/app.php');
include_once(__DIR__ . '/../clases/repositorioSQL.php');

$response_array = [
  'success' => false,
  'msg_success' => '',
  'errors' => []
];

$require = json_decode(file_get_contents('php://input'));

$post = new stdClass();

// Validar si existen los campos que vienen del front
(isset($require->name)) ? $post->name = $require->name : $post->name = null;
(isset($require->email)) ? $post->email = $require->email : $post->email = null;
(isset($require->company)) ? $post->company = $require->company : $post->company = null;
(isset($require->phone)) ? $post->phone = $require->phone : $post->phone = null;
(isset($require->phone_linkedin)) ? $post->phone_linkedin = $require->phone_linkedin : $post->phone_linkedin = null;
(isset($require->comments)) ? $post->comments = $require->comments : $post->comments = null;
(isset($require->origin)) ? $post->origin = $require->origin : $post->origin = null;
(isset($require->experiencia_seguros)) ? $post->experiencia_seguros = $require->experiencia_seguros : $post->experiencia_seguros = null;
(isset($require->experiencia_ventas)) ? $post->experiencia_ventas = $require->experiencia_ventas : $post->experiencia_ventas = null;
(isset($require->actualmente_trabajando)) ? $post->actualmente_trabajando = $require->actualmente_trabajando : $post->actualmente_trabajando = null;
(isset($require->emprendiste)) ? $post->emprendiste = $require->emprendiste : $post->emprendiste = null;
(isset($require->independiente)) ? $post->independiente = $require->independiente : $post->independiente = null;

if ($post->company === '') $post->company = null; // lo hacemos null si viene vacio
if ($post->phone === '') $post->phone = null; // lo hacemos null si viene vacio
if ($post->phone_linkedin === '') $post->phone_linkedin = null; // lo hacemos null si viene vacio

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->safeLoad();

$db = new RepositorioSQL();
$app = new App();

$recaptcha = $app->verifyRecaptcha($require->recaptchaToken); // obtiene resultado de la verificacion recaptcha

$errors_form = $app->validateForm($recaptcha['success'], $post); // obtiene errores de la validacion de formulario

if (count($errors_form) > 0) {
  $response_array['errors'] = $errors_form;
  echo json_encode($response_array);
  exit;
}

try {

  //grabamos en la base de datos y obtenemos el email destino de la consulta
  $db->getRepositorioContacts()->saveInBDD($post);

  // Enviamos los correos al usuario y al administrador del sitio
  $sendClient = $app->sendEmail('Cliente', 'Contacto Cliente', $post, $_ENV['VITE_EMAIL_RECIPENT']);

  // lo marcamos por default en true para que no falle el condicional de abajo en el caso de envio del formulario de landing
  $sendUser = true;

  if ($post->origin !== 'Formulario de Landing Page') {
    $sendUser = $app->sendEmail('Usuario', 'Contacto Usuario', $post, $_ENV['VITE_EMAIL_RECIPENT']);
  }

  if ($sendClient && $sendUser) {

    $response_array = [
      'success' => true,
      'msg_success' => 'Registro exitoso, nos pondremos en contacto con vos.',
      'errors' => []
    ];

    echo json_encode($response_array);
    exit;
  } else {
    array_push($response_array['errors'], 'Ocurrió un error al enviar la consulta, por favor intente nuevamente o si prefiere contacte a ' . $_ENV['VITE_EMAIL_RECIPENT']);

    echo json_encode($response_array);
    exit;
  }
} catch (\Throwable $th) {

  array_push($response_array['errors'], 'Ocurrió un error al enviar la consulta, por favor intente nuevamente o si prefiere contacte a ' . $_ENV['VITE_EMAIL_RECIPENT']);

  echo json_encode($response_array);
  exit;
}
