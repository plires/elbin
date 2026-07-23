<?php

declare(strict_types=1);
require_once(__DIR__ . '/../vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;


class App
{

  public const ORIGIN_UNITE   = 'Formulario de Unite al equipo';
  public const ORIGIN_CONTACT = 'Formulario de Contacto';
  public const ORIGIN_LP      = 'Formulario de Landing Page';

  /**
   * Valida el formulario según el origin.
   * @param bool $recaptchaOk  Resultado de verifyRecaptcha (true si es válido)
   * @param array|object $post Datos del formulario (puede venir como stdClass)
   * @return array<string,string> Mapa campo => mensaje de error
   */
  public function validateForm(bool $recaptchaOk, array|object $post): array
  {
    $errors = [];

    // 1) Normalizar payload
    $data   = $this->normalizePost($post); // asume que existe en tu clase
    $origin = $data['origin'] ?? '';

    // 2) reCAPTCHA
    if ($recaptchaOk !== true) {
      $errors['recaptcha'] = 'No pudimos verificar que seas humano. Intenta nuevamente.';
    }

    // 3) Reglas por origin (lista blanca)
    $fieldsUnite = [
      'name',
      'email',
      'phone',
      'city',
      'ageRange',
      'activity',
      'experience',
      'experiencia_asesorando',
    ];

    $camposConocidos = [
      'Formulario de Unite al equipo' => $fieldsUnite,
      'Formulario de Contacto'        => ['name', 'email', 'phone', 'comments'],
      'Formulario de Landing Page'    => $fieldsUnite,
    ];

    // Campos opcionales por origin
    $opcionales = [
      'Formulario de Landing Page' => [],
    ];

    // 4) Validar origin
    $validOrigins = array_keys($camposConocidos);
    if (!in_array($origin, $validOrigins, true)) {
      $errors['origin'] = 'Origen de formulario inválido o ausente.';
      return $errors;
    }

    // 5) Requeridos = conocidos - opcionales
    $known    = $camposConocidos[$origin];
    $required = array_values(array_diff($known, $opcionales[$origin] ?? []));

    // 6) Validar vacíos solo sobre los requeridos
    foreach ($required as $campo) {
      $valor = $data[$campo] ?? null;
      if ($this->isBlank($valor)) { // asume helper existente
        $errors[$campo] = 'Este campo es obligatorio.';
      }
    }

    // 7) Email válido (aplica a los tres origins)
    $email = $data['email'] ?? null;
    if ($this->isBlank($email)) {
      $errors['email'] = 'El email es obligatorio.';
    } elseif (!$this->isValidEmail((string)$email)) { // asume helper existente
      $errors['email'] = 'Ingresá un correo válido.';
    }

    return $errors;
  }


  // ----------------- Helpers privados -----------------

  /**
   * Normaliza $post (array|object) a array asociativo con strings "trimeadas" cuando apliquen.
   */
  private function normalizePost(array|object $post): array
  {
    $arr = is_array($post) ? $post : get_object_vars($post);
    $out = [];

    foreach ($arr as $k => $v) {
      // Si es escalar, casteamos a string y trim; si es array/obj, lo dejamos tal cual (podrías serializar/ignorar según tu caso)
      if (is_string($v)) {
        $out[$k] = trim($v);
      } elseif (is_scalar($v)) {
        $out[$k] = (string)$v;
      } else {
        $out[$k] = $v;
      }
    }
    return $out;
  }

  /**
   * True si $value es null, '' o solo espacios
   */
  private function isBlank(mixed $value): bool
  {
    if ($value === null) return true;
    if (is_string($value)) return trim($value) === '';
    // Para arrays/objetos: consideralos vacíos solo si están vacíos
    if (is_array($value)) return count($value) === 0;
    return $value === '';
  }

  /**
   * Valida formato general de email (RFC práctico).
   */
  private function isValidEmail(string $email): bool
  {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
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
    $objectPhpMailer->Host    = $_ENV['SMTP'];
    $objectPhpMailer->Port    = $_ENV['EMAIL_PORT'];
    $objectPhpMailer->CharSet = $_ENV['VITE_EMAIL_CHARSET'];

    if ($_ENV['VITE_ENVIRONMENT'] === 'local') {
      // Mailpit accepts unauthenticated, unencrypted SMTP on its default port.
      $objectPhpMailer->SMTPAuth   = false;
      $objectPhpMailer->SMTPSecure = false;
      $objectPhpMailer->SMTPAutoTLS = false;
    } else {
      $objectPhpMailer->SMTPAuth   = true;
      $objectPhpMailer->Username   = $_ENV['EMAIL_CLIENT'];
      $objectPhpMailer->Password   = $_ENV['PASSWORD'];
      $objectPhpMailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    }

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

    // Always go through SMTP: locally this hits Mailpit (see setServerValuesToSendEmails),
    // in production the real SMTP server. isSendmail() needs a local MTA binary and would
    // never reach Mailpit, so it's never appropriate here.
    $mail->isSMTP();

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

  private function renderOptionalField(string $label, mixed $value): string
  {
    // normaliza a string y valida vacío
    if ($value === null) return '';
    if (is_string($value)) {
      $value = trim($value);
    } elseif (is_scalar($value)) {
      $value = (string)$value;
    } else {
      return ''; // no mostramos arrays/objetos
    }
    if ($value === '') return '';

    $escaped = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');

    return <<<HTML
      <p class="fallback-font" style="margin: 0 0 10px; font-family: 'Montserrat', sans-serif; font-size: 16px; line-height: 26px; color: #575756; text-align: left; font-weight: 400;">
          <strong>{$label}:</strong> {$escaped}
      </p>
      HTML;
  }

  function selectEmailTemplate($post, $to, $destinationEmail)
  {

    $bloqueCompany = $this->renderOptionalField('Compañia', $post['company'] ?? null);
    $bloqueComments = $this->renderOptionalField('Comentarios', $post['comments'] ?? null);
    $bloqueCity = $this->renderOptionalField('Ciudad', $post['city'] ?? null);
    $bloqueAgeRange = $this->renderOptionalField('Rango de Edad', $post['ageRange'] ?? null);
    $bloqueActivity = $this->renderOptionalField('Actividad Actual', $post['activity'] ?? null);
    $bloqueExperience = $this->renderOptionalField('Experiencia Previa', $post['experience'] ?? null);
    $bloqueExperienciaAsesorando = $this->renderOptionalField('Experiencia asesorando', $post['experienciaAsesorando'] ?? null);

    if (!defined('BASE')) {
      define('BASE', $_ENV['VITE_ROOT']);
    }

    //configuro las variables a remplazar en el template
    $vars = array(
      '{name_client}',
      '{email_client}',
      '{name_user}',
      '{email_user}',
      '{phone_user}',
      '{bloqueCompany}',
      '{bloqueComments}',
      '{bloqueCity}',
      '{bloqueAgeRange}',
      '{bloqueActivity}',
      '{bloqueExperience}',
      '{bloqueExperienciaAsesorando}',
      '{origin}',
      '{date}',
      '{base}'
    );

    $values = array(
      $_ENV['VITE_NAME_APP'],
      $_ENV['VITE_EMAIL_RECIPENT'],
      $post['name'],
      $post['email'],
      $post['phone'],
      $bloqueCompany,
      $bloqueComments,
      $bloqueCity,
      $bloqueAgeRange,
      $bloqueActivity,
      $bloqueExperience,
      $bloqueExperienciaAsesorando,
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
