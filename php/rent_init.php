<?php
require "db_repository.php";

$stmt = "INSERT INTO gear (category_id, brand, name) VALUES ('$category', '$brand', '$type')";


if ($_res = $conn->query($stmt)) {
    echo "hod gefunkt";
} else{
    echo "hod ned gefunkt";
}

$conn->close();

?>