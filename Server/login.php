<?php
    require_once("./utils.php");
    mustMETHOD("POST");

    $user = mustPOST("user");
    $password = mustPOST("password");

    if($user == "root" && $password == "root"){
        send_json(200, array(
            'token' => "1234567"
        ));
    } else {
        send_json(401);
    }
?>