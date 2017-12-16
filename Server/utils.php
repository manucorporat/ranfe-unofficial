<?php

function getToken(){
    return "1234567";    
}

function checkMETHOD($method) {
    if ($_SERVER['REQUEST_METHOD'] != $method) {
        send_json(405);
        exit(-1);
    }
}
//comprobamos la longitud de un string (solo del valor sin espacios)
function testLength($string){
    if(strlen(trim($string))>20){
        send_json(500,"Error: String too long");
        exit(-1);
    }
    else{
        return strtolower(trim($string));
    }
}

function receiveJSON(){
    $json_params = file_get_contents("php://input");
    $decoded_params = json_decode($json_params, true);
    return $decoded_params;
}

function checkTime($time){
    
    $regexp = "/^([0-1][0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])$/";
    if(preg_match($regexp,$time)){
        return TRUE;
    }
    else return FALSE;
}

function checkTOKEN() {
    $t = mustPOST("token");
    $token = getToken();
    if ($t != $token) {
        send_json(401);
        exit(-1);
    }
}

function checkNIE($dni){
    $regexp= "/\d+[A-Z]/i";
    if(preg_match($regexp,$dni)){
        return TRUE;
    }
    else return FALSE;  
}

/*function checkEmail($email)
{
  $matches = null;
  return (1 === preg_match('/^[A-z0-9\\._-]+@[A-z0-9][A-z0-9-]*(\\.[A-z0-9_-]+)*\\.([A-z]{2,6})$/', $email, $matches));
}*/
function testEmailLength($email){
    if(strlen(trim($email))>20){
        send_json(500,"Error: Email too long");
        exit(-1);
    }
    else{
        return strtolower(trim($email));
    }
}
function checkEmail($email)
{
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      return TRUE;
  }
  else return FALSE;
}
function checkSQLDate($date){
    $regexp = "/^\d{4}-\d{2}-\d{1,2}$/";
    if(preg_match($regexp,$date)){
        return TRUE;
    }
    else return FALSE;
}

function noReturnExecute($stmt, $error=500) {
    //Ejecutamos la consulta preparada
    $test = mysqli_stmt_execute($stmt);

    if ($test) {
        send_json(200, array(
            'message' => "OK"
        ));
    } else {
        send_json($error);
    }
}
// function test($test, $error){
//     if ($test) {
//         send_json(200, array(
//             'message' => "OK"
//         ));
//     } else {
//         send_json(500,$error);
//     }
// }
function mustPOST($key) {
    if (!isset($_POST[$key])) {
        send_json(400);
        exit(-1);
    }
    return trim($_POST[$key]);
}

function send_json($code, $data = false) {
    http_response_code($code);
    header("Access-Control-Allow-Origin: *");
    if ($data) {
        if(is_string($data)){
            $data = array('message' => $data);
        }
        header("Content-Type: application/json");
        echo json_encode($data);
    }
    if($code != 200){
        exit(1);
    }
}

