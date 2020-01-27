<?php
$category = $_GET["category"];
$brand = $_GET["brand"];
$type = $_GET["type"];

file_put_contents("../db/gear.csv", $category . ";" . $brand . ";" . $type . "&", FILE_APPEND);

echo $category . $brand . $type;
?>