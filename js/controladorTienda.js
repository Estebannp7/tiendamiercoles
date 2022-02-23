//controlando etiquetas 

//Crear una variable para guardar una etiqueta 

let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)

//2. como modificar el texto de una etiqueta
etiquetaTitulo.textContent = "rojo vos no existis"

let etiquetaMenu = document.getElementById("titulonav")
console.log(etiquetaMenu)

etiquetaMenu.textContent = "Rolls royce"

//controlando una foto

let etiquetaFoto = document.getElementById("fotoroll")
console.log (etiquetaFoto)
etiquetaFoto.src = "img/exp1.png"
//cambiar estilo etiqueta
etiquetaTitulo.classList.add("text-center")