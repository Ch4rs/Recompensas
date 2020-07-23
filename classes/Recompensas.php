<?php
ob_start();
session_start();
include_once  getcwd() . '/../config/ConnectionManager.php';

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
}
function prueba()
{
    $obj = new Manager();
    $dt = array("id_producto" => '1',"cantidad" => '5');
    $mostrar = $obj->get();
    print_r($mostrar);
}
//prueba();