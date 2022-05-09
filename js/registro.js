import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
let boton = document.getElementById("botonRegistro")


boton.addEventListener("click",function(evento){

evento.preventDefault()
let email= document.getElementById("email").value
let password = document.getElementById("password").value
let formulario=document.getElementById("formularioregistro")

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("exito en el registro")
    alerta.textContent="Exito en el registro"
    alerta.classList.add("alert-primary")
    alerta.classList.remove("alert-danger","invisible")
    setTimeout(function(){
        alerta.classList.add("invisible")
        formulario.reset()
        window.location.href = "tienda.html"
    },2000)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alerta.textContent="Fallamos en el registro: "+errorMessage
    alerta.classList.add("alert-danger")
    alerta.classList.remove("alert-primary","invisible")
    setTimeout(function(){
        alerta.classList.add("invisible")
    },2000)
    // ..
  });



})