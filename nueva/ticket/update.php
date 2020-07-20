<div class='modal' id='modal_update' tabindex='-1' role='dialog'>
                        <div class='modal-dialog' role='document'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h3 class='modal-title'>Actualizar Registro</h3>
                                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                        <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div class='modal-body'> 
                                    
            <form id='tb_ticket_update' name='tb_ticket_update'>
                <div class='form-group'>
                    
                    <input type='hidden' id= 'id_ticket_update' name= 'id_ticket_update' class='form-control'>
                </div><div class='form-group'>
                    <label for='folio_update'>folio</label>
                    <input type='number' id= 'folio_update' name= 'folio_update' class='form-control'>
                </div><div class='form-group'>
                    <label for='cantidad_update'>cantidad</label>
                    <input type='number' id= 'cantidad_update' name= 'cantidad_update' class='form-control'>
                </div><div class='form-group'>
                    <label for='fecha_update'>fecha</label>
                    <input type='datetime' id= 'fecha_update' name= 'fecha_update' class='form-control'>
                </div><div class='form-group'>
                    <label for='status_update'>status</label>
                    <input type='text' id= 'status_update' name= 'status_update' class='form-control'>
                </div>
                <div class='modal-footer'>
                    <button id='btn_update' class='btn btn-primary'>Actualizar</button>
                    <button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>
                </div>
            </form>
                                </div>
                            </div>
                        </div>
                    </div>