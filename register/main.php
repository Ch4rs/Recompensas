<?php
ob_start();
session_start();
if(isset($_POST["action"]))
{
    include_once getcwd() . '/../classes/Login.php';
    header('Content-Type: application/json; charset=utf-8;');
    switch($_POST["action"])
    {
        case 'register':
        $obj = new Manager();
        echo $obj->register($_POST['dt']);
        break;
        default:
        break;
    }
}
?>