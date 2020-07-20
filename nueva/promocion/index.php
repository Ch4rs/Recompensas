<?php
                        include_once '../head.php';
                        include_once '../menu.php';
                    ?>
                    <body>
                        <div class='container'>
                        <!-- Incluye el cuerpo de la pagina-->
                        <h1 id='Catalogo'></h1>
                        <button id='btnModalCreate' class='btn btn-success'>Nuevo Registro</button>
                        <div class='row'>
                            <div class='col-md-9'>
                                <table id='tblTabla' class='table table-stripped table-hover'>

                                </table>
                            </div>
                        </div>
                        </div>
                    </body>
                    <?php
                        include 'create.php';
                        include 'update.php';
                        include 'delete.php';
                        include '../foot.php';
                    ?>
                    <script src='main.js?v=4'></script>