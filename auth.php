<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "swd_technology";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle Registration
if (isset($_POST['register-submit'])) {
    $username = $conn->real_escape_string($_POST['register-username']);
    $email = $conn->real_escape_string($_POST['register-email']);
    $password = $conn->real_escape_string($_POST['register-password']);
    
    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Insert into the database
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Registration successful! You can now log in.');</script>";
    } else {
        echo "<script>alert('Error: " . $conn->error . "');</script>";
    }
}

$conn->close();
?>
