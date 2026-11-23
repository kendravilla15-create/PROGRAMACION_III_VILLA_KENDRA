console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Gimnasio GymFit";

const estado = document.getElementById("estado");
const botonAbrir = document.getElementById("botonAbrir");
botonAbrir.addEventListener("click", function(){
    console.log("Ejecutando click");
    estado.textContent = "Gimnasio Abierto!";
    console.log("Texto cambiado en el elemento estado");
    alert("El gimnasio está listo para entrenar");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function(){
    mensaje.textContent = "Socio listo para entrenar!";
});

let repeticiones = 0;
const contador = document.getElementById("contador");
const nuevaRepeticion = document.getElementById("nuevaRepeticion");
nuevaRepeticion.addEventListener("click", function(){
    repeticiones += 1;
    contador.textContent = repeticiones;
});
