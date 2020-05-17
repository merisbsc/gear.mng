<?php
require "db_repository.php";

$category = $_GET["category"];
$brand = $_GET["brand"];
$type = $_GET["type"];

//$stmt = "INSERT INTO gear(category_id, brand, type) VALUES (" . $category . ", " . $brand . "," . $type . ")";


$stmt = "INSERT INTO gear (category_id, brand, name) VALUES ('$category', '$brand', '$type')";

echo "succesfully added your gear";

$conn->close();

?>