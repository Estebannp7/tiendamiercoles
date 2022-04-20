
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCr006DGx_80wTQw9oSsLAU86j4r6R6SoE",
    authDomain: "estebantiendacesde.firebaseapp.com",
    projectId: "estebantiendacesde",
    storageBucket: "estebantiendacesde.appspot.com",
    messagingSenderId: "562745876353",
    appId: "1:562745876353:web:0d90784ea5dee651495280",
    measurementId: "G-10SW2M4YH4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
