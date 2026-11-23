console.log('Condicionales If');

console.log('Condicional simple If');
let energia = Number(prompt('Socio, ¿cuánta energía tienes hoy (0 a 100)?'));
if (energia > 0) {
    console.log('Tienes energía suficiente para entrenar');
}

console.log('Condicional If-Else Dos caminos');
let diasPagados = Number(prompt('Socio, ¿cuántos días de membresía te quedan?'));
if (diasPagados > 0) {
    console.log('Tu membresía está activa, puedes ingresar al gimnasio');
} else {
    console.log('Tu membresía está vencida, acércate a recepción');
}

console.log('Condicional If-Else If-Else Múltiples caminos');
let plan = prompt('Socio, ¿qué plan tienes? (basico, cardio, premium)');
if (plan === 'basico') {
    console.log('Tienes acceso a la sala de máquinas');
} else if (plan === 'cardio') {
    console.log('Tienes acceso a la zona de cardio y clases de spinning');
} else if (plan === 'premium') {
    console.log('Tienes acceso a todo el gimnasio y entrenador personal');
} else {
    console.log('Plan no reconocido');
}

console.log('Condicional If anidado');
let energia2 = 50;
let hidratacion2 = 50;
if (energia2 > 0) {
    if (hidratacion2 > 0) {
        console.log('Tienes energía e hidratación suficiente para entrenar');
    } else {
        console.log('Debes hidratarte antes de entrenar');
    }
} else {
    console.log('No tienes energía suficiente para entrenar');
}

console.log('Condicional If con operador lógico');
let energia3 = 50;
let hidratacion3 = 50;
if (energia3 > 0 && hidratacion3 > 0) {
    console.log('Tienes energía e hidratación suficiente para entrenar');
} else {
    console.log('No tienes energía o hidratación suficiente para entrenar');
}

console.log('Control de acceso al gimnasio');
let diasMembresia = 400;
let energia4 = 50;
let entrenadorDisponible = "si";
let maquinaDisponible = "no";
let gimnasioCerrado = "no";
if (diasMembresia > 0 &&
    energia4 >= 50 &&
    (entrenadorDisponible === "si" ||
    maquinaDisponible === "si") &&
    gimnasioCerrado === "no") {
    console.log('Acceso autorizado');
} else {
    if (diasMembresia <= 0) {
        console.log('No puedes ingresar, tu membresía está vencida');
    }
    if (energia4 < 50) {
        console.log('No puedes entrenar, tu energía es baja');
    }
    if (entrenadorDisponible === "no") {
        console.log('No hay entrenador disponible');
    }
    if (maquinaDisponible === "no") {
        console.log('No hay máquina disponible');
    }
    if (gimnasioCerrado === "si") {
        console.log('El gimnasio está cerrado');
    }
}

console.log("Reto mensual de entrenamiento");
let entrenamientosObjetivo = 20;
let entrenamientosRealizados = 15;
let caloriasObjetivo = 10000;
let caloriasQuemadas = 8500;
let socioLesionado = "si";
let faltasSeguidas = "no";
let premio = 0;

let porcentajeCumplimiento = (entrenamientosRealizados / entrenamientosObjetivo) * 100;
let caloriasRestantes = caloriasObjetivo - caloriasQuemadas;

if (porcentajeCumplimiento >= 100 && caloriasRestantes <= 0 && socioLesionado === "no" && faltasSeguidas === "no") {
    console.log("Reto Cumplido con Éxito");
} else if (porcentajeCumplimiento >= 70) {
    console.log("Reto Cumplido Parcialmente");
} else if (porcentajeCumplimiento >= 50) {
    console.log("Reto Regular, se requiere más constancia");
} else {
    console.log("Reto No Cumplido");
}

console.log("Evaluación de premio por desempeño");
if (porcentajeCumplimiento >= 90 && caloriasRestantes <= 2000) {
    premio = 1;
    console.log("Premio otorgado: un mes gratis de membresía.");
} else {
    console.log("No se otorga premio.");
}

console.log("Recomendación para el próximo mes");
if (socioLesionado === "no" && faltasSeguidas === "no") {
    console.log("Continúa con tu rutina normal.");
} else if (socioLesionado === "si" && faltasSeguidas === "no") {
    console.log("Entrena con precaución, consulta a tu entrenador por la lesión.");
} else if (socioLesionado === "no" && faltasSeguidas === "si") {
    console.log("Debes mejorar tu asistencia al gimnasio.");
} else {
    console.log("Recupérate de la lesión y luego mejora tu asistencia.");
}

console.log("Resumen del reto");
console.log("Entrenamientos Objetivo:", entrenamientosObjetivo);
console.log("Entrenamientos Realizados:", entrenamientosRealizados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Calorías Objetivo:", caloriasObjetivo);
console.log("Calorías Quemadas:", caloriasQuemadas);
console.log("Calorías Restantes:", caloriasRestantes);
console.log("Socio Lesionado:", socioLesionado);
console.log("Faltas Seguidas:", faltasSeguidas);
console.log("Premio Otorgado:", premio);
