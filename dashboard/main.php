<?php
if (isset($_POST['action'])) {
    include_once '../classes/Recompensas.php';
    header('Content-Type: application/json; charset=utf-8;');
    switch ($_POST['action']) {
        case 'get':
            $obj = new Manager();
            echo $obj->get();
            break;
    }
}
