<div class='modal' id='modal_delete' tabindex='-1' role='dialog'>
                        <div class='modal-dialog' role='document'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h3 class='modal-title'>Eliminar Registro</h3>
                                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                        <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div class='modal-body'> 
                                    
            <form id='tb_detalle_pedidos_delete' name='tb_detalle_pedidos_delete'>
                <div class='form-group'>
                    <label for='id_detalle_delete'>id_detalle</label>
                    <input type='number' id= 'id_detalle_delete' name= 'id_detalle_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='id_pedido_delete'>id_pedido</label>
                    <input type='number' id= 'id_pedido_delete' name= 'id_pedido_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='id_producto_delete'>id_producto</label>
                    <input type='number' id= 'id_producto_delete' name= 'id_producto_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='fecha_delete'>fecha</label>
                    <input type='datetime' id= 'fecha_delete' name= 'fecha_delete' class='form-control'>
                </div>
                <div class='modal-footer'>
                    <button id='btn_delete' class='btn btn-primary'>Eliminar</button>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>
                </div>
            </form>
                                </div>
                            </div>
                        </div>
                    </div>