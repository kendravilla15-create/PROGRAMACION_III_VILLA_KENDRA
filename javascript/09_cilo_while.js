console.log("Abriendo el portal d la nave...");
let portal = 1;
while (portal <= 5) {
    console.log("Abriendo portal " + portal + ".");
    portal++;
}
console.log("Todos los portales han sido abiertos");

console.log("Cuenta regresiva para el despegue de la nave ");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para el despegue de la nave");
    i--;
}

console.log("Recargar la pistola de portales de Rick");
let energia = 0;
let recarga = 10;
let totalRecargas = 0;
while (energia < 100) {
    energia += recarga;
    totalRecargas++;
    console.log("Recargando... Nivel de energia: " + energia + "%");
}
console.log("Pistola de portales totalmente recargada despues de " + totalRecargas + " recargas.");

console.log("Consumo de combustible de la nave de Rick");
let combustible = 100;
let consumo= 15;
let viajes = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Viaje " + viajes + " realizado. Combustible restante: " + combustible + "%");
    if(combustible <50) {
        console.log("Advertencia: Combustible bajo, nivel actual: " + combustible + "%");
    }
}
console.log("No hay suficiente combustible para otro viaje: " );
console.log("Total de viajes realizados: " + viajes);

console.log("Activar portales de dimensiones peligrosas con DO...While");
let energiaPortal = 0;
do {
    console.log("Activando portal... Nivel de energia del portal: " + energiaPortal + "%");
    energiaPortal -= 15;
} while (energiaPortal > 0);
console.log("No hay suficiente energia para activar mas portales");

console.log("Comprar una pistola de portales para Rcik");
let ahorros = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorros += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorros actuales:" + ahorros+ " unidades");
} while (ahorros < meta);
console.log("Meta alcanzada en" + semanas + "semanas. Ahora Rick puede comprar la pistola de portales.");