let dia = 4;
switch (dia) {
    case 1:
        console.log('Lunes: rutina de pecho');
        break;
    case 2:
        console.log('Martes: rutina de espalda');
        break;
    case 3:
        console.log('Miércoles: rutina de pierna');
        break;
    case 4:
        console.log('Jueves: rutina de hombro');
        break;
    case 5:
        console.log('Viernes: rutina de cardio');
        break;
    default:
        console.log('Día de descanso');
}

let plan = 'premium';
switch (plan) {
    case 'basico':
    case 'cardio':
        console.log('Tienes un plan estándar');
        break;
    case 'premium':
        console.log('Tienes plan premium con entrenador personal');
        break;
    default:
        console.log('Plan no conocido');
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia < 25):
        console.log('Tienes poca energía, haz solo estiramientos');
        break;
    case (energia >= 25 && energia < 50):
        console.log('Tienes energía moderada, haz una rutina ligera');
        break;
    case (energia >= 50 && energia < 75):
        console.log('Tienes buena energía, haz tu rutina normal');
        break;
    case (energia >= 75 && energia <= 100):
        console.log('Tienes mucha energía, haz una rutina intensa');
        break;
    default:
        console.log('Nivel de energía desconocido');
}

console.log("Calculadora de peso");
let pesoBarra = 20;
let pesoDiscos = 40;
let operacion = 'suma';
let resultado;
switch (operacion) {
    case 'suma':
        resultado = pesoBarra + pesoDiscos;
        break;
    case 'resta':
        resultado = pesoDiscos - pesoBarra;
        break;
    case 'multiplicacion':
        resultado = pesoBarra * pesoDiscos;
        break;
    case 'division':
        if (pesoBarra !== 0) {
            resultado = pesoDiscos / pesoBarra;
        } else {
            console.log("Error: Division por cero no permitida");
        }
        break;
    default:
        console.log("Operacion desconocida");
}
if (resultado !== undefined) {
    console.log("El resultado de la operacion es:", operacion, "=", resultado);
}
