const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje desde GymFit";
saludo.innerHTML = "<h1>Bienvenido con innerHTML</h1>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
<h1>Kendra Villa</h1>
<p>Plan: Premium</p>
<p>Entrenador: Carlos Pérez</p>
<p>Estado: Activo</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");
registrar.addEventListener("click", function(){
    console.log("Ejecutando Click", nombre.value);
    saludar.textContent = "Bienvenido a GymFit " + nombre.value;
});
