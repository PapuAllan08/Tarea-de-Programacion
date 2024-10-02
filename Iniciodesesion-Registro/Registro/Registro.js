const enviarDatos = document.getElementById('Enviardatos')
const container = document.getElementById('ContainerRegistro')
const p = document.getElementsByTagName('p').innerText
let contraseñaCorrecta = 'Hola'
let correoCorrecto = 'seguramoises37@gmail.com'
let anuncioEspacioVacio = `Este campo es obligatorio*`
let anuncioCorreoDeUsuario = document.getElementById('Anunciocorreodeusuario')
let anuncioContraseña = document.getElementById('Anunciocontraseña')


let correoDeUsuario = document.getElementById('Correodeusuario')
let contraseñaIngresada = document.getElementById('Contraseñadeusuario')
let numeroTelefonoDeUsuario = document.getElementById('Numerotelefonodeusuario')
let cedulaDeUsuario = document.getElementById('Ceduladeusuario')
let apellido2DeUsuario = document.getElementById('Apellido2deusuario')
let apellido1DeUsuario = document.getElementById('Apellido1deusuario')
let nombredeusuario = document.getElementById('Nombredeusuario')

enviarDatos.addEventListener('click',
    function () {
        const spans = document.querySelectorAll('span')
        let camposVacios = false
        spans.forEach(span => {
            const inputs = span.querySelectorAll('input')
            inputs.forEach(input => {
                if(input.value == ''){
                    input.style.borderColor = "aqua"
                    let ps = span.querySelectorAll('p')
                    ps.forEach(p => {
                    p.innerText = `Este campo es obligatorio*`
                    camposVacios = true
                    })
                }
            })
        })
    }
)

    function quitarAnuncios(){
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            const ps = document.querySelectorAll('p')
            input.style.borderColor = 'white'
            ps.forEach(p => {
                p.innerText = '' 
            })
        })
        }
    

