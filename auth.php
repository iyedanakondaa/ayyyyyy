<?php
// Database connection (db_connect.php)
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

<?php
session_start();

// Ensure database connection
include 'db_connect.php'; // This file should only contain the connection logic above

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
    // Sanitize input
    $username = $conn->real_escape_string(trim($_POST['login-username']));
    $password = trim($_POST['login-password']);

    if (empty($username) || empty($password)) {
        echo "<script>alert('Please fill in all fields.');</script>";
        exit;
    }

    // Query to fetch user data
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verify the password hash
        if (password_verify($password, $user['password'])) {
            // Set session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            echo "<script>alert('Login successful!');</script>";
            // Redirect to dashboard or home page
            header("Location: dashboard.php"); // Replace with the actual page
            exit;
        } else {
            echo "<script>alert('Invalid password.');</script>";
        }
    } else {
        echo "<script>alert('User not found.');</script>";
    }
}
?>
