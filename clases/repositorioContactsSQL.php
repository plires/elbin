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

    $sql = "INSERT INTO contacts values(default, :name, :email, :company, :phone, :comments, :origin, :city, :ageRange, :activity, :experience, :experiencia_asesorando, :created_at)";
    $stmt = $this->conexion->prepare($sql);
    $stmt->bindValue(":name", $post->name, PDO::PARAM_STR);
    $stmt->bindValue(":email", $post->email, PDO::PARAM_STR);
    $stmt->bindValue(":company", $post->company, PDO::PARAM_STR);
    $stmt->bindValue(":phone", $post->phone, PDO::PARAM_STR);
    $stmt->bindValue(":comments", $post->comments, PDO::PARAM_STR);
    $stmt->bindValue(":origin", $post->origin, PDO::PARAM_STR);
    $stmt->bindValue(":city", $post->city, PDO::PARAM_STR);
    $stmt->bindValue(":ageRange", $post->ageRange, PDO::PARAM_STR);
    $stmt->bindValue(":activity", $post->activity, PDO::PARAM_STR);
    $stmt->bindValue(":experience", $post->experience, PDO::PARAM_STR);
    $stmt->bindValue(":experiencia_asesorando", $post->experiencia_asesorando, PDO::PARAM_STR);
    $stmt->bindValue(":created_at", date("F j, Y, g:i a"), PDO::PARAM_STR);

    return $stmt->execute();
  }
}
