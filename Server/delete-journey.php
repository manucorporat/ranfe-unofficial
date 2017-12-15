<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");

checkMETHOD("POST");
checkTOKEN();


$id = mustPOST("id");

$db = connect();

$stmt = mysqli_prepare($db, "delete journey_info where
    id= ? ;");

if (!$stmt) {
    send_json(500);
}
$test =mysqli_stmt_bind_param($stmt, "i", $id);
if(!$test){
    send_json(500);    
}

noReturnExecute($stmt);