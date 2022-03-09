//creando un arreglo de objetos

let productos = [

       
    {foto:'img/ghost1.jpg', nombre: "Ghost", precio: 200000,descripcion:"Carro de lujo"},
    { foto:'img/wraith1.jpg', nombre: "Wraith", precio: 600000,descripcion:"Carro lujosisimo"},
    {foto:'img/Phantom1.jpg', nombre: " Phantom", precio: 300000, descripcion: "Vehiculo de lujo sedan"},
    {foto:'img/cullinan1.jpg', nombre :" Cullinan ",precio: 500000, descripcion :" SUV de lujo"},
    {foto:'img/dawn1.jpg', nombre: "Dawn", precio: 9000000, descripcion: "Vehiculo de lujo descapotable"},
    {foto:'img/spectre1.jpg',nombre: "Spectre", precio: 8000000, descripcion: "Vehiculo de lujo sin diseño"},
    {foto:'img/extasis1.jpg',nombre: "Espiritu extasis", precio: 200000, descripcion: "Estatuilla de RR"},
    {foto:'img/mochila.jpg',nombre: "Mochila RR", precio: 400000, descripcion: "Maletin RR"}
    

]

console.log(productos)

//COMO RECORRER UN ARREGLO CON JS
//1.Creo una variable para almacenar la vase sobre la cual voy a pintar

let fila= document.getElementById("fila")


productos.forEach(function(producto){

    console.log(producto.nombre)
    console.log(producto.precio)



    //Pintando etiquetas.
//div con la clae col
let columna =document.createElement("div")
columna.classList.add("col")

//div con clases card h-100

let tarjeta= document.createElement("div")
tarjeta.classList.add("card")
tarjeta.classList.add("h-100")


//img con la clase card -img top

let foto = document.createElement("img")
foto.classList.add("card-img-top")
foto.src= producto.foto

//h4 con clase text center
let titulo = document.createElement("h4")
titulo.classList.add("text-center")
titulo.textContent=producto.nombre

let precio = document.createElement("h3")
precio.classList.add("text-center")
precio.textContent= producto.precio

//3 padres e hijos
tarjeta.appendChild(foto)
columna.appendChild(tarjeta)
fila.appendChild(columna)
tarjeta.appendChild(titulo)
tarjeta.appendChild(precio)
})