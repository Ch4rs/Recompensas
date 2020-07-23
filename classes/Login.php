<?php
include_once getcwd() . '/../config/ConnectionManager.php';

class Manager extends ConnectionManager
{

    public function get($dt)
    {
        $retval = array(
            "data" => false,
            "error" => false,
            "r" => "",
            "query" => "",
        );
        try {
            $cnx = $this->connectSqlSrv();
            $sth = "SELECT *
                    FROM tb_usuarios_clientes tu
                    WHERE numero = '" . $dt['numero'] . "' AND tu.activo = 1;";
            $sth = $cnx->prepare($sth);
            $sth->execute();
            if ($retval["r"] = $sth->rowCount()) {
                while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
                    if (password_verify($dt["passw"], $row["password"])) {
                        $_SESSION['numero'] = $row["numero"];
                        $_SESSION['id_usuario'] = $row["id_usuario"];
                        $_SESSION['id_cliente'] = $row["id_cliente"];

                        $retval["data"] = true;
                    } else {
                        $retval["data"] = false;
                        break;
                    }
                }
            } else {
                $retval["data"] = false;
            }
        } catch (PDOException $e) {
            $retval["error"] = true;
            $retval["r"] = $e;
        }
        return json_encode($retval);
    }
    public function create_usuario($dt)
    {
        $exito = false;
        $cnx = $this->connectSqlSrv();
        $dt['password'] = password_hash($dt['passw'], PASSWORD_DEFAULT);
        $sth = "INSERT INTO tb_usuarios_clientes(numero,password,passw,id_cliente)VALUES('" . $dt['numero'] . "','" . $dt['password'] . "','" . $dt['passw'] . "',(SELECT id_cliente FROM tb_clientes WHERE numero ='" . $dt['numero'] . "'))";
        $sth = $cnx->prepare($sth);
        $sth->execute();
        if ($sth->rowCount()) {
            $exito = true;
        }
        return $exito;
    }
    public function delete_cliente($numero)
    {
        $exito = false;
        $cnx = $this->connectSqlSrv();
        $sth = "DELETE FROM tb_clientes WHERE numero ='" . $numero . "'";
                $sth = $cnx->prepare($sth);
        $sth->execute();
        if ($sth->rowCount()) {
            $exito = true;
        }
        return $exito;
    }
    public function register($dt)
    {
        $retval = array(
            "data" => false,
            "error" => false,
            "r" => "",
            "query" => "",
        );
        try {
            $cnx = $this->connectSqlSrv();
            $sth = "INSERT INTO tb_clientes(nombre, apellido_paterno, apellido_materno,numero) VALUES ('" . $dt['nombre'] . "','" . $dt['apellido_paterno'] . "','" . $dt['apellido_materno'] . "','" . $dt['numero'] . "')";
            //$sth = "INSERT INTO tb_usuarios_clientes (nombres,apellidos,numero,password,passw)VALUES('".$dt['nombre']."','".$dt['apellidos']."','".$dt['numero']."','".$dt['password']."','".$dt['passw']."')";
            $sth = $cnx->prepare($sth);
            $sth->execute();
            if ($sth->rowCount()) {
                if ($this->create_usuario($dt)) {
                    $retval["data"] = true;
                } else {
                    //delete cliente
                    $this->delete_cliente($dt['numero']);
                    $retval["data"] = false;
                    $retval["error"] = true;
                    $retval["r"] = "Error En Servidor Al Crear Usuario";
                }
            } else {
                $retval["data"] = false;
                $retval["error"] = true;
                $retval["r"] = "Error En Servidor Interno";
            }
        } catch (PDOException $e) {
            $retval["error"] = true;
            $retval["r"] = $e;
        }
        return json_encode($retval);
    }
}
