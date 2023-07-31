<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'myFirstSite';

$cnn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar a conexão
if (!$cnn) {
    die("Falha na conexão: " . mysqli_connect_error());
  }
  echo "A conexão foi bem-sucedida";
  // Receber os dados do formulário
$usuario = $_POST["usuario"];
$email = $_POST["email"];
$senha = $_POST["senha"];

// Inserir os dados no banco de dados
$sql = "INSERT INTO cadastro (usuario, email, senha) VALUES ('$usuario', '$email', '$senha')";

if (mysqli_query($cnn, $sql)) {
  header("Location: login.html");
} 
  else {
  echo "Erro ao criar registro: " . mysqli_error($cnn);
}

// Fechar a conexão com o banco de dados
mysqli_close($cnn);
?>