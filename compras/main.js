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
    _get_progress();
});

function _get_progress() {
    $.post('main.php', { action: 'get' }, function(e) {
        console.log(e)
        if (e.error || !e.data) {
        } else {
            $("#promocion").text(e.promocion);
            $("#recompensa").text(e.recompensa);
            let cantidad = parseInt(e.cantidad);
            let meta = parseInt(e.meta)
            if (cantidad>meta) {
                cantidad= meta;
            }
            $("#avance").text(cantidad+ "/"+ meta)
        }
    });
}
function _create() {
    let can =parseInt($('#cantidad_create').val());
    if (can>0) {
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
                window.location = "../index.php";
            }
        });
    
        return false;
    } else {
        alert("La cantidad debe ser mayor a 0");
    }

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