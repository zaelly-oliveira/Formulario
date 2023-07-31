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
  // Receber os dados do formulário
$usuario = $_POST["usuario"];
$senha = $_POST["senha"];

// Inserir os dados no banco de dados
$sql = "SELECT * FROM cadastro WHERE usuario = '$usuario' AND senha = '$senha'";
$result = mysqli_query($cnn, $sql);

// Verificar se há algum registro
if (mysqli_num_rows($result) > 0) {
  // Redirecionar para a página principal
  header("Location: index.html");
} else {
  echo "<script>
  if(confirm('Email ou senha incorretos, tente novamente!')){
  }
  </script>";
}

// Fechar a conexão com o banco de dados
mysqli_close($cnn);
?>