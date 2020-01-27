<?php
$username = $_GET["username"];
$password = $_GET["password"];
$loginRight = false;

$file = file_get_contents("../db/logins.csv");

$accounts = explode("&", $file);
foreach ($accounts as $account){
    $person = explode(";", $account);
    if ($person[0] === $username && $person[1] === $password) {
        $loginRight = true;
    }
}

if ($loginRight) {
    echo "einloggen geht oida";
} else {
    echo "einloggen geht ned";
}
//echo "des einloggn geht mit " . $username . ";" . $password;

