<?php
 if(isset($_SESSION['user']))	{
	if($_SESSION['id_privilegio'] == 1){
        include_once '../SuperAdmin/menu.php';
    }
    else if($_SESSION['id_privilegio'] == 2){
        include_once '../Administrador/menu.php';
    }
    else if($_SESSION['id_privilegio'] == 3){
        include_once '../SupervisorMonitores/menu.php';
    }
    else if($_SESSION['id_privilegio'] == 4 || $_SESSION['id_privilegio'] == 5 || $_SESSION['id_privilegio'] == 6){
        include_once '../Monitores/menu.php';
    }
    else if($_SESSION['id_privilegio'] == 7 || $_SESSION['id_privilegio'] == 8 || $_SESSION['id_privilegio'] == 9 || $_SESSION['id_privilegio'] == 10){
         if ($_SESSION['id_privilegio']== 7) {
            include_once '../Bitacora/menuizzi.php';
        }elseif ($_SESSION['id_privilegio']== 8) {
             include_once '../Bitacora/menumc.php';
        }elseif ($_SESSION['id_privilegio']== 9) {
            include_once '../Bitacora/menu.php';
        }elseif ($_SESSION['id_privilegio']== 10) {
            include_once '../Tecnicos/IZZI/WIZZ.php';
            }
        else {
            header("location: ../Login.php");
            exit;
        }
    }
    else if(($_SESSION['id_privilegio']>10 && $_SESSION['id_privilegio']<18)){
        include_once '../Ayudante/menu.php';
    }
    else if(($_SESSION['id_privilegio'] == 19 )){
        include_once '../Pagopro/menu.php';
    }
    else if(($_SESSION['id_privilegio'] == 20 )){
        include_once '../AuxiliarRegistro/menu.php';
    }
    else if(($_SESSION['id_privilegio'] == 100 )){
        include_once '../dashboard/menu.php';
    }
}
?>