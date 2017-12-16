<?php
//aqui contemplamos la compra de billetes
require_once("./utils.php");
require_once("./create-seat.php");
require_once("./mysqli_conect.php");
//recibimos los datos de cada cliente y viaje en un json
$json = receiveJSON();

//nos conectamos con la base de datos
$db = connect();
//para cada posicion del json hacemos una peticion
for($i = 0; $i < count($json); $i++){
    $obj = $json[$i];  
    //creamos la "ocupacion" que es el cliente y el viaje con las comprobaciones de los strings
    $error = createSeat($db, $obj['journey_id'], $obj['used'], $obj['day'], testLength($obj['dni']), testLength($obj['name']), testLength($obj['surname']), testLength($obj['phone']),testEmailLength($obj['email']));
    //comprobamos que todo haya ido bien
    //no contemplamos el exceso de ocupacion como un error del servidor -> mensaje 200
    if($error == 'Error: No seats available'){
        send_json(200,$error);
        exit(0);
    }else if($error != NULL) {
        send_json(500,$error);        
    }
}
//si todo va bien 200-OK
send_json(200, 'OK');

