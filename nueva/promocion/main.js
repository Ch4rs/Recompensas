$(document).ready(function () {
                        $('#tb_promocion_detalle_update').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                id_detalle_update: {
                             required:true
                    },id_cliente_update: {
                             required:true
                    },id_promocion_update: {
                             required:true
                    },meta_update: {
                             required:true
                    },cantidad_update: {
                             required:true
                    },status_update: {
                             required:true
                    },
                            },
                            messages:
                            {
                                id_detalle_update: {
                        required:'Ingrese Id_detalle_update',
                    },id_cliente_update: {
                        required:'Ingrese Id_cliente_update',
                    },id_promocion_update: {
                        required:'Ingrese Id_promocion_update',
                    },meta_update: {
                        required:'Ingrese Meta_update',
                    },cantidad_update: {
                        required:'Ingrese Cantidad_update',
                    },status_update: {
                        required:'Ingrese Status_update',
                    },
                            },
                            honkeyup: false,
                            submitHandler: function () {
                                $('div.error').hide();
                                _update();
                            },
                            honkeyup: false,
                            highlight: function (element, required) {
                                $(element).fadeOut(function () {
                                    $(element).fadeIn();
                                    $(element).css('border', '2px solid #FDADAF');
                                });
                            },
                            unhighlight: function (element, errorClass, validClass) {
                                $(element).css('border', '1px solid #CCC');
                            }
                        }
                    );$('#tb_promocion_detalle_create').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                id_cliente_create: {
                             required:true
                    },id_promocion_create: {
                             required:true
                    },meta_create: {
                             required:true
                    },cantidad_create: {
                             required:true
                    },status_create: {
                             required:true
                    },
                            },
                            messages:
                            {
                                id_cliente_create: {
                        required:'Ingrese Id_cliente_create',
                    },id_promocion_create: {
                        required:'Ingrese Id_promocion_create',
                    },meta_create: {
                        required:'Ingrese Meta_create',
                    },cantidad_create: {
                        required:'Ingrese Cantidad_create',
                    },status_create: {
                        required:'Ingrese Status_create',
                    },
                            },
                            honkeyup: false,
                            submitHandler: function () {
                                $('div.error').hide();
                                _create();
                            },
                            honkeyup: false,
                            highlight: function (element, required) {
                                $(element).fadeOut(function () {
                                    $(element).fadeIn();
                                    $(element).css('border', '2px solid #FDADAF');
                                });
                            },
                            unhighlight: function (element, errorClass, validClass) {
                                $(element).css('border', '1px solid #CCC');
                            }
                        }
                    );$('#tb_promocion_detalle_delete').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                id_detalle_delete: {
                             required:true
                    },id_cliente_delete: {
                             required:true
                    },id_promocion_delete: {
                             required:true
                    },meta_delete: {
                             required:true
                    },cantidad_delete: {
                             required:true
                    },status_delete: {
                             required:true
                    },
                            },
                            messages:
                            {
                                id_detalle_delete: {
                        required:'Ingrese Id_detalle_delete',
                    },id_cliente_delete: {
                        required:'Ingrese Id_cliente_delete',
                    },id_promocion_delete: {
                        required:'Ingrese Id_promocion_delete',
                    },meta_delete: {
                        required:'Ingrese Meta_delete',
                    },cantidad_delete: {
                        required:'Ingrese Cantidad_delete',
                    },status_delete: {
                        required:'Ingrese Status_delete',
                    },
                            },
                            honkeyup: false,
                            submitHandler: function () {
                                $('div.error').hide();
                                _delete(idDel);
                            },
                            honkeyup: false,
                            highlight: function (element, required) {
                                $(element).fadeOut(function () {
                                    $(element).fadeIn();
                                    $(element).css('border', '2px solid #FDADAF');
                                });
                            },
                            unhighlight: function (element, errorClass, validClass) {
                                $(element).css('border', '1px solid #CCC');
                            }
                        }
                    );
                        $('#btnModalCreate').click(function() {
                            $('#modal_create').modal();
                        });
                        $('#btn_update').click(function () {
                $('#tb_promocion_detalle_update').validate();
            });$('#btn_create').click(function () {
                $('#tb_promocion_detalle_create').validate();
            });$('#btn_delete').click(function () {
                $('#tb_promocion_detalle_delete').validate();
            });
                        
                        alertas('Bienvenido', 'info');
                        get();
                        getSelect();
                        getCatalogo();
                    });function getCatalogo() {
                                var URLactual = window.location.href;
                                var catalog = URLactual.split('/')
                                document.getElementById('Catalogo').innerHTML='Catálogo de '+ catalog[catalog.length -2];
                            }function getSelect() {
            
        }function get() {
                        $.post('main.php', { action: 'get' }, function (e) {
                            if (e.error || !e.data) {
                                alert(e.r);
                            }
                            else {
                                setDataTable(e.r.c, e.r.d);
                            }
                        });
                    }function FullSelect(nameselect, tabla) {
                                var column = []
                                $.post('main.php', { action: 'getselect', dt: tabla }, function (e) {
                                    if (e.error || !e.data) {
                                        alert(e.r);
                                    }
                                    else {
                                        console.log(e)
                                        column.push(e.r.c[0]['data'])
                                        column.push(e.r.c[0]['title'])
                                        setSelect(e.r.d, nameselect, column);
                                    }
                                });
                            }
                            function setSelect(array, nameselect, column) {
            array.forEach(element => {
                var o = new Option(element[column[1]], element[column[0]]);
                $(nameselect).append(o);
            });
        }function setDataTable(c, d) {
                    var options = {
                        dom: 'Bfrtip',
                        buttons: [{
                            extend: 'collection',
                            text: 'Control',
                            orientation: 'landscape',
                            buttons: [{
                                text: 'Copiar',
                                extend: 'copy',
                                exportOptions: {
                                    columns: [0,1,2,3,4,5]
                                }
                            }, {
                                extend: 'pdf',
                                orientation: 'landscape',
                                pageSize: 'LEGAL',
                                exportOptions: {
                                    columns: [0,1,2,3,4,5]
                                }
                            },
                            {
                                text: 'Excel',
                                extend: 'excel',
                                exportOptions: {
                                    columns: [0,1,2,3,4,5]
                                }
                            },
                            {
                                text: 'Imprimir',
                                extend: 'print',
                                exportOptions: {
                                    columns: [0,1,2,3,4,5]
                                }
                            }
                            ]
                        },
                        {
                            extend: 'colvis',
                            text: 'Visor de columnas',
                            collectionLayout: 'fixed three-column'
                        }
                        ],
                        autoWidth: true,
                        columns: c,
                        data: d,
                        destroy: true,
                        language: {
                            sProcessing: 'Procesando...',
                            sLengthMenu: 'Mostrar _MENU_ registros',
                            sZeroRecords: 'No se encontraron resultados',
                            sEmptyTable: 'Ningún dato disponible en esta tabla',
                            sInfo: 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
                            sInfoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
                            sInfoFiltered: '(filtrado de un total de _MAX_ registros)',
                            sInfoPostFix: '',
                            sSearch: 'Buscar:',
                            sUrl: '',
                            sInfoThousands: ',',
                            sLoadingRecords: 'Cargando...',
                            oPaginate: {
                                sFirst: 'Primero',
                                sLast: 'Último',
                                sNext: 'Siguiente',
                                sPrevious: 'Anterior'
                            },
                            oAria: {
                                sSortAscending: ': Activar para ordenar la columna de manera ascendente',
                                sSortDescending: ': Activar para ordenar la columna de manera descendente'
                            }
                        },
                        select: true,
                        responsive:true,
                    };
                    $('#tblTabla').DataTable(options);
                }function editx(id) {
                    var datos = {
                        id_detalle: id
                    };
                    $.post('main.php', { action: 'consult', dt: datos }, function(e) {
                        if (e.error) {
                            alertas(e.r, 'danger');
                        } else {
                            setDatosModal(e.r.d);
                        }
                    });
                    return false;
                }function setDatosModal(d) {
                    $('#id_detalle_update').val(d[0]['id_detalle']);$('#id_cliente_update').val(d[0]['id_cliente']);$('#id_promocion_update').val(d[0]['id_promocion']);$('#meta_update').val(d[0]['meta']);$('#cantidad_update').val(d[0]['cantidad']);$('#status_update').val(d[0]['status']);
                    $('#modal_update').modal();
                }

                function seleccionarSelect(nameselect, valor) {
                    $(nameselect).find('option').each(function(index, element) {
                        if (element.value == valor) {
                            $(nameselect).val(element.value);
                        }
                    });
                }function _update() {
                    var datos = {
                        id_detalle: $('#id_detalle_update').val(),id_cliente: $('#id_cliente_update').val(),id_promocion: $('#id_promocion_update').val(),meta: $('#meta_update').val(),cantidad: $('#cantidad_update').val(),status: $('#status_update').val()
                    };
                    $.post('main.php', { action: 'update', dt: datos }, function(e) {
                        if (e.error || !e.data) {
                            alertas(e.r, 'danger');
                        } else {
                            alertas('Se ha editado Correctamente', 'success');
                            get();
                            $('#modal_update').modal('hide');
                        }
                    });
                    
                    return false;
                }function _create() {
                    var datos = {
                        id_cliente: $('#id_cliente_create').val(),id_promocion: $('#id_promocion_create').val(),meta: $('#meta_create').val(),cantidad: $('#cantidad_create').val(),status: $('#status_create').val()
                    };
                    $.post('main.php', { action: 'set', dt: datos }, function(e) {
                        if (e.error || !e.data) {
                            alertas(e.r, 'danger');
                        } else {
                            alertas('Se ha registrado Correctamente', 'success');
                            get();
                            $('#modal_create').modal('hide');
                        }
                    });
                    
                    return false;
                }function deletex(id) {
                    var datos = {
                        id_detalle: id
                    };
                    $.post('main.php', { action: 'consult', dt: datos }, function(e) {
                        if (e.error) {
                            alertas(e.r, 'danger');
                        } else {
                            setMensajeModal(e.r.d);
                        }
                    });
                    return false;
                }
                var idDel = 0;function setMensajeModal(d) {
                    $('#id_detalle_delete').val(d[0]['id_detalle']);$('#id_cliente_delete').val(d[0]['id_cliente']);$('#id_promocion_delete').val(d[0]['id_promocion']);$('#meta_delete').val(d[0]['meta']);$('#cantidad_delete').val(d[0]['cantidad']);$('#status_delete').val(d[0]['status']);
                    $('#modal_delete').modal();
                    idDel = d[0]['id_detalle'];

                }function _delete(id) {
                    var datos = {
                        id_detalle: id
                    };
                    $.post('main.php', { action: 'del', dt: datos }, function(e) {
                        if (e.error) {
                            alertas(e.r, 'danger');
                        } else {
                            alertas('Registro Eliminado Correctamente', 'success');
                            $('#modal_delete').modal('hide');
                            get();
                        }
                    });
                    return false;
                }function cancelar(form) {
                    $('#' + form)[0].reset();
                    var validator = $('#' + form).validate();
                    validator.resetForm();
                    return false;
                }function alertas(mensaje, tipo) {
                    $.notify({
                        // options
                        message: mensaje
                    }, {
                        // settings
                        type: tipo,
                        delay: 1500
                    });
                }