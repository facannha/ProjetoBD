<?php

$servidor = "localhost"; 
$usuario = "root";
$senha = "";
$database = "projetobd";

$conexao = mysqli_connect($servidor, $usuario, $senha, $database);

if($conexao){
    echo 'Conexão bem-sucedida';
}else{
    echo 'Falha na conexão';
}

?>