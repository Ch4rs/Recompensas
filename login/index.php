<?php
ob_start();
session_start();
if (isset($_SESSION['user'])) {
  
    echo '<script>window.location.href="../index.php";</script>';
    ob_end_flush();
}
?>

<!DOCTYPE html>
<html lang="en">

<head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    

    <title>Inicio de Sesion - MLEGNA</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css">
    <style type="text/css">
        .error,
        .invalid {
            color: red;
            font-family: "Times New Roman", Times, serif;
            font-style: italic;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>

<body>
        <div class="container">
            <div class="row">
                <form id="form_login" name="form_login" class="login">
                    <div class="form-group col-md-4 col-md-offset-4">
                        <label for="user_name" style="color:white;">USUARIO:</label>
                        <input type="text" name="user_name" id="user_name" class="form-control">
                    </div>
                    <div class="form-group col-md-4 col-md-offset-4">
                        <label for="clean_pass" style="color:white;">CONTRASEÑA:</label>
                        <input type="password" name="clean_pass" id="clean_pass" class="form-control">
                        <div class="alert-danger" id="caplock" style="visibility: hidden">Tienes la tecla Bloq
                            Mayús
                            activada.
                        </div>
                        <label id="error"></label>
                    </div>
                    <div class="form-group col-md-4 col-md-offset-4">
                        <button id="btnEnviar" type="submit" class="btn btn-success"> ENTRAR </button>
                    </div>
                </form>
            </div>

        </div>
</body>
<script src="../assets/jquery.js"></script>
<script src="../assets/jquery.validate.min.js"></script>
<script src="../assets/bootstrap/js/bootstrap.min.js"></script>
<script src="main.js?v=5"></script>

</html>
