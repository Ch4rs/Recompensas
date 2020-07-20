$(document).ready(function () {
                        $('#tb_clientes_update').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                id_cliente_update: {
                             required:true
                    },nombre_update: {
                             required:true
                    },apellido_paterno_update: {
                             required:true
                    },apellido_materno_update: {
                             required:true
                    },fecha_registro_update: {
                             required:true
                    },domicilio_update: {
                             required:true
                    },telefono_update: {
                             required:true
                    },
                            },
                            messages:
                            {
                                id_cliente_update: {
                        required:'Ingrese Id_cliente_update',
                    },nombre_update: {
                        required:'Ingrese Nombre_update',
                    },apellido_paterno_update: {
                        required:'Ingrese Apellido_paterno_update',
                    },apellido_materno_update: {
                        required:'Ingrese Apellido_materno_update',
                    },fecha_registro_update: {
                        required:'Seleccione Fecha_registro_update',
                    },domicilio_update: {
                        required:'Ingrese Domicilio_update',
                    },telefono_update: {
                        required:'Ingrese Telefono_update',
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
                    );$('#tb_clientes_create').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                nombre_create: {
                             required:true
                    },apellido_paterno_create: {
                             required:true
                    },apellido_materno_create: {
                             required:true
                    },fecha_registro_create: {
                             required:true
                    },domicilio_create: {
                             required:true
                    },telefono_create: {
                             required:true
                    },
                            },
                            messages:
                            {
                                nombre_create: {
                        required:'Ingrese Nombre_create',
                    },apellido_paterno_create: {
                        required:'Ingrese Apellido_paterno_create',
                    },apellido_materno_create: {
                        required:'Ingrese Apellido_materno_create',
                    },fecha_registro_create: {
                        required:'Seleccione Fecha_registro_create',
                    },domicilio_create: {
                        required:'Ingrese Domicilio_create',
                    },telefono_create: {
                        required:'Ingrese Telefono_create',
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
                    );$('#tb_clientes_delete').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                id_cliente_delete: {
                             required:true
                    },nombre_delete: {
                             required:true
                    },apellido_paterno_delete: {
                             required:true
                    },apellido_materno_delete: {
                             required:true
                    },fecha_registro_delete: {
                             required:true
                    },domicilio_delete: {
                             required:true
                    },telefono_delete: {
                             required:true
                    },
                            },
                            messages:
                            {
                                id_cliente_delete: {
                        required:'Ingrese Id_cliente_delete',
                    },nombre_delete: {
                        required:'Ingrese Nombre_delete',
                    },apellido_paterno_delete: {
                        required:'Ingrese Apellido_paterno_delete',
                    },apellido_materno_delete: {
                        required:'Ingrese Apellido_materno_delete',
                    },fecha_registro_delete: {
                        required:'Seleccione Fecha_registro_delete',
                    },domicilio_delete: {
                        required:'Ingrese Domicilio_delete',
                    },telefono_delete: {
                        required:'Ingrese Telefono_delete',
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
                $('#tb_clientes_update').validate();
            });$('#btn_create').click(function () {
                $('#tb_clientes_create').validate();
            });$('#btn_delete').click(function () {
                $('#tb_clientes_delete').validate();
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
                                    columns: [0,1,2,3,4,5,6]
                                }
                            }, {
                                extend: 'pdf',
                                orientation: 'landscape',
                                pageSize: 'LEGAL',
                                exportOptions: {
                                    columns: [0,1,2,3,4,5,6]
                                }
                            },
                            {
                                text: 'Excel',
                                extend: 'excel',
                                exportOptions: {
                                    columns: [0,1,2,3,4,5,6]
                                }
                            },
                            {
                                text: 'Imprimir',
                                extend: 'print',
                                exportOptions: {
                                    columns: [0,1,2,3,4,5,6]
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
                        id_cliente: id
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
                    $('#id_cliente_update').val(d[0]['id_cliente']);$('#nombre_update').val(d[0]['nombre']);$('#apellido_paterno_update').val(d[0]['apellido_paterno']);$('#apellido_materno_update').val(d[0]['apellido_materno']);$('#fecha_registro_update').val(d[0]['fecha_registro']);$('#domicilio_update').val(d[0]['domicilio']);$('#telefono_update').val(d[0]['telefono']);
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
                        id_cliente: $('#id_cliente_update').val(),nombre: $('#nombre_update').val(),apellido_paterno: $('#apellido_paterno_update').val(),apellido_materno: $('#apellido_materno_update').val(),fecha_registro: $('#fecha_registro_update').val(),domicilio: $('#domicilio_update').val(),telefono: $('#telefono_update').val()
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
                        nombre: $('#nombre_create').val(),apellido_paterno: $('#apellido_paterno_create').val(),apellido_materno: $('#apellido_materno_create').val(),fecha_registro: $('#fecha_registro_create').val(),domicilio: $('#domicilio_create').val(),telefono: $('#telefono_create').val()
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
                        id_cliente: id
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
                    $('#id_cliente_delete').val(d[0]['id_cliente']);$('#nombre_delete').val(d[0]['nombre']);$('#apellido_paterno_delete').val(d[0]['apellido_paterno']);$('#apellido_materno_delete').val(d[0]['apellido_materno']);$('#fecha_registro_delete').val(d[0]['fecha_registro']);$('#domicilio_delete').val(d[0]['domicilio']);$('#telefono_delete').val(d[0]['telefono']);
                    $('#modal_delete').modal();
                    idDel = d[0]['id_cliente'];

                }function _delete(id) {
                    var datos = {
                        id_cliente: id
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