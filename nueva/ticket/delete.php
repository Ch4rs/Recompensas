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
                                    
            <form id='tb_ticket_delete' name='tb_ticket_delete'>
                <div class='form-group'>
                    
                    <input type='hidden' id= 'id_ticket_delete' name= 'id_ticket_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='folio_delete'>folio</label>
                    <input type='number' id= 'folio_delete' name= 'folio_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='cantidad_delete'>cantidad</label>
                    <input type='number' id= 'cantidad_delete' name= 'cantidad_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='fecha_delete'>fecha</label>
                    <input type='datetime' id= 'fecha_delete' name= 'fecha_delete' class='form-control'>
                </div><div class='form-group'>
                    <label for='status_delete'>status</label>
                    <input type='text' id= 'status_delete' name= 'status_delete' class='form-control'>
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