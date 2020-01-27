<?php
$user = $_GET["user"];
$category = $_GET["category"];
$brand = $_GET["brand"];
$type = $_GET["type"];
$dateFrom = $_GET["dateFrom"];
$dateTo = $_GET["dateTo"];

file_put_contents("../db/rental.csv", $user . ";" . $category . ";" . $brand . ";" . $type . ";" . $dateFrom . ";" . $dateTo . "&", FILE_APPEND);

//echo $category . ";" . $brand . ";" . $type . ";" . $dateFrom . ";" . $dateTo . "&";