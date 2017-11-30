<?php
include utils.php;

    $user = must($_POST["user"]);
    $password = must($_POST["password"]);

    if($user == "root" && $password == "root"){
        send_json(200, array(
            'token' => "1234567"
        ));
    } else {
        send_json(401);
    }

?>