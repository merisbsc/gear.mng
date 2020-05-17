<?php
require "db_repository.php";
$username = $_GET["username"];

$sql = "SELECT category_id, brand, name FROM gear";

$stmt = $conn->prepare($sql);
//$stmt->bind_param("<first_letter_of_data_type>", "<string_for_?_above>");

$stmt->execute();

echo json_encode($stmt->get_result()->fetch_all());

$stmt->close();
$conn->close();
