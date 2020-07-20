<?php
include_once '../head.php';
include_once '../menu.php';
?>

<body>
    <div class='container'>
        <form id='tb_pedidos_create' name='tb_pedidos_create'>
            <div class='form-group'>
                <label for='cantidad_create'>cantidad</label>
                <input type='number' id='cantidad_create' name='cantidad_create' class='form-control'>
            </div>
            <div class='modal-footer'>
                <button id='btn_create' class='btn btn-primary'>Registrar</button>
                <button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>
            </div>
        </form>
    </div>
</body>
<?php
include '../foot.php';
?>
<script src='main.js?v=4'></script>