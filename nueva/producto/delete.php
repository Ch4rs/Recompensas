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
                                    
            <form id='tb_producto_delete' name='tb_producto_delete'>
                <div class='form-group'>
                    
                    <input type='hidden' id= 'id_producto_delete' name= 'id_producto_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='producto_delete'>producto</label>
                    <input type='number' id= 'producto_delete' name= 'producto_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='descripcion_delete'>descripcion</label>
                    <input type='number' id= 'descripcion_delete' name= 'descripcion_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='precio_delete'>precio</label>
                    <input type='number' id= 'precio_delete' name= 'precio_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='stock_delete'>stock</label>
                    <input type='number' id= 'stock_delete' name= 'stock_delete' class='form-control'>
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