<?php

abstract class ConnectionManager
{
    protected function connectSqlSrv()
    {
        try {
            $hostname = "192.168.0.200:3306";
            //$hostname = "localhost";
            $dbname = "recompensas";
            $username = "mlegnaco";
            $pw = "mlegna2020";
            
            //$username = "root";
            //$pw = "";
            return $pdo = new PDO ("mysql:host=$hostname;dbname=$dbname","$username","$pw");
          } catch (PDOException $e) {
            echo "Failed to get DB handle: " . $e->getMessage() . "\n";
            exit;
          }
    }
}
?>