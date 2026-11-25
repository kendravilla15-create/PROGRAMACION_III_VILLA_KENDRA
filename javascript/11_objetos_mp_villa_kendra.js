let nombre = "Kendra Villa";
let edad = 20;
let plan = "Premium";
let energia = 100;
let lesionado = false;

let socio = {
    nombre: "Kendra Villa",
    edad: 20,
    plan: "Premium",
    energia: 100,
    lesionado: false
};

console.log("Información del socio de GymFit:");
console.log("Nombre del socio: " + socio.nombre);
console.log("Edad del socio: " + socio["edad"]);
console.log("Plan contratado: " + socio["plan"]);
console.log("Nivel de energía: " + socio["energia"]);
console.log("Lesionado: " + socio["lesionado"]);
console.log("Socio", socio);

console.log("Agregar nuevas propiedades al socio");
socio.entrenador = "Carlos";
console.log("Entrenador asignado: " + socio.entrenador);
socio["diasPorSemana"] = 5;
console.log("Días de entrenamiento por semana: " + socio["diasPorSemana"]);
console.log("Socio", socio);

console.log("Actualizar el nivel de energía del socio");
socio.energia = 80;
console.log("Nuevo nivel de energía: " + socio.energia + "%");
socio["lesionado"] = true;
console.log("Nuevo estado del socio: " + (socio.lesionado ? "lesionado" : "en forma"));
console.log("Socio", socio);

console.log("Eliminar propiedades del socio");
delete socio.diasPorSemana;
console.log("Propiedad 'diasPorSemana' eliminada");
console.log("Socio", socio);

console.log("Recorrer las propiedades del socio");
for (let propiedad in socio) {
    console.log(propiedad + ": " + socio[propiedad]);
}

let inventario = {
    mancuernas: 12,
    barras: 4,
    colchonetas: 20
};

console.log("Cálculo de equipos del inventario:");
for (let equipo in inventario) {
    console.log(equipo + ": " + inventario[equipo]);
}
let total = inventario.mancuernas + inventario.barras + inventario.colchonetas;
console.log("Total de equipos en el gimnasio: " + total);
