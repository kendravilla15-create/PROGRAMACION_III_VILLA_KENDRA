const aforo = document.getElementById("aforo");
const horario = document.getElementById("horario");
const estado = document.getElementById("estado");

aforo.textContent = "Aforo: 50 personas";
horario.textContent = "Horario: 6:00 a 22:00";
estado.textContent = "Estado: Abierto";

const entrenador = document.querySelector(".entrenador");
entrenador.textContent = "Carlos Pérez";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Rutina";

const clase = document.querySelector("#clase");
clase.textContent = "Clase de Spinning";

const estadoSocio = document.querySelector("#socio .estado");
estadoSocio.textContent = "Listo para entrenar";

const maquinas = document.querySelectorAll(".maquinas");
console.log(maquinas);
console.log(maquinas.length);
console.log(maquinas[0].textContent);
console.log(maquinas[1].textContent);
console.log(maquinas[2].textContent);
console.log(maquinas[3].textContent);
console.log(maquinas[4].textContent);
console.log(maquinas[5].textContent);
