<?php
                        if(isset($_POST['action']))
                        {
                            include_once '../classes/Clientes.php';
                            header('Content-Type: application/json; charset=utf-8;');
                            switch($_POST['action'])
                            {
                                case 'get':
                                $obj = new Manager();
                                echo $obj->get();
                                break;
                                case 'set':
                                $obj = new Manager();
                                echo $obj->set($_POST['dt']);
                                break;
                                case 'del':
                                $obj = new Manager();
                                echo $obj->delete($_POST['dt']);
                                break;
                                case 'update':
                                $obj = new Manager();
                                echo $obj->update($_POST['dt']);
                                break;
                                case 'consult':
                                $obj = new Manager();
                                echo $obj->consultas($_POST['dt']);
                                break;
                                case 'getselect':
                                $obj = new Manager();
                                echo $obj->getselect($_POST['dt']);
                                break;
                            }
                        }
                        ?>