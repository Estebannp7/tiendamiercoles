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


let precio=(producto.precio.split("$")[1].split("COP")[0])
console.log(precio)
producto.subtotal=cantidad*Number(precio)


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
modalCompra.hide()

 })
 //rutina para ver el carrito

 let botonVerCarrito = document.getElementById("verCarrito")
 botonVerCarrito.addEventListener("click",function(){



//recorrer el carrito y pintar los productos

let base = document.getElementById("baseCarro")

base.innerHTML= ""


carrito.forEach(function(producto){


    let fila=document.createElement("div")
    fila.classList.add("row")

    let columna1=document.createElement("div")
    columna1.classList.add("col-4")

    let columna2=document.createElement("div")
    columna2.classList.add("col-8")
   
    
    let precio=document.createElement("p")
    precio.classList.add("text-warning")
    precio.textContent=producto.precio

    

    let foto = document.createElement("img")
    foto.classList.add("w-100","img-fluid")
    foto.src=producto.foto

    let nombre=document.createElement("p")
    nombre.classList.add("text-dark")
    nombre.textContent=producto.titulo

    let subt=document.createElement("p")
    subt.classList.add("text-dark")
    
    
    subt.textContent="Subtotal : "+producto.subtotal
    
    let fila2=document.createElement("div")
    fila2.classList.add("row")

    

    let cant=document.createElement("p")
    cant.classList.add("p")
    cant.textContent="cantidad : "+producto.cantidad
    
    let total = document.getElementById("totalp")
    total.classList.add("text-warning")
    let resultado = Number(producto.cantidad) * Number(producto.precio)
    total.textContent = resultado;



   producto.subtotal = resultado


        let totalneto = 0;

        carrito.forEach(function (producto) {
            totalneto = totalneto + Number(producto.subtotal)
            total.textContent = "Total : $" + totalneto + " COP"
        })
        let dolares = document.getElementById("usd")
        dolares.addEventListener("click", function () {
            let usd = 1 * totalneto / Number(4000)

            total.textContent = "Total : $" + usd + " USD"
            let preciousd = producto.precio / Number(4000)
          


        })
        



    

    

    //padres e hijos

    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    columna2.appendChild(precio)
    columna2.appendChild(cant)
    columna2.appendChild(subt)


    fila.appendChild(columna1)
    fila.appendChild(columna2)

    
    
    

    base.appendChild(fila)
})






modalCompra.show()

})
