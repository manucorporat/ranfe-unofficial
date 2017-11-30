<?php

function must($data) {
    if (!$data) {
            send_json(400);
            exit(-1);
    }
    return $data;
}

function send_json($code, $data = false) {

    http_response_code($code);  
    if ($data) {
        header("Content-Type: application/json");
        echo json_encode($data);
    }
}

?>