<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/style.css">
    <link rel="stylesheet" href="style.css">

    <?php
    if (isset($_SESSION['id_usuario'])) {
  
        include_once '../menu.php';
    }
    ?>
</head>
<!--
<div id="preload_box">
    <div id="preload">
        <div id="preload_son"></div>
    </div>
</div>
-->