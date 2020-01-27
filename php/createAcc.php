<?php
$username = $_GET["username"];
$password = $_GET["password"];
$name = $_GET["name"];

$file = "../db/logins.csv";
file_put_contents($file, $username . ";" . $password . ";" . $name . "&", FILE_APPEND);

echo "../html/login.html";

