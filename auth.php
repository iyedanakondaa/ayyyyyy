<?php
session_start();
require 'config.php';

if (isset($_POST['submit'])) {
    // Get user inputs
    $username = $_POST['login-username'];
    $password = $_POST['login-password'];
    
    // Prepare SQL query to fetch user data
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch();

    // Check if user exists and password matches
    if ($user && password_verify($password, $user['password'])) {
        // User is authenticated
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        header("Location: dashboard.php");  // Redirect to dashboard or another page
        exit;
    } else {
        echo "<script>alert('Invalid username or password');</script>";
    }
}
?>
