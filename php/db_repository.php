<?php

$_db_host = "localhost";
$_db_database = "gear_mng";
$_db_username = "web";
$_db_password = "web";

$conn = new mysqli($_db_host, $_db_username, $_db_password, $_db_database);

if ($conn->connect_error) {
    die ("failed");
}

/*$testStatement = "desc user";

if ($_res = $conn->query($testStatement)) {
    echo "yo is gonga ";
} else {
    echo "na is ned gonga";
}



$conn->close();*/

