<?php
include_once  getcwd() . '/../config/ConnectionManager.php';

class Manager extends ConnectionManager
{

    public function get($dt)
    {
        $retval = array(
            "data"  => false,
            "error" => false,
            "r"     => "",
            "query"     => "",
        );
        try {
            $cnx = $this->connectSqlSrv();
            $sth = "SELECT tu.id_usuario, tu.user, tu.password,  tu.passw, tu.id_privilegio
                    FROM tb_usuarios tu
                    WHERE user = '" . $dt['user_name'] . "' AND tu.activo = 1;";
            $sth = $cnx->prepare($sth);
            $sth->execute();
            if ($retval["r"] = $sth->rowCount()) {
                while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
                    if (password_verify($dt["clean_pass"], $row["password"])) {
                        $_SESSION['user']          = $row["user"];
                        $_SESSION['id_privilegio'] = $row["id_privilegio"];

                        $retval["data"] = true;
                    } else {
                        $retval["data"] = false;
                        break;
                    }
                }
            } else {
                $retval["data"] = false;
            }
        } catch (PDOExeption $e) {
            $retval["error"] = true;
            $retval["r"]     = $e;
        }
        return json_encode($retval);
    }
}
