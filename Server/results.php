<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");

checkMETHOD("POST");

$origin = mustPOST("origin");
$destination = mustPOST("destination");
$day=2001-01-01;

if (isset($_POST["day"])) {
        $day=$_POST["day"];
    }

$db = connect();

$stmt = mysqli_prepare($db, "select * from journey_info where origin=? and destination=?;");
if (!$stmt) {
    send_json(500, "Error: No statement created");
    return;
}

$test = mysqli_stmt_bind_param($stmt, "ss", $origin, $destination);
if(!$test){
    send_json(500, "Error binding params");    
}

$test = mysqli_stmt_execute($stmt);
if(!$test){
    send_json(500, "Error executing");  
}

$test = mysqli_stmt_bind_result($stmt, $id, $origin, $destination, $departure, $arrival, $train_model, $num_seats, $price);
if(!$test){
    send_json(500, "Error binding result");  
}

$results = array();
while (mysqli_stmt_fetch($stmt)) {
    $results[] = array(
        'id'=> $id,
        'origin' => $origin,
        'destination' => $destination,
        'departure' => $departure,
        'arrival' => $arrival,
        'train_model' => $train_model,
        'num_seats' => $num_seats,
        'price' => $price,
        'day' => $day
    );
}

if ($results) {
    send_json(200, $results);
} else {
    send_json(500);
}
