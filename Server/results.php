<?php

require_once("./utils.php");
require_once("./mysqli_conect.php");
checkMETHOD("POST");

$origin = mustPOST("origin");
$destination = mustPOST("destination");


if($stmt = mysqli_prepare($db,"select * from journey_info where origin = ? and destination = ? ;")){

    mysqli_stmt_bind_param($stmt, "ss",$origin,$destination);
    
    $test = mysqli_stmt_execute($stmt);
    
    mysqli_stmt_bind_result($stmt,$id,$origin,$destination,$departure,$arrival,$train_model,$num_seats,$price);
        

    $results = array();
    while (mysqli_stmt_fetch($stmt)) {
        $results[] = array(
            'origin' => $origin,
            'destination' => $destination,
            'departure' => $departure,
            'arrival' => $arrival,
            'train_model' => $train_model,
            'num_seats' => $num_seats,
            'price' => $price
        );
    }


    if($results){
        send_json(200,$results);
    }
    else send_json(500);

}

?>