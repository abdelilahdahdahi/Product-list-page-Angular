<?php

// credenziali per la connessione al database
$host = "localhost";
$db_name = "work";
$username = "root";
$password = "";
  
try {
    $con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}
  
// mostra eventuali errori
catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
}
?>
