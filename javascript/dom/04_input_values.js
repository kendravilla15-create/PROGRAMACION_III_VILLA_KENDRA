const cristales = document.getElementById("cristales");
const potencia = document.getElementById("potencia");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
calcular.addEventListener("click", function(){
    if(cristales.value.trim()===""
    || potencia.value.trim() ==""){
        resultado.texContent = "Compelta ambos campos";
        return;
    }
    const cantidad = Number(cristales.value);
    const potenciaNumber = Number(potencia.value);
    if(!Number.isFinite(cantidad) ||
        !Number.isFinite(potencia.Number)){
            resultado.textContent="Ingrese valores válidos";
            return;
        }
    const total = cantidad * potenciaNumber;
    resultado.textContent="Energía total: "+ total;
});