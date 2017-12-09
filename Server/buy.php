<?php
require_once("./utils.php");
require_once("./create-seat.php");
require_once("./mysqli_conect.php");

$json = receiveJSON();

$db = connect();

for($i = 0; $i < count($json); $i++){
    $obj = $json[$i];    
    $check = createSeat($db, $obj['journey_id'], $obj['used'], $obj['day'], $obj['dni'], $obj['name'], $obj['surname'], $obj['phone'],$obj['email']);

    switch($check){
        case 'OK':
        send_json(200, 'OK');
        break;
        
        case 'Error: No seats available':
        send_json(200,$check);
        break;
        
        case 'Error: preparing':
        send_json(500,$check);
        break;
        
        case 'Error: binding params':
        send_json(500,$check);
        break;

        case 'Error: executing':
        send_json(500,$check);
        break;
        
        default:
        send_json(500,'Error: Unknown');
        break;
    }
}
