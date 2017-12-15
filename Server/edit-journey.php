<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");

checkMETHOD("POST");
checkTOKEN();

$id = mustPOST("id");
$origin = mustPOST("origin");
$destination = mustPOST("destination");
$departure = mustPOST("departure");
$arrival = mustPOST("arrival");
$train_model = mustPOST("train_model");
$num_seats = mustPOST("num_seats");
$price = mustPOST("price");

$db = connect();

$stmt = mysqli_prepare($db, "update journey_info set
    origin = ?, destination = ?, departure = ?,
    arrival = ?, train_model = ?,num_seats = ?,price = ? where id = ?;");
if (!$stmt) {
    send_json(500);
}
$test =mysqli_stmt_bind_param($stmt, "sssssisi",
$origin, $destination, $departure, $arrival, $train_model, $num_seats, $price, $id);
if(!$test){
    send_json(500);    
}

noReturnExecute($stmt);