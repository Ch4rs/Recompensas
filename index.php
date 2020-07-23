<?php
 ob_start();
 session_start();
 if(isset($_SESSION['id_usuario']))	{
    echo '<script>window.location.href="dashboard/index.php";</script>';
	ob_end_flush();
}
else {
    echo '<script>window.location.href="login/index.php";</script>';
}
?>