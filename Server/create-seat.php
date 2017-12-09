<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");


function createSeat($db, $journey, $used, $day, $dni, $name, $surname, $phone, $email){
    
    $seat = checkSeat($db, $journey,$day);

    if($seat<0){
        return 'Error: No seats available';
    }

    /*Creamos el seat */
    $stmt = mysqli_prepare($db, "insert into seats
    (journey_info, used, day, dni, name, surname, phone, email, seat)
    values(? ,? ,? ,? ,? ,? ,? ,? ,? );");

    
    if ($stmt) {
        $test = mysqli_stmt_bind_param($stmt, "iissssssi",
            $journey, $used, $day, $dni, $name, $surname, $phone, $email, $seat);
        
            echo var_dump($seat);
        if(!$test){
            return 'Error: binding params';
        }
        $test = mysqli_stmt_execute($stmt);
        if(!$test){
            return 'Error: executing';
        }
        return 'OK';
    }
    else return 'Error: preparing';
}
function checkSeat($db, $journey_id, $day){
    $count = 1;
    $stmt = mysqli_prepare($db, "select seat from seats where journey_info=? and day=? order by seat;");
    $test = mysqli_stmt_bind_param($stmt, "is", $journey_id, $day);
    if(!$test){
        return -1;
    }
    $test = mysqli_stmt_execute($stmt);
    if(!$test){
        return -1;
    }
    $test = mysqli_stmt_bind_result($stmt, $seat);
    if(!$test){
        return -1;
    }
    $count = 0;
    while (mysqli_stmt_fetch($stmt)) {
        if($seat!=$count) break;
        ++$count;
    }

    return checkOcupation($db, $seat, $journey_id);
}

function checkOcupation($db, $seat, $journey_id){

    $stmt = mysqli_prepare($db, "select num_seats from journey_info where id=?;");
    
    if($stmt){
        $test = mysqli_stmt_bind_param($stmt,"i", $journey_id);
        if(!$test){
            return -1;
        }
        $test = mysqli_stmt_execute($stmt);
        if(!$test){
            return -1;
        }
        $test = mysqli_stmt_bind_result($stmt, $num_seats);
        if(!$test){
            return -1;
        }
        if($test = mysqli_stmt_fetch($stmt)){
            if($seat>$num_seats){return -1;}
            else{return $seat;}
        }
        else return 1;
    }
    else return -1;
    
}











