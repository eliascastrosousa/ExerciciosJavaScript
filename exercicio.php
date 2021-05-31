<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo/estilo.css">
    <link rel="stylesheet" href="estilo/exercicio.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@100&display=swap" rel="stylesheet">
    <title>Curso PHP</title>
</head>
<body class="exercicio">
    
    <header class="cabecalho">
        <h1>Curso PHP </h1>
        <h2>Visualização do Exercicio</h2>
    </header>

    <nav class="navegacao">
        <a href="#" class="verde">Sem formatação</a>
        <a href="index.php" class="vermelho">Voltar</a>
    </nav>
    <main class="principal">
        <div class="conteudo">
            <?php 
                include('teste/teste.php') 
            ?>
        </div>
    </main>

    <footer class="rodape">COD3R & ALUNOS <?= date('Y'); ?> 

    </footer>

     
</body>
</html>