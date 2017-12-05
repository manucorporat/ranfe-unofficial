<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");

checkMETHOD("POST");

$dni = mustPOST("dni");
$name = mustPOST("name");
$surname = mustPOST("surname");
$phone = mustPOST("phone");
$email = mustPOST("email");


$stmt = mysqli_prepare($db, "select * from person_info where dni = ?;");
if (!$stmt) {
    send_json(500);
    return;
}

/*Pedimos los datos de la persona */
mysqli_stmt_bind_param($stmt, "s", $dni);
$test = mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $id_r, $name_r, $surname_r, $dni_r, $phone_r, $email_r);
mysqli_stmt_fetch($stmt);

if ($dni == $dni_r) {
    $stmt = mysqli_prepare($db, "delete from person_info where dni == ?;");
    mysqli_stmt_bind_param($stmt, "s", $dni);

    noReturnExecute($stmt);
} else {
    $stmt = mysqli_prepare($db, "insert into person_info
    (name_, surname, dni, phone, email)
    values(? ,? ,? ,? ,? );");

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "sssss", $name, $surname, $dni, $phone, $email);

        noReturnExecute($stmt);
    }
}
