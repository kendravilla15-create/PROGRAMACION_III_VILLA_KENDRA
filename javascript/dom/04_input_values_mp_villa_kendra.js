const minutos = document.getElementById("minutos");
const caloriasMinuto = document.getElementById("caloriasMinuto");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
calcular.addEventListener("click", function(){
    if(minutos.value.trim() === ""
    || caloriasMinuto.value.trim() === ""){
        resultado.textContent = "Completa ambos campos";
        return;
    }
    const cantidadMinutos = Number(minutos.value);
    const caloriasNumber = Number(caloriasMinuto.value);
    if(!Number.isFinite(cantidadMinutos) ||
        !Number.isFinite(caloriasNumber)){
            resultado.textContent = "Ingrese valores válidos";
            return;
        }
    const total = cantidadMinutos * caloriasNumber;
    resultado.textContent = "Calorías quemadas: " + total;
});
