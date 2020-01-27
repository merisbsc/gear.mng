<?php
$category = $_GET["category"];
$brand = $_GET["brand"];
$type = $_GET["type"];

file_put_contents("../db/gear.csv", $category . ";" . $brand . ";" . $type . "&");

echo $category . $brand . $type;
?>