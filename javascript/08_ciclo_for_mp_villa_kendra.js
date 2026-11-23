console.log("ciclo for");
for (let i = 0; i < 5; i++) {
    console.log("Repetición número:", i);
}

console.log("Cuenta regresiva para iniciar la clase de spinning");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " segundos para iniciar la clase");
}

console.log("Cuenta regresiva de la clase de spinning con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Comienza la clase de spinning!");
    } else {
        console.log("Faltan " + i + " segundos para iniciar la clase");
    }
}

console.log("Nivel de progreso de la rutina");
let progreso = 50;
for (let i = 0; i <= 100; i += 10) {
    if (progreso >= i) {
        console.log("Progreso de la rutina: " + i + "%");
    }
}

const caloriasPorSerie = 10;
let totalCalorias = 0;
for (let serie = 1; serie <= 5; serie++) {
    totalCalorias += caloriasPorSerie;
    console.log("Serie " + serie);
    console.log("Calorías quemadas hasta ahora: " + totalCalorias);
}
console.log("Total de calorías quemadas: " + totalCalorias);

console.log("Promedio de minutos de entrenamiento");
let totalMinutos = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let minutos = dia * 5 + 30;
    totalMinutos += minutos;
    console.log("Día " + dia + ": " + minutos + " minutos de entrenamiento");
}
console.log("Total de minutos de entrenamiento: " + totalMinutos);
console.log("Promedio de minutos por día: " + (totalMinutos / dias).toFixed(2));
