<?php
if(isset($_POST['registro'])){
    // Asegúrate de que los campos no estén vacíos
    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password'])){
        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);

        // Considera usar password_hash() para encriptar las contraseñas antes de guardarlas en la base de datos
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        $insertData = "INSERT INTO usuarios (name, email, password) VALUES ('$name', '$email', '$passwordHash')";
        $runInsert  = mysqli_query($conn, $insertData);

        if($runInsert){
            echo "Registro exitoso.";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    } else {
        echo "Por favor, completa todos los campos.";
    }
}
?>