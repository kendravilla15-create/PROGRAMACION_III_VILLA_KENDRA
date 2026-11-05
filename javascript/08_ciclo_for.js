console.log("ciclo for");
for (let i = 0; i < 5; i++) {
    console.log("Iteracion número:", i);
}

console.log("Cuenta Regresiva despegue de la nave de Morty");
for(let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " segundos para el despegue");
}
console.log("Cuenta regresiva despegue de la nave de Morty con mensaje final");
for (let i = 10; i >= 0; i--) {
    console.log("Despegue en curso!");
    if (i === 0) {
        console.log("¡Despegue de la nave de Morty!");
    } else {
        console.log("Faltan " + i + " segundos para el despegue");
    }
}

console.log("Nivel de energía de Rick");
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia >= i) {
        console.log("Nivel de energía de Rick: " + i + "%");
    }
}

const consumoPorViaje = 10;
let totalConsumido = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorViaje;
    console.log("Viaje" + viaje);
    console.log("Total consumido hasta ahora:" + totalConsumido + "unidades de combustible");
}
console.log("Total consumido :" + totalConsumido + "unidades de combustible");

console.log("Promedio de los Cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log("Día " + dia + ": " + cristales + " cristales recolectados");
}
console.log("Total de cristales recolectados:" + totalCristales);   
console.log("Promediode criatales por dia:"+(totalCristales/dias).toFixed(2));