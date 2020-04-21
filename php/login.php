<?php

if (!isset($_GET["username"])) {
    exit();
}

require "db_repository.php";

$username = $conn->real_escape_string($_GET["username"]);
$password = $conn->real_escape_string($_GET["password"]);
$loginRight = false;


//$file = file_get_contents("../db/logins.csv");
/*
$accounts = explode("&", $file);
foreach ($accounts as $account){
    $person = explode(";", $account);
    if ($person[0] === $username && $person[1] === $password) {
        $loginRight = true;
    }
}*/

$password = "gear" . $password;

$stmt = $conn->prepare("SELECT * FROM `user` WHERE `username` = ? AND `password` = md5(?)");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();


if ($_res = $stmt->get_result()) {
    if ($_res->num_rows > 0) {

        echo $username;


    } else {
        echo "null";
    }
}

$conn->close();
//echo "des einloggn geht mit " . $username . ";" . $password;

