console.log("GymFit: funciones en javascript");

function abrirGimnasio() {
    console.log("Abriendo el gimnasio...");
}
abrirGimnasio();


function entrenadorTurno(nombre) {
    console.log(nombre + " es el entrenador de turno");
}
entrenadorTurno("Carlos");


function recuperarEnergia(energia, recuperacion) {
    let energiaTotal = energia + recuperacion;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Energía recuperada a " + energiaTotal + "%");
    return energiaTotal;
}
let energia = 50;
energia = recuperarEnergia(energia, 30);
energia = recuperarEnergia(energia, 40);


console.log("Calcular descuentos de la membresía");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}
let precioMembresia = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioMembresia, porcentajeDescuento);
console.log("Precio original: $" + precioMembresia + " - Precio con descuento: $" + precioConDescuento);


function evaluarRutina(energia, seriesCompletas, totalSeries) {
    let porcentajeCompletado = (seriesCompletas / totalSeries) * 100;
    if (energia < 20) {
        console.log("ADVERTENCIA: Energía baja. Nivel actual: " + energia + "%");
    }
    if (porcentajeCompletado >= 70) {
        console.log("Rutina aprobada, completaste el " + porcentajeCompletado + "% de las series");
    } else {
        console.log("Rutina incompleta, solo completaste el " + porcentajeCompletado + "% de las series");
    }
}
evaluarRutina(15, 8, 10);
evaluarRutina(60, 5, 10);


function metaCalorias(calorias) {
    let objetivo = 500;
    if (calorias >= objetivo) {
        console.log("Meta cumplida, calorías quemadas: " + calorias);
    } else {
        console.log("Meta no cumplida, calorías quemadas: " + calorias);
    }
}
metaCalorias(650);
metaCalorias(300);
