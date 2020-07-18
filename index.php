<?php
 ob_start();
 session_start();
 if(isset($_SESSION['user']))	{
    echo '<script>window.location.href="dashboard/index.php";</script>';
	ob_end_flush();
}
else {
    echo '<script>window.location.href="login/index.php";</script>';
}
?>