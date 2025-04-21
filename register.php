<?php
session_start();
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $full_name = $_POST['signupName'];
    $email = $_POST['signupEmail'];
    $username = $_POST['signupUsername'];
    $password = $_POST['signupPassword'];

    // Check if username or email already exists
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username OR email = :email");
    $stmt->execute(['username' => $username, 'email' => $email]);
    $existingUser = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($existingUser) {
        echo "Username or Email already taken!";
    } else {

        $stmt = $pdo->prepare("INSERT INTO users (full_name, email, username, password) VALUES (:full_name, :email, :username, :password)");
        $stmt->execute([
            'full_name' => $full_name,
            'email' => $email,
            'username' => $username,
            'password' => $password
        ]);

        echo "Registration successful! You can now log in.";
    }
}
?>
