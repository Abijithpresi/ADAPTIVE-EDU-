<?php
$host = 'localhost';
$user = 'root';
$password = '';
$db = 'adaptive_edu';
$port = 3307; // new port is specified already

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$db", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
