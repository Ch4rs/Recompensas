$(document).ready(function () {
    $('#tb_pedidos_create').validate({
        language: 'es',
        errorClass: 'invalid',
        validClass: 'valid',
        rules: {
            cantidad_create: {
                required: true,
                number:true
            }
        },
        messages: {
            cantidad_create: {
                required: 'Ingrese Cantidad',
            }
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
    });
    $('#btn_create').click(function () {
        $('#tb_pedidos_create').validate();
    });
});

function _create() {
    var datos = {
        id_producto:'1',
        cantidad: $('#cantidad_create').val(),
    };
    console.log(datos);

    $.post('main.php', {
        action: 'set',
        dt: datos
    }, function (e) {
        console.log(e);
        if (e.error || !e.data) {
            alertas(e.r, 'danger');
        } else {
            alertas('Se ha registrado Correctamente', 'success');
        }
    });

    return false;
}
function cancelar(form) {
    $('#' + form)[0].reset();
    var validator = $('#' + form).validate();
    validator.resetForm();
    return false;
}

function alertas(mensaje, tipo) {
    $.notify({
        // options
        message: mensaje
    }, {
        // settings
        type: tipo,
        delay: 1500
    });
}