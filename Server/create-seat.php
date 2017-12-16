<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");


function createSeat($db, $journey, $used, $day, $dni, $name, $surname, $phone, $email) {
    if (!checkSQLDate($day)) {
        return "Error: Not using SQL Date Format";
    }
    if (!checkEmail($email)) {
        return "Error: Not an email address";
    }
    if (!checkNIE($dni)) {
        return "Error: Not a DNI or NIE";
    }
    $seat = checkSeat($db, $journey, $day);

    if ($seat<0) {
        return 'Error: No seats available';
    }

    /*Creamos el seat */
    //Preparamos la sentencia para su ejecucion
    $stmt = mysqli_prepare($db, "insert into seats
    (journey_info, used, day, dni, name, surname, phone, email, seat)
    values(? ,? ,? ,? ,? ,? ,? ,? ,? );");
    if (!$stmt) {
        return 'Error: preparing';
    }
    //Agregamos las variables de la sentencia preparada como parámetros
    $test = mysqli_stmt_bind_param($stmt, "iissssssi",
        $journey,
        $used,
        $day,
        $dni,
        $name,
        $surname,
        $phone,
        $email,
        $seat
    );
    if (!$test) {
        return 'Error: binding params';
    }
    //Ejecutamos la consulta preparada
    $test = mysqli_stmt_execute($stmt);
    if (!$test) {
        return 'Error: executing';
    }

    mysqli_stmt_close($stmt);
    return null;
}

function checkSeat($db, $journey_id, $day) {
    //Preparamos la sentencia para su ejecucion
    $stmt = mysqli_prepare($db, "select seat from seats where journey_info=? and day=? order by seat;");
    if (!$stmt) {
        return -1;
    }
    //Agregamos las variables de la sentencia preparada como parámetros
    $test = mysqli_stmt_bind_param($stmt, "is", $journey_id, $day);
    if (!$test) {
        return -1;
    }
    //Ejecutamos la consulta preparada
    $test = mysqli_stmt_execute($stmt);
    if (!$test) {
        return -1;
    }
    //Vinculamos las variables a la sentencia preparada para el almacenamiento de resultados
    $test = mysqli_stmt_bind_result($stmt, $seat);
    if (!$test) {
        return -1;
    }

    $count = 1;
    //vamos leyendo todos los sitios hasta que el contador encuentre uno vacio
    //Obtenemos los resultados de la sentencia preparada en las variable que habiamos vinculado
    while (mysqli_stmt_fetch($stmt)) {
        if ($count != $seat) {
            break;
        } else {
            ++$count;
        }
    }
    mysqli_stmt_close($stmt);

    return checkOcupation($db, $count, $journey_id);
}

function checkOcupation($db, $seat, $journey_id) {
    //Preparamos la sentencia para su ejecucion
    $stmt = mysqli_prepare($db, "select num_seats from journey_info where id=?;");
    if (!$stmt) {
        return -1;
    }
    //Agregamos las variables de la sentencia preparada como parámetros
    $test = mysqli_stmt_bind_param($stmt, "i", $journey_id);
    if (!$test) {
        return -1;
    }
    //Ejecutamos la consulta preparada
    $test = mysqli_stmt_execute($stmt);
    if (!$test) {
        return -1;
    }
    //Vinculamos las variables a la sentencia preparada para el almacenamiento de resultados
    $test = mysqli_stmt_bind_result($stmt, $num_seats);
    if (!$test) {
        return -1;
    }

    if (!mysqli_stmt_fetch($stmt)) {
        return -1;
    }

    if ($seat > $num_seats) {
        return -1;
    }
    mysqli_stmt_close($stmt);
    return $seat;
}
