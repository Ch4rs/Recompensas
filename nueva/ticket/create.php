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
                                    
            <form id='tb_ticket_create' name='tb_ticket_create'>
                <div class='form-group'>
                    <label for='folio_create'>folio</label>
                    <input type='number' id= 'folio_create' name= 'folio_create' class='form-control'>
                </div><div class='form-group'>
                    <label for='cantidad_create'>cantidad</label>
                    <input type='number' id= 'cantidad_create' name= 'cantidad_create' class='form-control'>
                </div><div class='form-group'>
                    <label for='fecha_create'>fecha</label>
                    <input type='datetime' id= 'fecha_create' name= 'fecha_create' class='form-control'>
                </div><div class='form-group'>
                    <label for='status_create'>status</label>
                    <input type='text' id= 'status_create' name= 'status_create' class='form-control'>
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