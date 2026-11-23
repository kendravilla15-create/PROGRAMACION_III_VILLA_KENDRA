let pesos = [30, 50, 70, 40];
let posicion = 2;
let nuevoPeso = 100;
if (posicion >= 0 && posicion < pesos.length) {
    pesos[posicion] = nuevoPeso;
} else {
    console.log("Posición no válida");
}
for (let i = 0; i < pesos.length; i++) {
    console.log("Posición", i);
    console.log("Peso:", pesos[i]);
}
console.log(pesos);

let socios = [
    { id: 1, nombre: "Kendra", plan: "Premium", edad: 20 },
    { id: 2, nombre: "Carlos", plan: "Básico", edad: 30 },
    { id: 3, nombre: "Ana", plan: "Cardio", edad: 25 },
];
for (let socio of socios) {
    console.log("ID:", socio.id);
    console.log("Nombre:", socio.nombre);
    console.log("Plan:", socio["plan"]);
    console.log("Edad:", socio["edad"]);
}

console.log(".........................................................");
console.log("El entrenador organiza las rutinas:");
let rutinas = [
    {
        socio: "Kendra",
        repeticiones: [12, 10, 8]
    },
    {
        socio: "Carlos",
        repeticiones: [15, 12, 10]
    },
    {
        socio: "Ana",
        repeticiones: [20, 18, 15]
    }
];
for (let rutina of rutinas) {
    let totalRepeticiones = 0;
    console.log("Socio:", rutina.socio);
    for (let repeticion of rutina.repeticiones) {
        console.log("Repeticiones de la serie:", repeticion);
        totalRepeticiones += repeticion;
    }
    console.log("Total de repeticiones de", rutina.socio, "son:", totalRepeticiones);
}

console.log(".........................................................");
let pesosOriginales = [30, 50, 70, 40];
let pesosDobles = pesosOriginales.map(peso => {
    return peso * 2;
});
console.log(pesosDobles);
let pesosPesados = pesosOriginales.filter(peso => peso >= 50);
console.log(pesosPesados);
let pesoTotal = pesosOriginales.reduce((acumulador, peso) => {
    return acumulador + peso;
});
console.log(pesoTotal);
