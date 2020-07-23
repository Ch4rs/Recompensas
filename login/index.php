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
                    <label for="numero">USUARIO:</label>
                    <input type="text" name="numero" id="numero" class="form-control">
                </div>
                <div class="form-group col-md-4 col-md-offset-4">
                    <label for="password">CONTRASEÑA:</label>
                    <input type="password" name="passw" id="passw" class="form-control">
                    <label id="error"></label>
                </div>
                <div class="form-group col-md-4 col-md-offset-4">
                    <div class="row">
                        <div class="col">
                            <button href="../register" class="btn-block btn-info"> REGISTARTE </button>
                        </div>
                        <div class="col">
                            <button href="../rest" class="btn-block btn-info"> OLVIDASTE TU CONTRASEÑA</button>
                        </div>
                    </div>
                    <button id="btnEnviar" type="submit" class="btn-block btn-info"> ENTRAR </button>
                </div>
            </form>
        </div>

    </div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
<?php
include_once '../foot.php';
?>