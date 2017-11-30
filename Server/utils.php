<?php

$TOKEN = "1234567";

function checkMETHOD($method) {
    if($_SERVER['REQUEST_METHOD'] != $method) {
        send_json(405);
        exit(-1);
    }
}


function checkTOKEN(){
    $t = mustPOST("token");
    if($t != $TOKEN){
        send_json(401);
        exit(-1);
    }

}

function mustPOST($key) {
    if(!isset($_POST[$key])) {
        send_json(400);
        exit(-1);
    }
    return $_POST[$key];
}

function send_json($code, $data = false) {

    http_response_code($code);
    header("Access-Control-Allow-Origin: *");
    if ($data) {
        header("Content-Type: application/json");
        echo json_encode($data);
    }
}

?>