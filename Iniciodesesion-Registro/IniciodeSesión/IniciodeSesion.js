const enviarDatos = document.getElementById('Enviardatos')
let contraseñaCorrecta = 'Hola'
let correoCorrecto = 'seguramoises37@gmail.com'
let anuncioEspacioVacio = `Este campo es obligatorio*`
let anuncioCorreoDeUsuario = document.getElementById('Anunciocorreodeusuario')
let correoDeUsuario = document.getElementById('Correodeusuario')
let anuncioContraseña = document.getElementById('Anunciocontraseña')
let contraseñaIngresada = document.getElementById('Contraseña')

enviarDatos.addEventListener('click', 
    function(){
        if (contraseñaIngresada.value != contraseñaCorrecta && contraseñaIngresada.value != ''){
            anuncioContraseña.innerText = 'Contraseña Incorrecta. Vuelve a intentarlo*'
            contraseñaIngresada.style.borderColor = "aqua"
        }
        else if(contraseñaIngresada.value == ''){
            anuncioContraseña.innerText = anuncioEspacioVacio
            contraseñaIngresada.style.borderColor = "aqua"
        }

        if(correoDeUsuario.value != '' && correoDeUsuario.value != correoCorrecto){
            anuncioCorreoDeUsuario.innerText = 'Correo Inválido*'
            correoDeUsuario.style.borderColor = "aqua"
        }
        else if(correoDeUsuario.value == ''){
            anuncioCorreoDeUsuario.innerText = anuncioEspacioVacio
            correoDeUsuario.style.borderColor = "aqua"
        }

        }
)
correoDeUsuario.addEventListener('focus',
    function(){
        correoDeUsuario.style.borderColor = "white"
        anuncioCorreoDeUsuario.innerText = ''
    }
)
contraseñaIngresada.addEventListener('focus',
    function(){
        contraseñaIngresada.style.borderColor = "white"
        anuncioContraseña.innerText = ''
    }
)
