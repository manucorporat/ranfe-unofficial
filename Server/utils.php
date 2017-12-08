<?php
$TOKEN = "1234567";

function checkMETHOD($method) {
    if ($_SERVER['REQUEST_METHOD'] != $method) {
        send_json(405);
        exit(-1);
    }
}

function receiveJSON(){

$json_params = file_get_contents("php://input");
    $decoded_params = json_decode($str);
    
if (json_last_error() == JSON_ERROR_NONE)
  return $decoded_params;
}


function checkTOKEN() {
    $t = mustPOST("token");
    if ($t != $TOKEN) {
        send_json(401);
        exit(-1);
    }
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
        header("Content-Type: application/json");
        echo json_encode($data);
    }
}

