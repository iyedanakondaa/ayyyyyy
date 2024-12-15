<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; // Replace with your database password
$database = "swd_technology";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
