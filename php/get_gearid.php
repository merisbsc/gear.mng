<?php
require "db_repository.php";
$category = $_GET["category"];
$brand = $_GET["brand"];
$type = $_GET["type"];

//$sql = $conn->prepare("SELECT gear_id FROM gear WHERE category_id= ? AND brand = ? AND name = ?");
//$sql->bind_param("sss", $category, $brand, $type);
//$sql->execute();

echo "TEST";
//echo json_encode($stmt->get_result()->fetch_all());

$conn->close();