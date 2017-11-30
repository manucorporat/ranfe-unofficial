
<?php
$query = "select * from info_recorrido";
$response = mysqli_query($db,$query);
$num = mysqli_num_rows($response);




/*Liberamos la serie de resultados */
mysqli_free_result($response);

?>
