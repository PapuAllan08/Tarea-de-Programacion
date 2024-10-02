const PopUpCompra = document.getElementById('PopUpCompra')
            PopUpCompra.style.display = 'none'
            const QuitarPopUpCompra = document.getElementById('QuitarPopUpCompra')

const numeroDeProductos = document.getElementById('ProductosEnCarrito')
numeroDeProductos.innerText = ActualizarCarrito()
galeriaDeProductos.forEach(galeriaDeProducto => {
    let ProductoElegido = localStorage.getItem('productoElegido')
    if(galeriaDeProducto.Nombre == ProductoElegido){
        document.getElementById('NombreProducto').innerText = galeriaDeProducto.Nombre
        document.getElementById('Precio').innerText = `$ ${galeriaDeProducto.Precio} USD`
        document.getElementById('ImagendeProducto').src = galeriaDeProducto.Imagen
        document.getElementById('Pantalla').innerText = galeriaDeProducto.Pantalla
        document.getElementById('Procesador').innerText = galeriaDeProducto.Procesador
        document.getElementById('Memoria').innerText = galeriaDeProducto.RAM
        document.getElementById('CamaraTrasera').innerText = galeriaDeProducto.Camaratrasera
        document.getElementById('CamaraFrontal').innerText = galeriaDeProducto.Camarafrontal
        document.getElementById('Bateria').innerText = galeriaDeProducto.Bateria
        
        let nombreProducto = galeriaDeProducto
        let botonEnviarCarrito = document.getElementById('AñadiralCarrito')
        botonEnviarCarrito.addEventListener('click', () => {
            AñadirAlCarrito(nombreProducto)
            numeroDeProductos.innerText = ActualizarCarrito()
            PopUpCompra.style.display = 'block'
            PopUpCompra.style.animationName = 'AparicionPopUP'
        }
        
    )
    }
})

QuitarPopUpCompra.addEventListener('click', function(){
    PopUpCompra.style.display = 'none'
})

    
    
