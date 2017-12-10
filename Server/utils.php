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

function receiveJSON(){
    $json_params = file_get_contents("php://input");
    $decoded_params = json_decode($json_params, true);
    return $decoded_params;
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
    $regexp= "#((\d{8})([-]?)([A-Z]{1}))#";
    if(preg_match($regexp,$dni)){
        return $dni;
    }
    else return FALSE;  
}

/*function checkEmail($email)
{
  $matches = null;
  return (1 === preg_match('/^[A-z0-9\\._-]+@[A-z0-9][A-z0-9-]*(\\.[A-z0-9_-]+)*\\.([A-z]{2,6})$/', $email, $matches));
}*/

function checkEmail($email)
{
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      return $email;
  }
  else return FALSE;
}
function checkSQLDate($date){
    $regexp = "#(\d{4})-(\d{2})-(\d{2})#";
    if(preg_match($regexp,$date)){
        return $date;
    }
    else return FALSE;
}

function noReturnExecute($stmt, $error=500) {
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
}

