💻 Programación III
Autor
Nombre: Kendra Villa 

Bienvenido al repositorio de la materia Programación III.
En este espacio se almacenarán prácticas, ejercicios, proyectos y apuntes relacionados con el desarrollo web y la programación.

📚 Temas de la materia
🌐 HTML

HTML (HyperText Markup Language) es el lenguaje utilizado para crear la estructura de una página web.

Con HTML podemos definir elementos como:

Títulos y párrafos.

Imágenes.

Enlaces.

Formularios.

Tablas.

Listas.

Ejemplo:

<h1>Hola Mundo</h1>
<p>Mi primera página web.</p>

🎨 CSS

CSS (Cascading Style Sheets) es el lenguaje utilizado para dar estilo y diseño a las páginas web.

Con CSS podemos modificar:

Colores.

Tamaños.

Tipografías.

Márgenes y espacios.

Posiciones.

Diseño responsive.

Ejemplo:

h1 {
    color: blue;
    text-align: center;
}

⚡ JavaScript

JavaScript es un lenguaje de programación que permite agregar interactividad y lógica a las páginas web.

Con JavaScript podemos:

Manipular elementos HTML.

Responder a eventos.

Crear funciones.

Trabajar con datos.

Realizar peticiones a APIs.

Validar formularios.

Ejemplo:

function saludar() {
    console.log("Hola Mundo");
}

saludar();

⚛️ ReactJS

ReactJS es una biblioteca de JavaScript utilizada para crear interfaces de usuario mediante componentes reutilizables.

Algunos conceptos importantes:

Componentes.

Props.

Estado.

Hooks.

Eventos.

Renderizado dinámico.

Ejemplo:

function Saludo() {
    return <h1>Hola desde React</h1>;
}

export default Saludo;

🚀 NestJS

NestJS es un framework para desarrollar aplicaciones backend con Node.js y TypeScript.

Se utiliza principalmente para crear:

APIs REST.

Servicios backend.

Aplicaciones escalables.

Sistemas conectados a bases de datos.

Autenticación y autorización.

Algunos conceptos importantes:

Módulos.

Controladores.

Servicios.

Inyección de dependencias.

DTOs.

Guards.

APIs REST.

Ejemplo:

import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {

    @Get()
    obtenerUsuarios() {
        return ['Juan', 'María'];
    }
}

🗂️ Estructura del repositorio
Programacion-III/
│
├── html/
│   └── ejercicios/
│
├── css/
│   └── ejercicios/
│
├── javascript/
│   └── ejercicios/
│
├── reactjs/
│   └── proyectos/
│
├── nestjs/
│   └── proyectos/
│
├── .gitignore
└── README.md

🎯 Objetivo de la materia

El objetivo es desarrollar conocimientos y habilidades para construir aplicaciones web modernas, comenzando desde la estructura y estilos de una página web hasta la creación de interfaces con ReactJS y APIs/backend con NestJS.

🛠️ Tecnologías
Tecnología	Uso
HTML	Estructura web
CSS	Diseño y estilos
JavaScript	Lógica e interacción
ReactJS	Interfaces de usuario
NestJS	Backend y APIs
👨‍💻 Autor

Estudiante de Programación III

Repositorio creado con fines académicos para almacenar el aprendizaje, ejercicios y proyectos desarrollados durante la materia.