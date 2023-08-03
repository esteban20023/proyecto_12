<?php
//inclucion de conexion
include '../app/conexion.php';
// validacion de variables
$email = $_GET['email'];
$password = $_GET['password'];

$sql = "SELECT * FROM cliente WHERE cliCorreo='$email' and cliContraseña='$password' ";

//print_r($sql);die;
$result = $mysqli->query($sql);
//print_r($result->num_rows);
if ($result->num_rows == 0) {
    $mensaje = 'Consulta no válida: ' . mysqli_error($mysqli) . "\n";
    // header("Location: ../index.php");
    
}
while ($rows = mysqli_fetch_all($result)) {
    echo json_encode($rows);
}
?>
