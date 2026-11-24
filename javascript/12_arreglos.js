let personajes = ["Rick", "Morty", "Summer", "Jerry", "Kendra", "Villa"];
console.log ("Elemento 0:", personajes[0]);
console.log ("Elemento 2:", personajes[2]);
console.log ("Elemento 5:", personajes[5]);
console.log ("Elemento 4:", personajes[4]);
console.log ("Tamaño del arreglo:", personajes.length);


console.log("Personajes:",personajes);
console.log("INCLUIR ELEMENTOS A UN ARREGLO CON PUSH");
personajes.push("Ormaza");
console.log("Personajes:",personajes);
personajes.push("Kendra");

console.log("Personajes:",personajes);
console.log("MODIFICAR ELEMENTOS A UN ARREGLO CON PUSH");
personajes[7]="Kendra";

console.log("Personajes:",personajes);
console.log("PONER AL INICIO DEL ARREGLO UNSHIFT");
personajes.unshift("KENNNDRA");
personajes[0]="Kendra";

console.log("Personajes:",personajes);
console.log("ELIMINAR ELEMENTOS A UN ARREGLO");
personajes.pop();
console.log("Personajes:",personajes);

personajes.shift();
console.log("Personajes:",personajes);

personajes.splice(1,1);
console.log("Personajes:",personajes);
