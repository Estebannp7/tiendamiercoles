import { llenarTienda } from './llenadoTienda.js'
import{ampliarInformacionProducto} from './ampliarinfo.js'

//creo un producto vacio
let producto= {}



//llamando a tienda llenado
llenarTienda()
//referencia modal info
let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))

let modalCompra = new bootstrap.Modal(document.getElementById('resumenCompra'))



//rutina
let contenedorTienda = document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){
    
        
        producto= ampliarInformacionProducto(evento)
        console.log(producto)
        modalInfo.show()

    }



})

// rutna para añadir un producto al carrito de compras
let carrito =[]
 let botonAgregarCarrito = document.getElementById("botonadd")
 botonAgregarCarrito.addEventListener("click",function(){


//Debo capturar la cantidad y agregarla al producto

let cantidad = document.getElementById("cantidadProducto").value
producto.cantidad=cantidad



    carrito.push(producto)


 //pintar capsula carrito
 let suma= 0
 carrito.forEach(function(){
suma = suma + Number(producto.cantidad)
 })
    let capsula = document.getElementById("capsula")
    
capsula.textContent=suma
capsula.classList.remove("invisible")


    console.log(carrito)
    modalInfo.hide()
 })

 let limpiar  = document.getElementById("limpiar")
 limpiar.addEventListener("click",function(){
carrito =[]
let capsula = document.getElementById("capsula")
capsula.classList.add("invisible")

 })
 //rutina para ver el carrito

 let botonVerCarrito = document.getElementById("verCarrito")
 botonVerCarrito.addEventListener("click",function(){



//recorrer el carrito y pintar los productos

let base = document.getElementById("baseCarro")

base.innerHTML= ""


carrito.forEach(function(producto){})

let fila = document.createElement("div")
 fila.classList.add("row")


let columna1 = document.createElement("div")
columna1.classList.add("col-4")


let columna2 = document.createElement("div")
columna2.classList.add("col-8")


let foto = document.createElement("img")
foto.classList.add("w-100 ","img-fluid")
foto.src =producto.foto



//Childs

columna1.appendChild(foto)
fila.appendChild(columna1)
fila.appendChild(columna2)
base.appendChild(fila)


modalCompra.show()

 })
 