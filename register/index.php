<?php
ob_start();
session_start();
if (isset($_SESSION['id_usuario'])) {
  
    echo '<script>window.location.href="../index.php";</script>';
    ob_end_flush();
}
include_once '../head.php';

?>

<body>
    <div class="container">
        <form id="form_login" name="form_login" class="login">
            <div class="col-md-4 col-md-offset-4">
                <label for="user_name">Nombre:</label>
                <input type="text" name="nombre" id="nombre" class="form-control">
            </div>
            <div class="col-md-4 col-md-offset-4">
                <label for="user_name">Apellido Paterno:</label>
                <input type="text" name="apellido_paterno" id="apellido_paterno" class="form-control">
            </div>
            <div class="col-md-4 col-md-offset-4">
                <label for="user_name">Apellido Materno:</label>
                <input type="text" name="apellido_materno" id="apellido_materno" class="form-control">
            </div>
            <div class="col-md-4 col-md-offset-4">
                <label for="user_name">Numero:</label>
                <input type="text" name="numero" id="numero" class="form-control">
            </div>
            <div class="col-md-4 col-md-offset-4">
                <label for="clean_pass">CONTRASEÑA:</label>
                <input type="password" name="passw" id="passw" class="form-control">
                <div class="alert-danger" id="caplock" style="visibility: hidden">Tienes la tecla Bloq
                    Mayús
                    activada.
                </div>
                <label id="error"></label>
            </div>
            <div class="col-md-4 col-md-offset-4">
                <button id="btnEnviar" href="../login" class="btn btn-danger"> CANCELAR </button>
                <button id="btnEnviar" type="submit" class="btn btn-success"> ENTRAR </button>
            </div>
        </form>

    </div>
</body>
<?php
include_once '../foot.php';
?>