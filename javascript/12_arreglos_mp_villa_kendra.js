let ejercicios = ["Sentadilla", "Peso muerto", "Press banca", "Dominadas", "Abdominales", "Zancadas"];
console.log("Elemento 0:", ejercicios[0]);
console.log("Elemento 2:", ejercicios[2]);
console.log("Elemento 5:", ejercicios[5]);
console.log("Elemento 4:", ejercicios[4]);
console.log("Tamaño del arreglo:", ejercicios.length);


console.log("Ejercicios:", ejercicios);
console.log("INCLUIR ELEMENTOS A UN ARREGLO CON PUSH");
ejercicios.push("Burpees");
console.log("Ejercicios:", ejercicios);
ejercicios.push("Plancha");
console.log("Ejercicios:", ejercicios);

console.log("MODIFICAR ELEMENTOS DE UN ARREGLO POR SU ÍNDICE");
ejercicios[7] = "Plancha lateral";
console.log("Ejercicios:", ejercicios);

console.log("PONER AL INICIO DEL ARREGLO CON UNSHIFT");
ejercicios.unshift("CALENTAMIENTO");
ejercicios[0] = "Calentamiento";
console.log("Ejercicios:", ejercicios);

console.log("ELIMINAR ELEMENTOS DE UN ARREGLO");
ejercicios.pop();
console.log("Ejercicios (pop):", ejercicios);

ejercicios.shift();
console.log("Ejercicios (shift):", ejercicios);

ejercicios.splice(1, 1);
console.log("Ejercicios (splice):", ejercicios);
