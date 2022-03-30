 export function llenarTienda(){
    let productos = [

       
        {foto:'img/ghost1.jpg', nombre: "Ghost", precio: 200000,descripcion:"Carro de lujo"},
        { foto:'img/wraith1.jpg', nombre: "Wraith", precio: 600000,descripcion:"Carro lujosisimo"},
        {foto:'img/Phantom1.jpg', nombre: " Phantom", precio: 300000, descripcion: "Vehiculo de lujo sedan"},
        {foto:'img/cullinan1.jpg', nombre :" Cullinan ",precio: 500000, descripcion :" SUV de lujo"},
        {foto:'img/dawn1.jpg', nombre: "Dawn", precio: 9000000, descripcion: "Vehiculo de lujo descapotable"},
        {foto:'img/spectre1.jpg',nombre: "Spectre", precio: 8000000, descripcion: "Vehiculo de lujo electrico"},
        {foto:'img/sombrillarr.jpg',nombre: "Sombrilla ", precio: 200000, descripcion: "Paraguas exclusivo  de RR"},
        {foto:'img/mochila.jpg',nombre: "Mochila RR", precio: 400000, descripcion: "Maletin RR"},
        {foto:'img/champaña.jpg',nombre: "Champaña",precio : 20000, descripcion :"Cofre con champaña y copas exclusivo de RR"}
        
    
    ]
    
    
    //COMO RECORRER UN ARREGLO CON JS
    //1.Creo una variable para almacenar la vase sobre la cual voy a pintar
    
    let fila= document.getElementById("fila")
    
    
    productos.forEach(function(producto){
    
        
    
    
    
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
    foto.classList.add("p-4")
    foto.src= producto.foto
    
    let separador = document.createElement("hr")
    separador.classList.add("w-75")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")
    
    
    //h4 con clase text center
    let titulo = document.createElement("h3")
    titulo.classList.add("text-center")
    titulo.classList.add("fw-bold")
    titulo.textContent=producto.nombre
    
    let precio = document.createElement("h4")
    titulo.classList.add("text-center")
    precio.textContent = "$" + producto.precio
    
    let descripcion = document.createElement("h5")
    descripcion.classList.add("text-center")
    descripcion.textContent = producto.descripcion
    
    let botonVerProducto = document.createElement("button")
    botonVerProducto.classList.add("m2")
    botonVerProducto.classList.add("btn")
    botonVerProducto.classList.add("btn-outline-dark")
    botonVerProducto.textContent = "ver producto"
    botonVerProducto.setAttribute("type", "button")
    
    
    
    
    //3 padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(botonVerProducto)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
    })






}

llenarTienda()




