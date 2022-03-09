let etiquetaBoton = document.getElementById("boton")

 etiquetaBoton.addEventListener("click",cambiarFoto)

 function cambiarFoto ( ){

let titulo2=document.getElementById("titulo2")
titulo2.textContent="buenos dias señor"

 }
 let etiquetaImagen= document.getElementById("imagen")

 etiquetaImagen.addEventListener("mouseover",cambiartitulo)

 function cambiartitulo(){

    let etiquetatitulo = document.getElementById("titulo1")
 
    etiquetatitulo.textContent = "estoy cambiando"

}
