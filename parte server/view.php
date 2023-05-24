<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include la connessione al database 
include 'config/database.php';
 
// delete message prompt will be here
header("Content-type: application/json; charset=utf8");	
 
// query per mostrare tutti i dati dal DB
$query = "SELECT * FROM product_list";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>
