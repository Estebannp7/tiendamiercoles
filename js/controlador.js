import { llenarTienda } from './llenadoTienda.js'
import{ampliarInformacionProducto} from './ampliarinfo.js'

//creo un producto vacio
let producto= {}



//llamando a tienda llenado
llenarTienda()



let contenedorTienda = document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){
    
        let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
        producto= ampliarInformacionProducto(evento)
        console.log(producto)
        modalInfo.show()

    }



})

// rutna para añadir un producto al carrito de compras
let carrito =[]
 let botonAgregarCarrito = document.getElementById("botonadd")
 botonAgregarCarrito.addEventListener("click",function(){


    carrito.push(producto)
    console.log(carrito)
 })