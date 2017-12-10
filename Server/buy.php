<?php
require_once("./utils.php");
require_once("./create-seat.php");
require_once("./mysqli_conect.php");

$json = receiveJSON();

$db = connect();

for($i = 0; $i < count($json); $i++){
    $obj = $json[$i];    
    $error = createSeat($db, $obj['journey_id'], $obj['used'], $obj['day'], $obj['dni'], $obj['name'], $obj['surname'], $obj['phone'],$obj['email']);
      
    if($error){
        send_json(500,$check);
    }
    
}
send_json(200, 'OK');

