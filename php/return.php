<?php
require "db_repository.php";

$rental_id = $_GET["rental_id"];

//"DELETE FROM `rental` WHERE `rental`.`rental_id` = 118"
$sql = $conn->prepare("DELETE FROM `rental` WHERE `rental_id` = ?");
$sql->bind_param("s", $rental_id);
$sql->execute();


//echo $user . ";" . $brand . ";" . $type . " gelöscht!";