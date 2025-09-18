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

    $sql = "INSERT INTO contacts values(default, :name, :email, :company, :phone, :phone_linkedin, :comments, :origin, :experiencia_seguros, :experiencia_ventas, :actualmente_trabajando, :emprendiste, :independiente, :created_at)";
    $stmt = $this->conexion->prepare($sql);
    $stmt->bindValue(":name", $post->name, PDO::PARAM_STR);
    $stmt->bindValue(":email", $post->email, PDO::PARAM_STR);
    $stmt->bindValue(":company", $post->company, PDO::PARAM_STR);
    $stmt->bindValue(":phone", $post->phone, PDO::PARAM_STR);
    $stmt->bindValue(":phone_linkedin", $post->phone_linkedin, PDO::PARAM_STR);
    $stmt->bindValue(":comments", $post->comments, PDO::PARAM_STR);
    $stmt->bindValue(":origin", $post->origin, PDO::PARAM_STR);
    $stmt->bindValue(":experiencia_seguros", $post->experiencia_seguros, PDO::PARAM_STR);
    $stmt->bindValue(":experiencia_ventas", $post->experiencia_ventas, PDO::PARAM_STR);
    $stmt->bindValue(":actualmente_trabajando", $post->actualmente_trabajando, PDO::PARAM_STR);
    $stmt->bindValue(":emprendiste", $post->emprendiste, PDO::PARAM_STR);
    $stmt->bindValue(":independiente", $post->independiente, PDO::PARAM_STR);
    $stmt->bindValue(":created_at", date("F j, Y, g:i a"), PDO::PARAM_STR);

    return $stmt->execute();
  }
}
