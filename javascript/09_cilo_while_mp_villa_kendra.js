console.log("Abriendo los casilleros del gimnasio...");
let casillero = 1;
while (casillero <= 5) {
    console.log("Abriendo casillero " + casillero + ".");
    casillero++;
}
console.log("Todos los casilleros han sido abiertos");

console.log("Cuenta regresiva para terminar el descanso");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos de descanso");
    i--;
}

console.log("Llenar la botella de agua");
let agua = 0;
let sorbo = 10;
let totalLlenados = 0;
while (agua < 100) {
    agua += sorbo;
    totalLlenados++;
    console.log("Llenando... Nivel de agua: " + agua + "%");
}
console.log("Botella llena después de " + totalLlenados + " llenados.");

console.log("Consumo de energía durante el entrenamiento");
let energia = 100;
let consumo = 15;
let ejercicios = 0;
while (energia >= consumo) {
    energia -= consumo;
    ejercicios++;
    console.log("Ejercicio " + ejercicios + " realizado. Energía restante: " + energia + "%");
    if (energia < 50) {
        console.log("Advertencia: energía baja, nivel actual: " + energia + "%");
    }
}
console.log("No hay suficiente energía para otro ejercicio");
console.log("Total de ejercicios realizados: " + ejercicios);

console.log("Hacer flexiones con DO...While");
let flexiones = 0;
do {
    flexiones++;
    console.log("Flexión número " + flexiones);
} while (flexiones < 5);
console.log("Serie de flexiones terminada");

console.log("Ahorrar para la membresía anual de GymFit");
let ahorros = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorros += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorros actuales: $" + ahorros);
} while (ahorros < meta);
console.log("Meta alcanzada en " + semanas + " semanas. Ahora puedes pagar la membresía anual.");
