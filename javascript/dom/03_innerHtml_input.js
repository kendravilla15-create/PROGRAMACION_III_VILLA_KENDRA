const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("dimension");

mensaje.textContent="Mensaje desde otro Universo";
saludo.innerHTML=<h1>Hello con innerHtml</h1>;

const ficha = document.getElementById("ficha");
ficha.innerHTML=`
<h1>Rick Sanchez</h1>
<p>Dimensión: C-137</p>
<p>Especie: Humano</p>
<p>Estado: Vivo</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registar = document.getElementById("registar");
registar.addEventListener("click", function(){
    console.log("Ejecutanco Click", nombre.value);
    saludar.textContent="Hola "+nombre.values;
});