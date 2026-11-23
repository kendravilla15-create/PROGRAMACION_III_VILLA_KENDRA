console.log("Operadores Aritmeticos");
let pesoInicial = 80;
let pesoPerdido = 5;
console.log("Suma:", pesoInicial + pesoPerdido);
console.log("Resta:", pesoInicial - pesoPerdido);
console.log("Multiplicacion:", pesoInicial * pesoPerdido);
console.log("Division:", pesoInicial / pesoPerdido);
console.log("Modulo:", pesoInicial % pesoPerdido);

console.log("Operadores de Comparacion");
console.log("pesoInicial es igual a pesoPerdido?", pesoInicial == pesoPerdido);
console.log("pesoInicial es diferente de pesoPerdido?", pesoInicial != pesoPerdido);
console.log("pesoInicial es mayor que pesoPerdido?", pesoInicial > pesoPerdido);
console.log("pesoInicial es menor que pesoPerdido?", pesoInicial < pesoPerdido);
console.log("pesoInicial es mayor o igual que pesoPerdido?", pesoInicial >= pesoPerdido);
console.log("pesoInicial es menor o igual que pesoPerdido?", pesoInicial <= pesoPerdido);

console.log("Operadores Logicos");
let tieneMembresia = true;
let tieneDeuda = false;
console.log("tieneMembresia AND tieneDeuda:", tieneMembresia && tieneDeuda);
console.log("tieneMembresia OR tieneDeuda:", tieneMembresia || tieneDeuda);
console.log("NOT tieneMembresia:", !tieneMembresia);
console.log("NOT tieneDeuda:", !tieneDeuda);

console.log("Operadores de Asignacion");
let repeticiones = 10;
console.log("Valor inicial de repeticiones:", repeticiones);
repeticiones += 5;
console.log("Despues de repeticiones += 5:", repeticiones);
repeticiones -= 3;
console.log("Despues de repeticiones -= 3:", repeticiones);
repeticiones *= 2;
console.log("Despues de repeticiones *= 2:", repeticiones);
repeticiones /= 4;
console.log("Despues de repeticiones /= 4:", repeticiones);
repeticiones %= 3;
console.log("Despues de repeticiones %= 3:", repeticiones);

console.log("Operadores de Incremento y Decremento");
let series = 3;
console.log("Valor inicial de series:", series);
series++;
console.log("Valor de series despues del incremento:", series);
series--;
console.log("Valor de series despues del decremento:", series);

console.log("Operadores de Comparacion estricta");
let edadNumero = 18;
let edadTexto = '18';
console.log("edadNumero es estrictamente igual a edadTexto?", edadNumero === edadTexto);
console.log("edadNumero es diferente de edadTexto?", edadNumero != edadTexto);

console.log("Operadores Ternarios");
let edad = 16;
let mensaje = edad >= 18 ? "Puedes inscribirte solo" : "Necesitas autorización de un representante";
console.log(mensaje);

console.log("Tabla de calorías quemadas por minuto de cardio (8 calorías por minuto):");
console.log('8 x 1 =', 8*1);
console.log('8 x 2 =', 8*2);
console.log('8 x 3 =', 8*3);
console.log('8 x 4 =', 8*4);
console.log('8 x 5 =', 8*5);
console.log('8 x 6 =', 8*6);
console.log('8 x 7 =', 8*7);
console.log('8 x 8 =', 8*8);
console.log('8 x 9 =', 8*9);
console.log('8 x 10 =', 8*10);

console.log("Tabla de repartir 60 minutos de entrenamiento:");
console.log('60 / 1 =', 60/1);
console.log('60 / 2 =', 60/2);
console.log('60 / 3 =', 60/3);
console.log('60 / 4 =', 60/4);
console.log('60 / 5 =', 60/5);
console.log('60 / 6 =', 60/6);
console.log('60 / 7 =', 60/7);
console.log('60 / 8 =', 60/8);
console.log('60 / 9 =', 60/9);
console.log('60 / 10 =', 60/10);
