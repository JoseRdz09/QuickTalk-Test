<?php
    $host = 'localhost'; // o la IP del servidor de la base de datos
    $usuarioDB = 'root';
    $contrasenaDB = '';
    $nombreDB = 'quicktalk';

    // Crear conexión
    $conn = mysqli_connect($host, $usuarioDB, $contrasenaDB, $nombreDB);
?>