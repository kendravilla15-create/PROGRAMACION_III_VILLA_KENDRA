let cristales = [30,50,70,40];
let Posicion = 2;
let nuevaEnergia = 100;
for (let i=0; i<cristales.length; i++){
    console.log("Posicion", i);
    console.log("Cristal:", cristales[i]);
    if(Posicion>=0 && Posicion<cristales.length){
        cristales[Posicion] = nuevaEnergia;
    } else{
        console.log("Posicion no válida");
    }
}
console.log(cristales);

let personajes = [
    { id: 1, nombre: "Rick", energia: 99, edad: 70},
    { id: 2, nombre: "Morty", energia: 80, edad: 14},
    { id: 3, nombre: "Kendra", energia: 50, edad: 26},
]
for (let personaje of personajes){
    console.log("ID:", personaje.id);
    console.log("Nombre:", personaje.nombre);
    console.log("Energía:", personaje["energia"]);
    console.log("Edad:", personaje["edad"]);
}

console.log(".........................................................");

console.log("Rick organiza sus misiones:");
misiones =[
    {
        piloto: "Rick",
        cristales: [30,50,60]
    },
    {
        piloto: "Morty",
        cristales: [20,30,30]
    },
    {
        piloto: "Summer",
        cristales: [90,80,70]
    }
];

for (let mision of misiones){
    totalCristales=0;
    console.log("Piloto: ", mision.piloto);
    for(let cristal of mision.cristales){
        console.log("Cristales Recolectados", cristal);
        totalCristales+=cristales;
    }
    console.log("Total de Cristales Recolectados por:", mision.piloto, "son: ", totalCristales);
}

console.log(".......................................................................................................");

let cristalesOriginales = [30,50,70,40];
let cristalesDobles = cristalesOriginales.map(elemento=>{
    return elemento * 2;
});
console.log(cristalesDobles);
let validos = cristalesOriginales.filter(cristal=>cristal>=50);
let resultados = cristalesOriginales.reduce((acumulador,elemeto)=>{
    return acumulador+elemeto;
});
