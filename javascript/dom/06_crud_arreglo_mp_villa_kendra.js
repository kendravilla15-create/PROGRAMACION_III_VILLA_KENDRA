let socios = [
    {
        id: 1,
        nombre: "Kendra Villa",
        plan: "Premium",
        estado: "Activo"
    },
    {
        id: 2,
        nombre: "Carlos Pérez",
        plan: "Básico",
        estado: "Inactivo"
    },
    {
        id: 3,
        nombre: "Ana Torres",
        plan: "Cardio",
        estado: "Suspendido"
    },
];

const formulario = document.getElementById("formulario");
const tituloFormulario = document.getElementById("tituloFormulario");
const nombre = document.getElementById("nombre");
const plan = document.getElementById("plan");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

let idEditando = null;
let siguienteId = 4;

function mostrarSocios() {
    contenedor.replaceChildren();
    cantidad.textContent = socios.length;

    socios.forEach(function (socio) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = socio.nombre;

        const parrafoPlan = document.createElement("p");
        parrafoPlan.textContent = "Plan: " + socio.plan;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + socio.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function () {
            editarSocio(socio.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function () {
            const confirmarEliminar = confirm(`¿Eliminar a ${socio.nombre}?`);
            if (!confirmarEliminar) return;

            socios = socios.filter(function (s) {
                return s.id !== socio.id;
            });
            if (idEditando === socio.id) {
                limpiarFormulario();
            }
            mostrarSocios();
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoPlan, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

function editarSocio(id) {
    const socio = socios.find(function (s) {
        return s.id === id;
    });
    if (!socio) return;

    nombre.value = socio.nombre;
    plan.value = socio.plan;
    estado.value = socio.estado;
    idEditando = id;
    tituloFormulario.textContent = "Editar Socio";
    guardar.textContent = "Guardar cambios";
    cancelar.hidden = false;
    nombre.focus();
}

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    tituloFormulario.textContent = "Registrar Socio";
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreSocio = nombre.value.trim();
    const planSocio = plan.value;
    const estadoSocio = estado.value;

    if (nombreSocio === "") return;

    if (idEditando === null) {
        const nuevoSocio = {
            id: siguienteId,
            nombre: nombreSocio,
            plan: planSocio,
            estado: estadoSocio,
        };
        siguienteId++;
        socios.push(nuevoSocio);
    } else {
        const socio = socios.find(function (s) {
            return s.id === idEditando;
        });
        if (socio) {
            socio.nombre = nombreSocio;
            socio.plan = planSocio;
            socio.estado = estadoSocio;
        }
    }

    limpiarFormulario();
    mostrarSocios();
});

cancelar.addEventListener("click", function () {
    limpiarFormulario();
});

mostrarSocios();
