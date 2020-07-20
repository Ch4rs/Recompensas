<?php
ob_start();
session_start();
if (!isset($_SESSION['user'])) {
  
    echo '<script>window.location.href="../index.php";</script>';
    ob_end_flush();
}
?>
<?php
include_once '../head.php';
?>
<body>
    <div class='col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1'>
        <form id='tb_pedidos_create' name='tb_pedidos_create'>
            <div class='form-group'>
                <label for='cantidad_create'>Cantidad A Comprar</label>
                <input type='number' id='cantidad_create' name='cantidad_create' class='form-control'>
            </div>
            <div class='col-md-4 offset-md-4 col-sm-4 offset-sm-4 col-xs-4 offset-xs-4' >
                <button id='btn_create' class='btn btn-primary'>Pedir</button>
                <button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>
            </div>
        </form>
    </div>
</body>
<?php
include '../foot.php';
?>