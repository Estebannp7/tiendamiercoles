
 export function ampliarInformacionProducto(evento){
let producto = {}

//Lleno la informacion del producto

producto.foto= evento.target.parentElement.querySelector("img").src
producto.nombre = evento.target.parentElement.querySelector("h3").textContent
producto.precio= evento.target.parentElement.querySelector("h4").textContent
producto.descripcion = evento.target.parentElement.querySelector("h5").textContent



let fotoInfo=document.getElementById("fotoInfo")
fotoInfo.src=evento.target.parentElement.querySelector("img").src

let tituloInfo=document.getElementById("tituloInfo")
tituloInfo.textContent= evento.target.parentElement.querySelector("h3").textContent

let precioInfo=document.getElementById("precioInfo")
precioInfo.textContent=evento.target.parentElement.querySelector("h4").textContent

let descripcionInfo=document.getElementById("descripcionInfo")
descripcionInfo.textContent=evento.target.parentElement.querySelector("h5").textContent

//devolver el producto
return producto

}



