<?php
require "db_repository.php";
//$username = $_GET["username"];

$sql = "SELECT category_id, brand, name FROM gear";

$stmt = $conn->prepare($sql);

$stmt->execute();

echo json_encode($stmt->get_result()->fetch_all());

$stmt->close();
$conn->close();
