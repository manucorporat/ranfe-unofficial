<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");

checkMETHOD("POST");
checkTOKEN();


$origin = mustPOST("origin");
$destination = mustPOST("destination");
$departure = mustPOST("departure");
$arrival = mustPOST("arrival");
$train_model = mustPOST("train_model");
$num_seats = mustPOST("num_seats");
$price = mustPOST("price");

$db = connect();

$stmt = mysqli_prepare($db, "insert into journey_info
    (origin, destination, departure,
    arrival, train_model,num_seats,price)
    values(? ,? ,? ,? ,? ,? ,? );");

if (!$stmt) {
    send_json(500);
}
$test =mysqli_stmt_bind_param($stmt, "sssssis",
$origin, $destination, $departure, $arrival, $train_model, $num_seats, $price);
if(!$test){
    send_json(500);    
}

noReturnExecute($stmt);