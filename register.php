<?php
require 'config.php';

if (isset($_POST['submit'])) {
    // Get user inputs
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Prepare SQL query to insert new user
    $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
    $stmt->execute(['username' => $username, 'password' => $hashed_password]);

    echo "<script>alert('Registration successful');</script>";
}
?>
