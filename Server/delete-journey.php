<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");

checkMETHOD("POST");
checkTOKEN();

//recibimos solamente el id del viaje a borrar
$id = mustPOST("id");

$db = connect();

//Preparamos la sentencia para su ejecucion
$stmt = mysqli_prepare($db, "delete from journey_info where
    id= ? ;");

if (!$stmt) {
    send_json(500);
}
//Agregamos las variables de la sentencia preparada como parámetros
$test =mysqli_stmt_bind_param($stmt, "i", $id);
if(!$test){
    send_json(500);    
}

noReturnExecute($stmt);