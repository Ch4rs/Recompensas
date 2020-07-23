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
            <div class="row">
                <form id="form_login" name="form_login" class="login">
                    <div class="form-group col-md-4 col-md-offset-4">
                        <label for="numero" >USUARIO:</label>
                        <input type="text" name="numero" id="numero" class="form-control">
                    </div>
                    <div class="form-group col-md-4 col-md-offset-4">
                        <label for="password" >CONTRASEÑA:</label>
                        <input type="password" name="passw" id="passw" class="form-control">
                        <label id="error"></label>
                    </div>
                    <div class="form-group col-md-4 col-md-offset-4">
                    <a href="../register" class="btn-block btn-info">REGISTRAR?</a>
                    <a href="../rest" class="btn-block btn-info">OLVIDASTE TU CONTRASEÑA?</a>
                        <button id="btnEnviar" type="submit" class="btn-block btn-info"> ENTRAR </button>
                    </div>
                </form>
            </div>

        </div>
</body>
<?php
include_once '../foot.php';
?>