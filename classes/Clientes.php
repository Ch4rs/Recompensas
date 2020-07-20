<?php
require_once getcwd() . '/../config/ConnectionManager.php';
class Manager extends ConnectionManager
{
    public function get()
    {
        $retval = array(
            'data' => false,
            'error' => false,
            'r' => array('c' => array(), 'd' => array()),
        );

        try {

            $cnx = $this->connectSqlSrv();
            $sth = 'SELECT * FROM tb_clientes';
            $sth = $cnx->prepare($sth);
            $sth->execute();
            $retval['r']['c'] = array(
                array('data' => 'id_cliente', 'title' => 'id_cliente'), array('data' => 'nombre', 'title' => 'nombre'), array('data' => 'apellido_paterno', 'title' => 'apellido_paterno'), array('data' => 'apellido_materno', 'title' => 'apellido_materno'), array('data' => 'fecha_registro', 'title' => 'fecha_registro'), array('data' => 'domicilio', 'title' => 'domicilio'), array('data' => 'telefono', 'title' => 'telefono'),
                array('data' => 'Actions', 'title' => 'Acciones'),
            );
            while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
                $row['Actions'] = "<button class='btn btn-danger' onclick='deletex(" . $row['id_cliente'] . ")'><i class='far fa-trash-alt'></i></button>
            <button class='btn btn-warning' onclick='editx(" . $row['id_cliente'] . ")'><i class='far fa-edit'></i></button>";
                array_push($retval['r']['d'], $row);
            }
            $retval['data'] = true;
        } catch (PDOExeption $e) {
            $retval['error'] = true;
            $retval['r'] = $e;
        }
        return json_encode($retval);
    }

    public function consultas($dt)
    {
        $retval = array(
            'data' => false,
            'error' => false,
            'r' => array('d' => array()),
        );
        try {
            $cnx = $this->connectSqlSrv();
            $sth = $cnx->prepare('SELECT *  FROM tb_clientes WHERE id_cliente=:id_cliente');
            $sth->execute($dt);
            while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
                array_push($retval['r']['d'], $row);
            }
            $retval['data'] = true;
        } catch (PDOExeption $e) {
            $retval['error'] = true;
            $retval['r'] = $e;
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

            $cnx = $this->connectSqlSrv();
            $sth = $cnx->prepare('INSERT INTO tb_clientes(nombre,apellido_paterno,apellido_materno,fecha_registro,domicilio,telefono)VALUES (:nombre,:apellido_paterno,:apellido_materno,:fecha_registro,:domicilio,:telefono)');
            $sth->execute($dt);
            if ($retval['r'] = $sth->rowCount()) {
                $retval['data'] = true;
            } else {
                $retval['error'] = true;
                $retval['r'] = 'Registro Existente';
            }
        } catch (PDOExeption $e) {
            $retval['error'] = true;
            $retval['r'] = $e;
        }
        return json_encode($retval);
    }
    public function delete($dt)
    {
        $retval = array(
            'data' => false,
            'error' => false,
            'r' => array('d' => array()),
        );
        try {
            $cnx = $this->connectSqlSrv();
            $sth = $cnx->prepare('DELETE FROM tb_clientes WHERE id_cliente=:id_cliente');
            $sth->execute($dt);
            if ($retval['r'] = $sth->rowCount()) {
                $retval['data'] = true;
            }
        } catch (PDOExeption $e) {
            $retval['error'] = true;
            $retval['r'] = $e;
        }
        return json_encode($retval);
    }
    public function update($dt)
    {
        $retval = array(
            'data' => false,
            'error' => false,
            'r' => array('d' => array()),
        );
        try {

            $cnx = $this->connectSqlSrv();
            $sth = $cnx->prepare('UPDATE tb_clientes SET nombre=:nombre,apellido_paterno=:apellido_paterno,apellido_materno=:apellido_materno,fecha_registro=:fecha_registro,domicilio=:domicilio,telefono=:telefono  WHERE id_cliente=:id_cliente');
            $sth->execute($dt);
            if ($retval['r'] = $sth->rowCount()) {
                $retval['data'] = true;
            }
        } catch (PDOExeption $e) {
            $retval['error'] = true;
            $retval['r'] = $e;
        }
        return json_encode($retval);
    }
    public function getselect($dt)
    {
        $query = $this->setQuery($dt);
        $retval = array(
            'data' => false,
            'error' => false,
            'r' => array('c' => array(), 'd' => array()),
        );
        try {
            $cnx = $this->connectSqlSrv();
            $sth = $cnx->prepare($query['query']);
            $sth->execute();
            $retval['r']['c'] = array(
                array('data' => $query['id'], 'title' => $query['nombre']),
            );
            while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
                array_push($retval['r']['d'], $row);
            }
            $retval['data'] = true;
        } catch (PDOExeption $e) {
            $retval['error'] = true;
            $retval['r'] = $e;
        }
        return json_encode($retval);
    }
    public function setQuery($variable)
    {
        $retval = array(
            'id' => '',
            'nombre' => '',
            'query' => '',
        );
        switch ($variable) {

            default:
                break;
        }
    }
}
