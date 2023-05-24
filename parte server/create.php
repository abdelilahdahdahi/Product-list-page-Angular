<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
if($_POST){

// include la connessione al database
include 'config/database.php';

try{
header("Content-type: application/json; charset=utf8");
	
// insert query
$query = "INSERT INTO product_list SET
img=:img, 
id_magento=:id_magento, 
nome_prodotto=:nome_prodotto, 
brand=:brand, 
set_attributi=:set_attributi, 
SKU=:SKU, 
SKU_fornitore=:SKU_fornitore, 
qnt=:qnt, prezzo=:prezzo, 
attivo=:attivo, visibilità=:visibilità, 
tipologia=:tipologia, 
assegnatario=:assegnatario, 
presa_in_carico=:presa_in_carico, 
completamento=:completamento, 
lingue=:lingue, 
stato_revisione=:stato_revisione, 
score=:score, sync=:sync";

// prepara la query per l'esecuzione
$stmt = $con->prepare($query);

// valori POST
$img = $_POST['img'];
$id_magento = $_POST['id_magento'];
$nome_prodotto = $_POST['nome_prodotto'];
$brand = $_POST['brand'];
$set_attributi = $_POST['set_attributi'];
$SKU = $_POST['SKU'];
$SKU_fornitore = $_POST['SKU_fornitore'];
$qnt = $_POST['qnt'];
$prezzo = $_POST['prezzo'];
$attivo = $_POST['attivo'];
$visibilità = $_POST['visibilità'];
$tipologia = $_POST['tipologia'];
$assegnatario = $_POST['assegnatario'];
$presa_in_carico = $_POST['presa_in_carico'];
$completamento = $_POST['completamento'];
$lingue = $_POST['lingue'];
$stato_revisione = $_POST['stato_revisione'];
$score = $_POST['score'];
$sync = $_POST['sync'];

// bind i parametri
$stmt->bindParam(':img', $img);
$stmt->bindParam(':id_magento', $id_magento);
$stmt->bindParam(':nome_prodotto', $nome_prodotto);
$stmt->bindParam(':brand', $brand);
$stmt->bindParam(':set_attributi', $set_attributi);
$stmt->bindParam(':SKU', $SKU);
$stmt->bindParam(':SKU_fornitore', $SKU_fornitore);
$stmt->bindParam(':qnt', $qnt);
$stmt->bindParam(':prezzo', $prezzo);
$stmt->bindParam(':attivo', $attivo);
$stmt->bindParam(':visibilità', $visibilità);
$stmt->bindParam(':tipologia', $tipologia);
$stmt->bindParam(':assegnatario', $assegnatario);
$stmt->bindParam(':presa_in_carico', $presa_in_carico);
$stmt->bindParam(':completamento', $completamento);
$stmt->bindParam(':lingue', $lingue);
$stmt->bindParam(':stato_revisione', $stato_revisione);
$stmt->bindParam(':score', $score);
$stmt->bindParam(':sync', $sync);


// Esegue la query
if($stmt->execute()){
    echo json_encode(array('result'=>'success'));
}else{
    echo json_encode(array('result'=>'fail'));
}
}
// mostra eventuali errori
catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}
}
?>
