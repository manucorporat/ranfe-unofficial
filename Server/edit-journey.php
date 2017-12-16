<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");

checkMETHOD("POST");
checkTOKEN();

$id = mustPOST("id");
$origin = testLength(mustPOST("origin"));
$destination = testLength(mustPOST("destination"));
$departure = mustPOST("departure");
$arrival = mustPOST("arrival");
$train_model = testLength(mustPOST("train_model"));
$num_seats = mustPOST("num_seats");
$price = mustPOST("price");

$db = connect();

//Preparamos la sentencia para su ejecucion
$stmt = mysqli_prepare($db, "update journey_info set
    origin = ?, destination = ?, departure = ?,
    arrival = ?, train_model = ?,num_seats = ?,price = ? where id = ?;");
if (!$stmt) {
    send_json(500);
}
//Agregamos las variables de la sentencia preparada como parámetros
$test =mysqli_stmt_bind_param($stmt, "sssssisi",
$origin, $destination, $departure, $arrival, $train_model, $num_seats, $price, $id);
if(!$test){
    send_json(500);    
}

noReturnExecute($stmt);