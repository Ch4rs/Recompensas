$(document).ready(function() {
    $("#form_login").validate({
        language: "es",
        errorClass: "invalid",
        validClass: "valid",
        rules: {
            numero: {
                required: true,
                number:true
            },
            passw: {
                required: true
            }
        },
        messages: {
            numero: {
                required: 'Ingrese Usuario'
            },
            passw: {
                required: 'Ingrese Password'
            }
        },
        honkeyup: true,
        submitHandler: function() {
            $("div.error").hide();
            _login();
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

function _login() {
    var datos = {
        numero: $('#numero').val(),
        passw: $('#passw').val()
    }
    console.log(datos)
    $.post('main.php', { action: 'login', dt: datos }, function(e) {
        console.log(e)
        if (e.error || !e.data) {
            $("#error").empty();
            $("#error").append("Error de Contraseña o Usuario");
            $("#error").addClass("error");
        } else {
            window.location = "../index.php";
        }
    });
}