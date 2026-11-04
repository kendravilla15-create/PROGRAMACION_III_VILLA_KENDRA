console.log('Condicionales If');
console.log('Condicional simple If');
let energia=Number(prompt('Rick,Cuanta energía tienes? '));
if(energia>0){
    console.log
        ('Tienes energia suficiente para continuar la aventura');
}

console.log('Condicional If-Else Dos caminos');
let combustible=Number(prompt('Rick,Cuanto combustible tienes? '));
if(combustible>0){
    console.log('Tienes combustible suficiente para continuar la aventura');
}else{
    console.log('No tienes combustible suficiente para continuar la aventura');
}

console.log('Condicional If-Else If-Else Múltiples caminos');
let dimension=prompt('Rick,En que dimensión estas? ');
if(dimension==='c-137'){
    console.log('Estas en la dimensión correcta');
}else if(dimension==='c-138'){
    console.log('Estas en la dimensión incorrecta');
}else if(dimension==='c-139'){
    console.log('Estas en la dimensión incorrecta');
}else{
    console.log('No estas en ninguna dimensión conocida');
}   


console.log('Condicional If anidado');
let energia2= 50;
let conbustible2= 50;
if(energia2>0){
    if(conbustible2>0){
        console.log('Tienes energia y combustible suficiente para continuar la aventura');
    }else{
        console.log('No tienes combustible suficiente para continuar la aventura');
    }
}else{
    console.log('No tienes energia suficiente para continuar la aventura');
}       

console.log('Condicional If con operador lógico');
let energia3= 50;
let conbustible3= 50;
if(energia3>0 && conbustible3>0){
    console.log('Tienes energia y combustible suficiente para continuar la aventura');
}else{
    console.log('No tienes energia o combustible suficiente para continuar la aventura');
}   

console.log('Control d viajes interdimensionales');
let conbustible4= 400;
let energia4= 50;
let rick_disponible="si";
let summer_disponible="no";
let nave_averiada="no";

if(conbustible4<50 &&
    energia4<50 &&
    (rick_disponible==="si" ||
    summer_disponible==="si" &&
    nave_averiada==="si"))
    {
        console.log('Viaje autorizado');
    } else{
        if(conbustible4<50){
            console.log('No puedes viajar a otra dimensión, no hay suficiente combustible');
        }
        if(energia4<50){
            console.log('No puedes viajar a otra dimensión, no hay suficiente energía');
        }
        if(rick_disponible==="no" ){
            console.log('No puedes viajar a otra dimension, Rick no esta disponible');
        }
        if(summer_disponible==="no" ){
            console.log('No puedes viajar a otra dimension, Summer no esta disponible');
        }
        if(nave_averiada==="si" ){
            console.log('No puedes viajar a otra dimension, la nave esta averiada');
        }
    }