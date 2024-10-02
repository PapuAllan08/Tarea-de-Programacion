function AñadirAlCarrito(nombreProducto){
    const productosGuardados = JSON.parse(localStorage.getItem('Productos'))
    if(!productosGuardados){
        const nuevoProducto = AgregarProductoAlCarrito(nombreProducto)
        localStorage.setItem('Productos', JSON.stringify([nuevoProducto]))
    }else{
        const productosElegidos = productosGuardados.findIndex(galeriaDeProducto => galeriaDeProducto.Nombre === nombreProducto.Nombre)
        const nuevoProductoGuardado = productosGuardados
        if(productosElegidos === -1){
            nuevoProductoGuardado.push(AgregarProductoAlCarrito(nombreProducto))
        }else{
            nuevoProductoGuardado[productosElegidos].Cantidad++
        }
        localStorage.setItem('Productos', JSON.stringify(nuevoProductoGuardado))
    }
    ActualizarCarrito()
    const Contador = document.getElementById('Cuenta')
}

function AgregarProductoAlCarrito(nombreProducto){
    const nuevoProducto = nombreProducto
    nuevoProducto.Cantidad = 1
    return nuevoProducto
}


function ActualizarCarrito(){
    const productosGuardados = JSON.parse(localStorage.getItem('Productos'))
    const recuentodeProductos = productosGuardados.reduce((acum, cuenta) => acum + cuenta.Cantidad, 0)
    return recuentodeProductos
}


