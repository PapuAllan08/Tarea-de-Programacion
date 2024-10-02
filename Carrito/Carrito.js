let contenedorProductos = document.getElementById('Carrito')
const productosEnElCarrito = JSON.parse(localStorage.getItem('Productos'))

let pSubtotal = document.getElementById('Subtotal')
let pCostoDeEnvio = document.getElementById('CostodeEnvio')
let pTotal = document.getElementById('Total')

productosEnElCarrito.forEach(productoEnElCarrito => {
    if(productoEnElCarrito.Cantidad >= 1){
        let contenedorProducto = document.createElement('div')
        let nombreProducto = document.createElement('h1')
        let precioProducto = document.createElement('p')
        let cantidadProducto = document.createElement('input')
        let imagenProducto = document.createElement('img')
        let quitarProducto = document.createElement('img')

        imagenProducto.src = productoEnElCarrito.Imagen
        nombreProducto.innerText = productoEnElCarrito.Nombre

        cantidadProducto.type = "number"
        cantidadProducto.value = productoEnElCarrito.Cantidad
        cantidadProducto.min = 1
        
        
        precioProducto.innerText = `$ ${productoEnElCarrito.Precio * productoEnElCarrito.Cantidad} USD`

        cantidadProducto.addEventListener('input', () => {
            if(cantidadProducto.value != productoEnElCarrito.Cantidad){
                productoEnElCarrito.Cantidad = parseInt(cantidadProducto.value)
                localStorage.setItem('Productos', JSON.stringify(productosEnElCarrito))
            }
            precioProducto.innerText = `$ ${productoEnElCarrito.Precio * parseInt(productoEnElCarrito.Cantidad)} USD`
            pSubtotal.innerText = `$ ${CalcularSubtotal()} USD`
            pCostoDeEnvio.innerText = `$ ${CalcularCostoDeEnvio()} USD`
            pTotal.innerText = `$ ${CalcularTotal()} USD`
        })
        
        quitarProducto.className = "QuitarProducto"
        quitarProducto.src = "../ImagenesPrincipales/QuitarProductoEquis.png"

        contenedorProducto.appendChild(imagenProducto)
        contenedorProducto.appendChild(nombreProducto)
        contenedorProducto.appendChild(cantidadProducto)
        contenedorProducto.appendChild(precioProducto)
        contenedorProducto.appendChild(quitarProducto)
        contenedorProductos.appendChild(contenedorProducto)
    }
})

function CalcularSubtotal(){
    let subtotal = 0
    const preciosProductosEnCarrito = contenedorProductos.querySelectorAll('p')
    preciosProductosEnCarrito.forEach(precioProductoEnCarrito => {
        const precioSinSimbolo = precioProductoEnCarrito.innerText.substring(1, precioProductoEnCarrito.length).trim()
        let precioEnNumero = parseInt(precioSinSimbolo.substring(0, precioSinSimbolo.indexOf('U')))
        for(let i = 0; preciosProductosEnCarrito.length > i; i++){
            subtotal += precioEnNumero
            break
        }
    })
    return subtotal
}

function CalcularCostoDeEnvio(){
    let costoDeEnvio = Math.floor(CalcularSubtotal()/50)
    return costoDeEnvio
}

function CalcularTotal(){
   let total =  CalcularSubtotal() + CalcularCostoDeEnvio()
   return total
}

pSubtotal.innerText = `$ ${CalcularSubtotal()} USD`
pCostoDeEnvio.innerText = `$ ${CalcularCostoDeEnvio()} USD`
pTotal.innerHTML = `$ ${CalcularTotal()} USD`


productosEnElCarrito.forEach(productoEnElCarrito => {
let divs = contenedorProductos.querySelectorAll('div')
divs.forEach(div => {
    let quitarProducto = div.querySelector('.QuitarProducto')
    quitarProducto.addEventListener('click', () =>{
        let nombresProductos = div.querySelector('h1')
        if(nombresProductos.innerText == productoEnElCarrito.Nombre){
            let productoAEliminar = productosEnElCarrito.indexOf(productoEnElCarrito)
            productosEnElCarrito.splice(productoAEliminar, 1)
            div.remove()
        }
        localStorage.setItem('Productos', JSON.stringify(productosEnElCarrito))
        pSubtotal.innerText = `$ ${CalcularSubtotal()} USD`
        pCostoDeEnvio.innerText = `$ ${CalcularCostoDeEnvio()} USD`
        pTotal.innerText = `$ ${CalcularTotal()} USD`
    })

})
})


//Proceso de Pago

const visa = document.getElementById('Visa')
const masterCard =  document.getElementById('MasterCard')

let metodoDePago = ''

visa.addEventListener('click', function(){
    visa.style.border = '1px solid white'
    masterCard.style.border = 'none'
    metodoDePago = 'Visa'
    document.getElementById('ElegirMetodoDePago').innerText = ''
})

masterCard.addEventListener('click', function(){
    masterCard.style.border = '1px solid white'
    visa.style.border = 'none'
    metodoDePago = 'MasterCard'
    document.getElementById('ElegirMetodoDePago').innerText = ''
})

const labels = document.querySelectorAll('label')
document.getElementById('Revisar').addEventListener('click', function(event){
    event.preventDefault()
labels.forEach(label => {
    const input = label.querySelector('input')
    input.addEventListener('focus', function(){
        labels.forEach(label =>{
            label.querySelector('p').innerText = ''
        })
    })
    if(metodoDePago === ''){
        document.getElementById('ElegirMetodoDePago').innerText = 'Elija un método de pago'
    }

        if(input.value == ''){
            label.querySelector('p').innerText = 'Obligatorio*'
        }
    })
})

const informacionDePago = document.querySelector('.InformacionDePago')

let informacionValidada = false

document.getElementById('Revisar').addEventListener('click', function(){
    let camposVacios = 0
    for(let input of informacionDePago.querySelectorAll('input')){
        if(input.value === ''){camposVacios++}
    }
    
    if(camposVacios === 0 && metodoDePago !== ''){
        //Validar información y permitir el pago
        informacionValidada = true
    }else{
        informacionValidada = false
    }
    QuitarItems()
})

document.getElementById('Revisar').addEventListener('click', function(){
    if(informacionValidada == true){
        PopUpInformacionValidada()
    }else{
        PopUpInformacionDenegada()
    }
})


function PopUpInformacionValidada(){
    document.getElementById('PopUpDetalleDeCompra').style.display = "block"
    
    document.getElementById('MensajeDeCompra').innerText = 'Detalle de Compra'
    let detalleDeCompra = contenedorProductos.cloneNode(true)
    detalleDeCompra.id = 'DetalleDeCompra'
    document.getElementById('DescripcionDeLaCompra').appendChild(detalleDeCompra)
    
    let TotalaPagarH2 = document.createElement('h2')
    TotalaPagarH2.innerText = 'Total a Pagar'
    
    let TotalaPagar = document.createElement('p')
    TotalaPagar.innerText = `$ ${CalcularTotal()} USD`
    
    let CancelarCompra = document.createElement('button')
    CancelarCompra.id = 'CancelarCompra'
    CancelarCompra.innerText = 'Cancelar'
    
    let ConfirmarCompra = document.createElement('button')
    ConfirmarCompra.id = 'ConfirmarCompra'
    ConfirmarCompra.innerText = 'Confirmar'
    
    document.getElementById('SpanTotalaPagar').appendChild(TotalaPagarH2)
    document.getElementById('SpanTotalaPagar').appendChild(TotalaPagar)
    
    document.getElementById('Botones').appendChild(CancelarCompra)
    document.getElementById('Botones').appendChild(ConfirmarCompra)
    
    detalleDeCompra.querySelectorAll('.QuitarProducto').forEach(Equis => {Equis.remove()})
    detalleDeCompra.querySelectorAll('input').forEach(input => {input.readOnly = true})
    
    document.getElementById('CancelarCompra').addEventListener('click', () => {QuitarItems()})
    document.getElementById('ConfirmarCompra').addEventListener('click', () => {
        QuitarItems()
        CompraExitosa()
    })
}

function PopUpInformacionDenegada(){
    document.getElementById('PopUpDetalleDeCompra').style.display = "block"
    document.getElementById('MensajeDeCompra').innerText = 'Información Inválida'
    document.getElementById('DescripcionDeLaCompra').innerHTML = `<img src="Confirmación/Rechazada.png" alt="No se pudo realizar su compra">`
    let errorDeAcuerdo = document.createElement('button')
    errorDeAcuerdo.id = 'DeAcuerdo'
    errorDeAcuerdo.innerText = 'De Acuerdo'
    document.getElementById('Botones').appendChild(errorDeAcuerdo)
    document.getElementById('DeAcuerdo').addEventListener('click', () => {QuitarItems()})
}


function QuitarItems(){
    document.getElementById('PopUpDetalleDeCompra').style.display = "none"
    document.getElementById('DescripcionDeLaCompra').innerHTML = ''
    document.getElementById('Botones').innerHTML = ''
    document.getElementById('SpanTotalaPagar').innerHTML = ''
    informacionDePago.querySelectorAll('input').forEach(input => {input.value = ''})
}


function CompraExitosa(){
    document.getElementById('PopUpDetalleDeCompra').style.display = "block"
    document.getElementById('MensajeDeCompra').innerText = 'Su compra ha sido exitosa'
    document.getElementById('DescripcionDeLaCompra').innerHTML = `<img src="Confirmación/Aceptada.png" alt="Su Compra Fue Exitosa">`
    let DeAcuerdo = document.createElement('button')
    DeAcuerdo.id = 'DeAcuerdo'
    DeAcuerdo.innerText = 'Volver al carrito'
    document.getElementById('Botones').appendChild(DeAcuerdo)

    document.getElementById('DeAcuerdo').addEventListener('click', () => {QuitarItems()})

}
    // Los productos comprados por el cliente se encuentran en la variable productosEnElCarrito













