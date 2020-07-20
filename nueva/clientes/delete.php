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
                                    
            <form id='tb_clientes_delete' name='tb_clientes_delete'>
                <div class='form-group'>
                    
                    <input type='hidden' id= 'id_cliente_delete' name= 'id_cliente_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='nombre_delete'>nombre</label>
                    <input type='text' id= 'nombre_delete' name= 'nombre_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='apellido_paterno_delete'>apellido_paterno</label>
                    <input type='text' id= 'apellido_paterno_delete' name= 'apellido_paterno_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='apellido_materno_delete'>apellido_materno</label>
                    <input type='text' id= 'apellido_materno_delete' name= 'apellido_materno_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='fecha_registro_delete'>fecha_registro</label>
                    <input type='datetime' id= 'fecha_registro_delete' name= 'fecha_registro_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='domicilio_delete'>domicilio</label>
                    <input type='text' id= 'domicilio_delete' name= 'domicilio_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='telefono_delete'>telefono</label>
                    <input type='text' id= 'telefono_delete' name= 'telefono_delete' class='form-control'>
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