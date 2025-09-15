<?php

require_once("repositorioContacts.php");

class RepositorioContactsSQL extends repositorioContacts
{
  protected $conexion;

  public function __construct($conexion)
  {
    $this->conexion = $conexion;
  }

  public function saveInBDD($post)
  {

    setlocale(LC_ALL, 'es_ES');

    if (is_object($post)) {
      $post = (array) $post;
    }

    if ($post['origin'] === 'Formulario de Unite al equipo' || $post['origin'] === 'Formulario de Landing Page') {
      $experiencia_seguros = $post['experiencia_seguros'];
      $experiencia_ventas = $post['experiencia_ventas'];
      $actualmente_trabajando = $post['actualmente_trabajando'];
      $emprendiste = $post['emprendiste'];
      $independiente = $post['independiente'];

      if (isset($post['phoneLinkedin'])) {
        $phone = $post['phoneLinkedin'];
      } else {
        $phone = null;
      }

      $company = null;
      $comments = null;
    } else {
      $experiencia_seguros = null;
      $experiencia_ventas = null;
      $actualmente_trabajando = null;
      $emprendiste = null;
      $independiente = null;
      $company = $post['company'];
      $phone = $post['phone'];
      $comments = $post['comments'];
    }

    $sql = "INSERT INTO contacts values(default, :name, :email, :company, :phone, :comments, :origin, :experiencia_seguros, :experiencia_ventas, :actualmente_trabajando, :emprendiste, :independiente, :created_at)";
    $stmt = $this->conexion->prepare($sql);
    $stmt->bindValue(":name", $post['name'], PDO::PARAM_STR);
    $stmt->bindValue(":email", $post['email'], PDO::PARAM_STR);
    $stmt->bindValue(":company", $company, PDO::PARAM_STR);
    $stmt->bindValue(":phone", $phone, PDO::PARAM_STR);
    $stmt->bindValue(":comments", $comments, PDO::PARAM_STR);
    $stmt->bindValue(":origin", $post['origin'], PDO::PARAM_STR);
    $stmt->bindValue(":experiencia_seguros", $experiencia_seguros, PDO::PARAM_STR);
    $stmt->bindValue(":experiencia_ventas", $experiencia_ventas, PDO::PARAM_STR);
    $stmt->bindValue(":actualmente_trabajando", $actualmente_trabajando, PDO::PARAM_STR);
    $stmt->bindValue(":emprendiste", $emprendiste, PDO::PARAM_STR);
    $stmt->bindValue(":independiente", $independiente, PDO::PARAM_STR);
    $stmt->bindValue(":created_at", date("F j, Y, g:i a"), PDO::PARAM_STR);

    return $stmt->execute();
  }
}
