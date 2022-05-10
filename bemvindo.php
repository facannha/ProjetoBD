<?php 
    include_once('conexao.php');
    $nome = $_POST['lNome'];
    $cpf = $_POST['lCpf'];

    $sql = "INSERT INTO conexaobd (nome, cpf) VALUES ('$nome', '$cpf')";
    $query = mysqli_query($conexao, $sql);
?>

<h1>BEM VINDO AO PHP</h1>