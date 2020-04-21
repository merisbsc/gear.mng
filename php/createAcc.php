<?php

if (!isset($_GET["username"])) {
    exit();
}

require "db_repository.php";

$username = $_GET["username"];
$password = $_GET["password"];
$name = $_GET["name"];

$password = "gear" . $password;

$stmt = $conn->prepare("INSERT INTO `user` (`username`, `password`) VALUES (?, MD5(?))");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();


if ($_res = $stmt->get_result()) {
    if ($_res->num_rows > 0) {
        echo "../html/login.html";
    } else {
        echo "null";
    }
}

