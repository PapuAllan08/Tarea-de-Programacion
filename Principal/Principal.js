

let iconoBusqueda = document.getElementById('Iconodebusqueda')
let imagenDeProducto = document.getElementById('Imagendeproducto')
let tituloPrincipal = document.getElementById('Tituloprincipal')
let descripcionDeMuestra = document.getElementById('Descripcion')
let contenedorBarradeBusqueda = `<input type="text" id="Barradebusqueda" oninput="DesplegarOpciones()" onblur="quitarOpciones()">`
let select = document.getElementById('Opcionesdeproducto')

const numeroDeProductos = document.getElementById('ProductosEnCarrito')
numeroDeProductos.innerText = ActualizarCarrito()

iconoBusqueda.addEventListener('click', 
    function(){
        if (document.getElementById('Contenedorbarradebusqueda').innerHTML != contenedorBarradeBusqueda){
            document.getElementById('Contenedorbarradebusqueda').innerHTML = contenedorBarradeBusqueda
        }
    })
    

    function DesplegarOpciones(){
        let busqueda, filtro, opciones, i
        busqueda = document.getElementById('Barradebusqueda')
        filtro = busqueda.value.toLowerCase()
        opciones = select.getElementsByTagName('li')
        select.style.display = "block"
        if (filtro != ''){
        for(let i = 0; i < opciones.length; i++){
            opciones[i].style.display = 
            opciones[i].innerText.toLowerCase().includes(filtro) ? 
            "block" : "none"
        }}else{
            select.style.display = "none"
        }
    }
    


let muestras = document.querySelectorAll('#Imagenprincipal, #Muestra-1, #Muestra-2, #Muestra-3, #Muestra-4')
let selector = document.getElementById('Selector')
let imagenPrincipal = document.getElementById('Imagenprincipal')
let muestra1 = document.getElementById('Muestra-1')
let muestra2 = document.getElementById('Muestra-2')
let muestra3 = document.getElementById('Muestra-3')
let muestra4 = document.getElementById('Muestra-4')

imagenPrincipal.addEventListener('click', 
    function(){
        muestras.forEach(muestras => {muestras.style.border = "3px solid white"})
        imagenPrincipal.style.border = "3px solid aqua"
        imagenDeProducto.innerHTML = `<img src="../Imagenes/Pantalla Inicial/Imagendeproducto.webp" alt="ImagenPrincipal" id="Imagenprincipal"">`
        selector.style.marginLeft = "3.5vw"
        tituloPrincipal.style.wordSpacing = "0vw"
        tituloPrincipal.innerHTML = 'Descubre los Últimos Modelos de Celulares Samsung'
        descripcionDeMuestra.innerHTML = 'Explora nuestra amplia selección de los más recientes y avanzados modelos de celulares Samsung. Desde innovadoras características hasta diseños elegantes, encuentra el dispositivo perfecto que se adapte a tu estilo y necesidades.'
    })
    muestra1.addEventListener('click', 
        function(){
            muestras.forEach(muestras => {muestras.style.border = "3px solid white"})
            muestra1.style.border = "3px solid aqua"
            imagenDeProducto.innerHTML = `<img src="../Imagenes/Galeriadeproductos/SamsungGalaxyS23.png" alt="SamsungGalaxyS23" id="Muestra-1">`
            selector.style.marginLeft = "13.8vw"
            tituloPrincipal.style.wordSpacing = "27vw"
            tituloPrincipal.innerHTML = 'Samsung Galaxy S23'
            descripcionDeMuestra.innerHTML = 'Incluye una pantalla Dynamic AMOLED 2X con resolución Full HD+, una cámara triple trasera con un sensor principal de 50 MP. Está impulsado por el procesador Snapdragon 8 Gen 2, con hasta 8 GB de RAM y 256 GB de almacenamiento interno.'
        })
        muestra2.addEventListener('click', 
            function(){
                muestras.forEach(muestras => {muestras.style.border = "3px solid white"})
                muestra2.style.border = "3px solid aqua"
                imagenDeProducto.innerHTML = `<img src="../Imagenes/Galeriadeproductos/SamsungGalaxyA54.png" alt="SamsungGalaxyA54" id="Muestra-2" >`
                selector.style.marginLeft = "24.2vw"
                tituloPrincipal.style.wordSpacing = "27vw"
                tituloPrincipal.innerHTML = 'Samsung Galaxy A54'
                descripcionDeMuestra.innerHTML = 'Tiene una pantalla Super AMOLED de 6.4 pulgadas con resolución Full HD+, una cámara triple trasera con un sensor principal de 50 MP y una cámara frontal de 32 MP. Con procesador Exynos 1380, con hasta 8 GB de RAM y 256 GB de almacenamiento interno'
    })
muestra3.addEventListener('click', 
    function(){
        muestras.forEach(muestras => {muestras.style.border = "3px solid white"})
        muestra3.style.border = "3px solid aqua"
        imagenDeProducto.innerHTML = `<img src="../Imagenes/Galeriadeproductos/SamsungGalaxyZFold4.avif" alt="SamsungGalaxyZFold4" id="Muestra-3">`
        selector.style.marginLeft = "34.5vw"
        tituloPrincipal.innerHTML = 'Samsung Galaxy ZFold4   '
        tituloPrincipal.style.wordSpacing = "21vw"
        descripcionDeMuestra.innerHTML  = 'Ofrece una pantalla principal plegable Dynamic AMOLED 2X de 7.6 pulgadas. Su batería es de 4400 mAh con carga rápida de 25W, y está equipado con el procesador Snapdragon 8+ Gen 1, con hasta 12 GB de RAM'
    })
muestra4.addEventListener('click', 
    function(){
        muestras.forEach(muestras => {muestras.style.border = "3px solid white"})
        muestra4.style.border = "3px solid aqua"
        imagenDeProducto.innerHTML = `<img src="../Imagenes/Galeriadeproductos/SamsungGalaxyA53-5G.png" alt="SamsungGalaxyA53-5G" id="Muestra-4">`
        selector.style.marginLeft = "44.8vw"
        tituloPrincipal.style.wordSpacing = "26vw"
        tituloPrincipal.innerHTML = 'Samsung Galaxy A53-5G'
        descripcionDeMuestra.innerHTML = 'Cuenta con una pantalla Super AMOLED de 6.5 pulgadas con resolución Full HD+, una cámara cuádruple trasera con un sensor principal de 64 MP y una cámara frontal de 32 MP. Posee hasta 8 GB de RAM y 256 GB de almacenamiento interno'
    })
    
    let productos = ["Samsung Galaxy S21 5G", "Samsung Galaxy S23", "Samsung Galaxy A54", "Samsung Galaxy A71",'Samsung Galaxy A21S', 'Samsung Galaxy A53 5G', 'Samsung Galaxy Note20', 'Samsung Galaxy Note 10', 'Samsung Galaxy Z Fold 4', 'Samsung Galaxy Z Flip 4', 'Samsung Galaxy Z Flip 5']
    
    let barradeopciones = document.getElementById('Opcionesdeproducto')
    let opciones = barradeopciones.querySelectorAll('li')
    var provienede = ''
    
    opciones.forEach(opcion => {
        opcion.addEventListener('click', 
            function(){
                window.location.href = '../PáginaIndividual/PaginaIndividual.html'
                var NomCel = opcion.innerText
                localStorage.setItem('productoElegido', NomCel)
            }
        )
    })

    function quitarOpciones(){
        setTimeout(
            function(){
                document.getElementById('Contenedorbarradebusqueda').innerHTML = ''
                select.style.display = "none"}, 100
            )}
            
            
            let contenedorTargetasDeProductos = document.getElementById('Galeriadeproductos')
            let targetasDeProductos = contenedorTargetasDeProductos.querySelectorAll('div')
            
            targetasDeProductos.forEach(targetasDeProducto => {
                let eleccionDeProductos = targetasDeProducto.querySelectorAll('button')
                eleccionDeProductos.forEach(eleccionDeProducto => {
                    let h1s = targetasDeProducto.querySelectorAll('h1')
                    eleccionDeProducto.addEventListener('click', 
                        function(){
                            h1s.forEach(h1 => {
                                for(let i = 0; productos.length >= i; i++){
                                    if(productos[i] == h1.innerText){                                
                                    var productoElegido = productos[i]
                                    localStorage.setItem('productoElegido', productoElegido)
                                }
                            }
                        })
                        window.location.href = '../PáginaIndividual/PaginaIndividual.html'
                    })
                })
            })

            const PopUpCompra = document.getElementById('PopUpCompra')
            PopUpCompra.style.display = 'none'
            const QuitarPopUpCompra = document.getElementById('QuitarPopUpCompra')

            let DivTarjetaProducto = document.querySelector('#Targetasdeproducto')
            let targetasDeProductosClass = DivTarjetaProducto.querySelectorAll('div')
    targetasDeProductosClass.forEach(targetaDeProducto => {
        let enviarAlCarritoProductos = targetaDeProducto.querySelectorAll('img[src="../ImagenesPrincipales/Añadiralcarrito.png"]')
        enviarAlCarritoProductos.forEach(enviarAlCarritoProducto => {
            let h1NombreProducto = targetaDeProducto.querySelector('h1')
            enviarAlCarritoProducto.addEventListener('click', () => {
                galeriaDeProductos.forEach(galeriaDeProducto => {
                    console.log(h1NombreProducto)
                    if(galeriaDeProducto.Nombre == h1NombreProducto.innerText){
                        let nombreProducto = galeriaDeProducto
                        AñadirAlCarrito(nombreProducto)
                        numeroDeProductos.innerText = ActualizarCarrito()
                        PopUpCompra.style.display = 'block'
                        PopUpCompra.style.animationName = 'AparicionPopUP'
                        }
                    })
                    
                })
            })
        })

        QuitarPopUpCompra.addEventListener('click', function(){
            PopUpCompra.style.display = 'none'
        })
        
        
            
                