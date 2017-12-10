<?php
require_once("./utils.php");
require_once("./create-seat.php");
require_once("./mysqli_conect.php");

$json = receiveJSON();

$db = connect();

for($i = 0; $i < count($json); $i++){
    $obj = $json[$i];  
     
    $error = createSeat($db, $obj['journey_id'], $obj['used'], $obj['day'], $obj['dni'], $obj['name'], $obj['surname'], $obj['phone'],$obj['email']);
    if($error == 'Error: No seats available'){
        send_json(200,$error);
        exit(0);
    }else if($error != NULL) {
        send_json(500,$error);        
    }
}
send_json(200, 'OK');

