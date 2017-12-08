<?php
require_once("./utils.php");
require_once("./create-person.php");
require_once("./create-seat.php");
require_once("./mysqli_conect.php");

$json = receiveJSON();

for($i = 0; $i < $json.length; ++$i){
    $obj = $json[$i];    
    createSeat($obj[journey_id], $obj[used], $obj[day], $obj[dni], $obj[name], $obj[surname], $obj[phone],$obj[email]);
}
