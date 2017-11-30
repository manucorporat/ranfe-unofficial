<?php
    require_once("./utils.php");
    checkMETHOD("POST");

    $user = mustPOST("user");
    $password = mustPOST("password");

    if($user == "root" && $password == "root"){
        send_json(200, array(
            'token' => $TOKEN
        ));
    } else {
        send_json(401);
    }
?>