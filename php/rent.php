<?php
require "./db_repository.php";
$user = $_GET["user"];
$gear_id = $_GET["gear_id"];
$dateFrom = $_GET["dateFrom"];
$dateTo = $_GET["dateTo"];

$sql = $conn->prepare("INSERT INTO `rental` (`gear_id`, `username`, `from_date`, `to_date`) VALUES (?, ?, ?, ?)");
$sql->bind_param("ssss", $gear_id, $user, $dateFrom, $dateTo);
$sql->execute();

echo "successfully rented your gear!";