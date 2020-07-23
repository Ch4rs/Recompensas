<?php
if (isset($_POST['action'])) {
    include_once '../classes/Compras.php';
    header('Content-Type: application/json; charset=utf-8;');
    switch ($_POST['action']) {
        case 'set':
            $obj = new Manager();
            echo $obj->set($_POST['dt']);
            break;
        case 'get':
            $obj = new Manager();
            echo $obj->get();
            break;
    }
}
