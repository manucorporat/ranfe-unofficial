<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");

checkMETHOD("POST");
checkTOKEN();

//recibimos cada una con las correcciones necesarias
$origin = testLength(mustPOST("origin"));
$destination = testLength(mustPOST("destination"));
$departure = mustPOST("departure");
$arrival = mustPOST("arrival");
$train_model = testLength(mustPOST("train_model"));
$num_seats = mustPOST("num_seats");
$price = mustPOST("price");
echo $price;

$db = connect();
//Preparamos la sentencia para su ejecucion
$stmt = mysqli_prepare($db, "insert into journey_info
    (origin, destination, departure,
    arrival, train_model,num_seats,price)
    values(? ,? ,? ,? ,? ,? ,? );");

if (!$stmt) {
    send_json(500);
}
//Agregamos las variables de la sentencia preparada como parámetros
$test = mysqli_stmt_bind_param( $stmt, "sssssis",
    $origin,
    $destination,
    $departure,
    $arrival,
    $train_model,
    $num_seats,
    $price
);
if (!$test) {
    send_json(500);
}

noReturnExecute($stmt);
