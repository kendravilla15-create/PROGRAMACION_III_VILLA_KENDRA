const ejercicio = document.getElementById("ejercicio");
const cambiar = document.getElementById("cambiar");
const verMusculo = document.getElementById("verMusculo");
const musculo = document.getElementById("musculo");

cambiar.addEventListener("click", function(){
    if(ejercicio.getAttribute("title") == "Sentadilla"){
        ejercicio.setAttribute("src", "abdominales.jpg");
        ejercicio.setAttribute("alt", "Abdominales");
        ejercicio.setAttribute("title", "Abdominales");
        ejercicio.dataset.musculo = "Abdomen";
    }else{
        ejercicio.setAttribute("src", "sentadilla.jpg");
        ejercicio.setAttribute("alt", "Sentadilla");
        ejercicio.setAttribute("title", "Sentadilla");
        ejercicio.dataset.musculo = "Piernas";
    }
});

verMusculo.addEventListener("click", function(){
    musculo.textContent = "Músculo: " + ejercicio.dataset.musculo;
});
