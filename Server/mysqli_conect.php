
<?php
    /* Variables del laboratorio*/
    /*
    $host = 'http://vulcano.tel.uva.es/taw/taw002';
    $login = 'taw002';
    $pass = 'n81e59h7';
    $db_name = 'journey';
    */


function connect() {
    /*Variables de casa*/
    $host = 'localhost';
    $login = 'root';
    $pass = 'eliseo';
    $db_name = 'journey';
    /*Establecemos y comprobamos la conexion con la base de datos*/
    @$db = mysqli_init();
    if (!$db) {
        die('FATAL ERROR: mysqli_init() failed');
    }

    if (!mysqli_real_connect($db, $host, $login, $pass, $db_name)) {
        echo 'ERROR: Database conection refused <br>';
        die('Connection Error: ' . mysqli_connect_errno() . ')' . mysqli_connect_error());
    }
    return $db;
}
