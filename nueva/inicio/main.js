$(document).ready(function () {
                        $('#tb_inicio_seccion_update').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                id_ip_update: {
                             required:true
                    },ip_publica_update: {
                             required:true
                    },usuario_update: {
                             required:true
                    },name_pc_update: {
                             required:true
                    },ip_update: {
                             required:true
                    },fecha_update: {
                             required:true
                    },acceso_update: {
                             required:true
                    },
                            },
                            messages:
                            {
                                id_ip_update: {
                        required:'Ingrese Id_ip_update',
                    },ip_publica_update: {
                        required:'Ingrese Ip_publica_update',
                    },usuario_update: {
                        required:'Ingrese Usuario_update',
                    },name_pc_update: {
                        required:'Ingrese Name_pc_update',
                    },ip_update: {
                        required:'Ingrese Ip_update',
                    },fecha_update: {
                        required:'Seleccione Fecha_update',
                    },acceso_update: {
                        required:'Ingrese Acceso_update',
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
                    );$('#tb_inicio_seccion_create').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                ip_publica_create: {
                             required:true
                    },usuario_create: {
                             required:true
                    },name_pc_create: {
                             required:true
                    },ip_create: {
                             required:true
                    },fecha_create: {
                             required:true
                    },acceso_create: {
                             required:true
                    },
                            },
                            messages:
                            {
                                ip_publica_create: {
                        required:'Ingrese Ip_publica_create',
                    },usuario_create: {
                        required:'Ingrese Usuario_create',
                    },name_pc_create: {
                        required:'Ingrese Name_pc_create',
                    },ip_create: {
                        required:'Ingrese Ip_create',
                    },fecha_create: {
                        required:'Seleccione Fecha_create',
                    },acceso_create: {
                        required:'Ingrese Acceso_create',
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
                    );$('#tb_inicio_seccion_delete').validate(
                        {
                            language: 'es',
                            errorClass: 'invalid',
                            validClass: 'valid',
                            rules:
                            {
                                id_ip_delete: {
                             required:true
                    },ip_publica_delete: {
                             required:true
                    },usuario_delete: {
                             required:true
                    },name_pc_delete: {
                             required:true
                    },ip_delete: {
                             required:true
                    },fecha_delete: {
                             required:true
                    },acceso_delete: {
                             required:true
                    },
                            },
                            messages:
                            {
                                id_ip_delete: {
                        required:'Ingrese Id_ip_delete',
                    },ip_publica_delete: {
                        required:'Ingrese Ip_publica_delete',
                    },usuario_delete: {
                        required:'Ingrese Usuario_delete',
                    },name_pc_delete: {
                        required:'Ingrese Name_pc_delete',
                    },ip_delete: {
                        required:'Ingrese Ip_delete',
                    },fecha_delete: {
                        required:'Seleccione Fecha_delete',
                    },acceso_delete: {
                        required:'Ingrese Acceso_delete',
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
                $('#tb_inicio_seccion_update').validate();
            });$('#btn_create').click(function () {
                $('#tb_inicio_seccion_create').validate();
            });$('#btn_delete').click(function () {
                $('#tb_inicio_seccion_delete').validate();
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
                        id_ip: id
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
                    $('#id_ip_update').val(d[0]['id_ip']);$('#ip_publica_update').val(d[0]['ip_publica']);$('#usuario_update').val(d[0]['usuario']);$('#name_pc_update').val(d[0]['name_pc']);$('#ip_update').val(d[0]['ip']);$('#fecha_update').val(d[0]['fecha']);$('#acceso_update').val(d[0]['acceso']);
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
                        id_ip: $('#id_ip_update').val(),ip_publica: $('#ip_publica_update').val(),usuario: $('#usuario_update').val(),name_pc: $('#name_pc_update').val(),ip: $('#ip_update').val(),fecha: $('#fecha_update').val(),acceso: $('#acceso_update').val()
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
                        ip_publica: $('#ip_publica_create').val(),usuario: $('#usuario_create').val(),name_pc: $('#name_pc_create').val(),ip: $('#ip_create').val(),fecha: $('#fecha_create').val(),acceso: $('#acceso_create').val()
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
                        id_ip: id
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
                    $('#id_ip_delete').val(d[0]['id_ip']);$('#ip_publica_delete').val(d[0]['ip_publica']);$('#usuario_delete').val(d[0]['usuario']);$('#name_pc_delete').val(d[0]['name_pc']);$('#ip_delete').val(d[0]['ip']);$('#fecha_delete').val(d[0]['fecha']);$('#acceso_delete').val(d[0]['acceso']);
                    $('#modal_delete').modal();
                    idDel = d[0]['id_ip'];

                }function _delete(id) {
                    var datos = {
                        id_ip: id
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