
<?php
require_once("./utils.php");
require_once("./mysqli_conect.php");
checkMETHOD("POST");

$origin = mustPOST("origin");
$destination = mustPOST("destination");
$departure = mustPOST("departure");
$arrival = mustPOST("arrival");
$train_model = mustPOST("train_model");
$num_seats = mustPOST("num_seats");
$price = mustPOST("price");




if($stmt = mysqli_prepare($db,"insert into journey_info(origin,
                                                    destination, departure,
                                                        arrival, train_model,num_seats,price) values(
                                                            ? ,? ,? ,? ,? ,? ,? );")){

    mysqli_stmt_bind_param($stmt, "sssssis",$origin,$destination,$departure,$arrival,$train_model,$num_seats,$price);
    
    noReturnExecute($stmt);            
    
}


?>