$(document).ready(function() {
    $("#form_login").validate({
        language: "es",
        errorClass: "invalid",
        validClass: "valid",
        rules: {
            nombre: {
                required: true,
            },
            apellido_paterno: {
                required: true,
            },
            apellido_materno: {
                required: true,
            },
            numero: {
                required: true,
                number:true
            },
            passw: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: 'Ingrese Nombre'
            },
            apellido_paterno: {
                required: 'Ingrese Apellido Paterno'
            },
            apellido_materno: {
                required: 'Ingrese Apellido Materno'
            },
            numero: {
                required: 'Ingrese Numero'
            },
            passw: {
                required: 'Ingrese Password'
            }
        },
        honkeyup: true,
        submitHandler: function() {
            $("div.error").hide();
            _register();
        },

        highlight: function(element, required) {
            $(element).fadeOut(function() {
                $(element).fadeIn();
                $(element).css('border', '2px solid #FDADAF');
            });

        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).css('border', '1px solid #CCC');
        }
    });
});

$("#btnEnviar").click(function() {
    $("#form_login").validate();
});

function _register() {
    var datos = {
        nombre: $('#nombre').val(),
        apellido_paterno: $('#apellido_paterno').val(),
        apellido_materno: $('#apellido_materno').val(),
        numero: $('#numero').val(),
        passw: $('#passw').val()
    }
    console.log(datos)
    $.post('main.php', { action: 'register', dt: datos }, function(e) {
        console.log(e)
        if (e.error || !e.data) {
            $("#error").empty();
            $("#error").append(e.r);
            $("#error").addClass("error");
        } else {
            window.location = "../login";
        }
    });
}