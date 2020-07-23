<?php
ob_start();
session_start();
if (!isset($_SESSION['id_usuario'])) {
  
    echo '<script>window.location.href="../index.php";</script>';
    ob_end_flush();
}
?>
<?php
include_once '../head.php';
?>
<body>
    <div class='col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1'>
    <h3>Progreso de Meta <label for=""id="avance" name="avance"></label></h3>
    <canvas id="myCanvas" height="480"></canvas>
    </div>
</body>
<?php
include '../foot.php';
?>