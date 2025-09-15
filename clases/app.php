<?php
require_once(__DIR__ . '/../vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;

class App
{

  public function validEmail($email)
  {
    $mail_valid = 0;
    //compruebo unas cosas primeras 
    if ((strlen($email) >= 6) && (substr_count($email, "@") == 1) && (substr($email, 0, 1) != "@") && (substr($email, strlen($email) - 1, 1) != "@")) {
      if ((!strstr($email, "'")) && (!strstr($email, "\"")) && (!strstr($email, "\\")) && (!strstr($email, "\$")) && (!strstr($email, " "))) {
        //miro si tiene caracter . 
        if (substr_count($email, ".") >= 1) {
          //obtengo la terminacion del dominio 
          $term_dom = substr(strrchr($email, '.'), 1);
          //compruebo que la terminaci&oacute;n del dominio sea correcta 
          if (strlen($term_dom) > 1 && strlen($term_dom) < 5 && (!strstr($term_dom, "@"))) {
            //compruebo que lo de antes del dominio sea correcto 
            $before_dom = substr($email, 0, strlen($email) - strlen($term_dom) - 1);
            $caracter_ult = substr($before_dom, strlen($before_dom) - 1, 1);
            if ($caracter_ult != "@" && $caracter_ult != ".") {
              $mail_valid = 1;
            }
          }
        }
      }
    }
    if ($mail_valid)
      return 1;
    else
      return 0;
  }

  public function emptyField($data)
  {
    if ($data == '') {
      return true;
    } else {
      return false;
    }
  }

  public function validateForm($recaptcha, $require)
  {

    $errors = [];

    // Verificamos si hay errores en el formulario
    if (!$recaptcha['success']) {
      array_push($errors, 'Error Recaptcha, volvé a intentar el envio por favor.');
    }

    if (!$this->validEmail($require->email)) {
      array_push($errors, 'Ingresá un email válido.');
    }

    return $errors;
  }

  public function verifyRecaptcha($token)
  {

    $cu = curl_init();
    curl_setopt($cu, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($cu, CURLOPT_POST, 1);
    curl_setopt($cu, CURLOPT_POSTFIELDS, http_build_query(array('secret' => $_ENV['RECAPTCHA_SECRET_KEY_V3'], 'response' => $token)));
    curl_setopt($cu, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($cu);
    curl_close($cu);

    return $data = json_decode($response, true);
  }

  public function setEmailRecipients($objectPhpMailer, $recipient, $post, $destinationEmail)
  {

    switch ($recipient) {

      case 'Cliente':
        //ENVIOS
        $objectPhpMailer->setFrom($post['email']);
        $objectPhpMailer->addAddress($destinationEmail); //Add a recipient
        $objectPhpMailer->addReplyTo($post['email']);

        if ($_ENV['VITE_EMAIL_RECIPENT_CC'] != '') {
          $objectPhpMailer->addAddress($_ENV['VITE_EMAIL_RECIPENT_CC'], $_ENV['VITE_NAME_APP']); //Agregar copia oculta
        }

        break;

      case 'Usuario':
        //ENVIOS
        $objectPhpMailer->setFrom($destinationEmail, $_ENV['VITE_NAME_APP']);
        $objectPhpMailer->addAddress($post['email']); //Add a recipient
        $objectPhpMailer->addReplyTo($destinationEmail, $_ENV['VITE_NAME_APP']);
        break;
    }

    return $objectPhpMailer;
  }

  public function setTemplateAndEmailSubject($template, $post, $destinationEmail)
  {

    switch ($template) {

      case 'Contacto Cliente':
        $email['template'] = $this->selectEmailTemplate($post, 'to_client', $destinationEmail);
        $email['subject'] = 'Nuevo Registro desde: ' . $post['origin'];
        break;

      case 'Contacto Usuario':
        $email['template'] = $this->selectEmailTemplate($post, 'to_user', $destinationEmail);
        $email['subject'] = $_ENV['VITE_EMAIL_SUBJECT_USUARIO'];
        break;
    }

    return $email;
  }

  public function setServerValuesToSendEmails($objectPhpMailer)
  {

    // $objectPhpMailer->SMTPDebug  = 3;                    
    $objectPhpMailer->Host       = $_ENV['SMTP'];
    $objectPhpMailer->SMTPAuth   = true;
    $objectPhpMailer->Username   = $_ENV['EMAIL_CLIENT'];
    $objectPhpMailer->Password   = $_ENV['PASSWORD'];
    $objectPhpMailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $objectPhpMailer->CharSet    = $_ENV['VITE_EMAIL_CHARSET'];
    $objectPhpMailer->Port       = $_ENV['EMAIL_PORT'];

    return $objectPhpMailer;
  }

  public function sendEmail($destinatario, $template, $post, $destinationEmail)
  {

    if (is_object($post)) {
      $post = (array) $post;
    }

    $objectPhpMailer = new PHPMailer();

    // Setear destinatarios
    $mail = $this->setEmailRecipients($objectPhpMailer, $destinatario, $post, $destinationEmail);

    // Setear Template y asunto de los mails
    $email_content = $this->setTemplateAndEmailSubject($template, $post, $destinationEmail);

    if ($_ENV['VITE_ENVIRONMENT'] === 'local') {
      $mail->isSendmail();
    } else {
      $mail->isSMTP();
    }

    //SERVER SETTINGS
    $mail = $this->setServerValuesToSendEmails($objectPhpMailer);

    //CONTENIDO
    $mail->isHTML(true);
    $mail->Subject = $email_content['subject'];
    $mail->Body    = $email_content['template'];

    //send the message, check for errors
    $send = $mail->send();

    return $send;
  }

  function selectEmailTemplate($post, $to, $destinationEmail)
  {

    (isset($post['name'])) ? $name = $post['name'] : $name = null;
    (isset($post['email'])) ? $email = $post['email'] : $email = null;
    (isset($post['company'])) ? $company = $post['company'] : $company = null;
    (isset($post['phone'])) ? $phone = $post['phone'] : $phone = null;
    (isset($post['phoneLinkedin'])) ? $phoneLinkedin = $post['phoneLinkedin'] : $phoneLinkedin = null;
    (isset($post['comments'])) ? $comments = $post['comments'] : $comments = null;
    (isset($post['experiencia_seguros'])) ? $experiencia_seguros = $post['experiencia_seguros'] : $experiencia_seguros = null;
    (isset($post['experiencia_ventas'])) ? $experiencia_ventas = $post['experiencia_ventas'] : $experiencia_ventas = null;
    (isset($post['actualmente_trabajando'])) ? $actualmente_trabajando = $post['actualmente_trabajando'] : $actualmente_trabajando = null;
    (isset($post['emprendiste'])) ? $emprendiste = $post['emprendiste'] : $emprendiste = null;
    (isset($post['independiente'])) ? $independiente = $post['independiente'] : $independiente = null;

    // Definir el bloque Linkedin condicionalmente
    $bloqueLinkedin = '';
    if (!empty($phoneLinkedin)) {
      $bloqueLinkedin = '
    <p class="fallback-font" style="margin: 0 0 10px; font-family: \'Montserrat\', sans-serif; font-size: 16px; line-height: 26px; color: #575756; text-align: left; font-weight: 400;">
        <strong>Linkedin:</strong> ' . htmlspecialchars($phoneLinkedin, ENT_QUOTES, 'UTF-8') . '
    </p>';
    }

    if (!defined('BASE')) {
      define('BASE', $_ENV['VITE_ROOT']);
    }

    //configuro las variables a remplazar en el template
    $vars = array(
      '{name_client}',
      '{email_client}',
      '{name_user}',
      '{email_user}',
      '{company_user}',
      '{phone_user}',
      '{bloqueLinkedin}',
      '{comments_user}',
      '{experiencia_seguros_user}',
      '{experiencia_ventas_user}',
      '{actualmente_trabajando_user}',
      '{emprendiste_user}',
      '{independiente_user}',
      '{origin}',
      '{date}',
      '{base}'
    );

    $values = array(
      $_ENV['VITE_NAME_APP'],
      $_ENV['VITE_EMAIL_RECIPENT'],
      $name,
      $email,
      $company,
      $phone,
      $bloqueLinkedin,
      $comments,
      $experiencia_seguros,
      $experiencia_ventas,
      $actualmente_trabajando,
      $emprendiste,
      $independiente,
      $post['origin'],
      date('d-m-Y'),
      BASE
    );

    if ($_ENV['VITE_ENVIRONMENT'] === 'local') {
      $arrContextOptions = array(
        "ssl" => array(
          "verify_peer" => false,
          "verify_peer_name" => false,
        ),
      );
    } else {
      $arrContextOptions = array();
    }

    switch ($to) {

      case 'to_client':
        $template = file_get_contents(BASE . 'includes/emails/contacts/contacts-to-client.php', false, stream_context_create($arrContextOptions));
        break;

      case 'to_user':
        $template = file_get_contents(BASE . 'includes/emails/contacts/contacts-to-user.php', false, stream_context_create($arrContextOptions));
        break;

      default:
        $template = file_get_contents(BASE . 'includes/emails/contacts/contacts-to-client.php', false, stream_context_create($arrContextOptions));
        break;
    }

    //Remplazamos las variables por las marcas en los templates
    $template_final = str_replace($vars, $values, $template);

    return $template_final;
  }
}
