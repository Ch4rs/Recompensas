<div class='modal' id='modal_create' tabindex='-1' role='dialog'>
                        <div class='modal-dialog' role='document'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h3 class='modal-title'>Crear Registro Nuevo</h3>
                                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                        <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div class='modal-body'> 
                                    
            <form id='tb_detalle_pedidos_create' name='tb_detalle_pedidos_create'>
                <div class='form-group'>
                    <label for='id_pedido_create'>id_pedido</label>
                    <input type='number' id= 'id_pedido_create' name= 'id_pedido_create' class='form-control'>
                </div><div class='form-group'>
                    <label for='id_producto_create'>id_producto</label>
                    <input type='number' id= 'id_producto_create' name= 'id_producto_create' class='form-control'>
                </div><div class='form-group'>
                    <label for='fecha_create'>fecha</label>
                    <input type='datetime' id= 'fecha_create' name= 'fecha_create' class='form-control'>
                </div>
                <div class='modal-footer'>
                    <button id='btn_create' class='btn btn-primary'>Registrar</button>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>
                </div>
            </form>
                                </div>
                            </div>
                        </div>
                    </div>