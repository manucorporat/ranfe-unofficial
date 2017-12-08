<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");


function createSeat($journey, $used, $day, $dni, $name, $surname, $phone, $email){
    
    $seat = checkSeat($journey);

    if($seat<0){
        send_json(200, array(
            'message' => "Error: No seats available"
        ));
    }

    /*Creamos el seat */
    $stmt = mysqli_prepare($db, "insert into seats
    (journey_info, used, day, dni, name, surname, phone, email, seat)
    values(? ,? ,? ,? ,? ,? ,? ,? ,? );");
    
    if ($stmt) {
    mysqli_stmt_bind_param($stmt, "i,i,s,s,s,s,s,s",
        $journey, $used, $day, $dni, $name, $surname, $phone, $email, $seat);
    
    noReturnExecute($stmt);
    }
}

function checkSeat($journey_id, $day){
    $count = 1;
    $stmt = mysqli_prepare($db, "select seat from seats where journey_id=? day=? order by seat;");
    mysqli_stmt_bind_param($stmt, "is", $journey_id, $day);
    $test = mysqli_stmt_execute($stmt);
    mysqli_stmt_bind_result($stmt, $seat);

    $count = 0;
    while (mysqli_stmt_fetch($stmt)) {
        if($seat!=$count) break;
        ++$count;
    }

    return checkOcupation($seat, $journey_id);
}

function checkOcupation($seat, $journey_id){
    $stmt = mysqli_prepare($db, "select num_seats from journey_info where journey_id=?;");
    mysqli_stmt_bind_param($stmt, $journey_id);
    $test = mysqli_stmt_execute($stmt);
    mysqli_stmt_bind_result($stmt, $num_seats);
    mysqli_stmt_fetch($stmt);
    
    if($seat>$num_seats){return -1;}
    else{return $seat;}
    
}











