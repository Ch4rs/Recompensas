$(document).ready(function() {
    $("#form_login").validate({
        language: "es",
        errorClass: "invalid",
        validClass: "valid",
        rules: {
            user_name: {
                required: true,
            },
            clean_pass: {
                required: true
            }
        },
        messages: {
            user_name: {
                required: 'Ingrese Usuario'
            },
            clean_pass: {
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
        user_name: $('#user_name').val(),
        clean_pass: $('#clean_pass').val()
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