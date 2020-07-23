<?php
ob_start();
session_start();
require_once getcwd() . '/../config/ConnectionManager.php';
class Manager extends ConnectionManager
{
    public function get()
    {
        $retval = array(
            "data"  => false,
            "error" => false,
            "r"     => "",
            "total"=>0,
            "cantidad"=>0,
            "meta"=>0,
            "promocion"=>"Sin Promociones",
            "recompensas"=>"Sin Recompensas",
        );
        try {
            $cnx = $this->connectSqlSrv();
            $sth = "CALL SP_GET_RECOMPENSAS_PROMOSION('".$_SESSION['id_cliente']."')";
            $sth = $cnx->prepare($sth);
            $sth->execute();
            if ($retval["r"] = $sth->rowCount()) {
                while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
                    if ($row['meta']=="") {
                        $retval['total'] = 0;
                        $retval['cantidad'] = 0;
                        $retval['meta'] = 0;
                    }
                    else{
                        $retval['total'] = $row['total'];
                        $retval['cantidad'] = $row['cantidad'];
                        $retval['meta'] = $row['meta'];
                        $retval['promocion'] = $row['promocion'];
                        $retval['recompensa'] = $row['recompensa'];
                    }
                }
                $retval["data"] = true;
            } else {
                $retval["data"] = false;
            }
        } catch (PDOException $e) {
            $retval["error"] = true;
            $retval["r"]     = $e;
        }
        return json_encode($retval);
    }

    public function set($dt)
    {
        $retval = array(
            'data' => false,
            'error' => false,
            'r' => array('d' => array()),
        );
        try {
            $price =$this->get_price($dt['id_producto']);
            $dt['total'] = $dt['cantidad'] * $price;
            if ($this->set_ticket($dt['total'])) {
                $dt['id_ticket'] = $this->last_id();
                $cnx = $this->connectSqlSrv();
                $sth = $cnx->prepare("INSERT INTO tb_detalle_ticket(id_ticket,id_producto,cantidad,total)VALUES (" . $dt['id_ticket'] . "," . $dt['id_producto'] . "," . $dt['cantidad'] . ",'" . $dt['total'] . "')");
                $sth->execute();
                if ($retval['r'] = $sth->rowCount()) {
                    $retval['data'] = true;
                } else {
                    $retval['error'] = true;
                    $retval['r'] = 'Registro Existente';
                }
            }
            else {
                $retval['error'] = true;
                $retval['r'] = 'Error al Realizar Compras';
            }
            
        } catch (PDOException $e) {
            $retval['error'] = true;
            $retval['r'] = $e;
        }
        return json_encode($retval);
    }
    public function last_id()
    {   $id="";
        $cnx = $this->connectSqlSrv();
        $sth = "SELECT MAX(id_ticket) AS id_ticket FROM tb_ticket WHERE id_cliente = ".$_SESSION['id_cliente'];
        $sth = $cnx->prepare($sth);
        $sth->execute();
        while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
            $id= $row['id_ticket'];
        }
        return $id;
    }
    public function get_price($id_producto)
    {   $price=0.0;
        $cnx = $this->connectSqlSrv();
        $sth = 'SELECT * FROM tb_producto where id_producto ='.$id_producto;
        $sth = $cnx->prepare($sth);
        $sth->execute();
        while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
            $price= $row['precio'];
        }
        return $price;
    }
    public function set_ticket($total)
    {   $folio = date("YmdHis");
        $cnx = $this->connectSqlSrv();
        $sth = "INSERT INTO tb_ticket( folio, id_cliente, id_empleado, total) VALUES (".$folio.",".$_SESSION['id_cliente'].",1,".$total.")";
        $sth = $cnx->prepare($sth);
        $sth->execute();
        if ($sth->rowCount()) {
            return true;
        }
        return false;
    }
}
function prueba()
{
    $obj = new Manager();
    $dt = array("id_producto" => '1',"cantidad" => '5');
    $mostrar = $obj->set($dt);
    print_r($mostrar);
}
//prueba();