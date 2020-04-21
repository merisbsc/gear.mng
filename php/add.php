<?php
require "db_repository.php";

$category = $_GET["category"];
$brand = $_GET["brand"];
$type = $_GET["type"];

session_start();

$insertStatement = `insert into gear (brand, name) values ($brand, $type)`;
if ($_res = $conn->query($testStatement)) {
    echo "yo is gonga";
}

$testStatement = "select * from gear";
$gear_table = $conn->query($testStatement);

//echo $gear_table[1];

//file_put_contents("../db/gear.csv", $category . ";" . $brand . ";" . $type . "&", FILE_APPEND);

?>