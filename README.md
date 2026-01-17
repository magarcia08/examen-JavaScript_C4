# FakeStore – Aplicación Web de Tienda Virtual Examen

FakeStore es una aplicación web desarrollada con HTML, CSS y JavaScript que simula una tienda virtual básica.
La aplicación consume datos desde la API pública FakeStore para mostrar productos reales y permitir al usuario agregarlos a un carrito de compras.

Este proyecto fue desarrollado como ejercicio académico con el objetivo de poner en práctica conceptos básicos de desarrollo web frontend.

---

## Descripción general

La aplicación permite al usuario navegar por un catálogo de productos, filtrarlos, buscarlos, ordenarlos y agregarlos a un carrito de compras.
El carrito se guarda en el navegador usando localStorage, por lo que la información se mantiene aunque la página se recargue.

El proyecto está organizado en diferentes archivos HTML, CSS y JavaScript para facilitar su comprensión y mantenimiento.

---

## Objetivo del proyecto

Los objetivos principales del proyecto son:

- Aprender a consumir una API REST usando JavaScript
- Renderizar información de forma dinámica en el DOM
- Implementar un carrito de compras funcional
- Usar localStorage para guardar información
- Organizar un proyecto web con buenas prácticas básicas
- Crear una interfaz clara y responsiva

---

## Tecnologías utilizadas

- HTML5 para la estructura del sitio
- CSS3 para el diseño y estilos
- JavaScript para la lógica de la aplicación
- FakeStore API como fuente de datos  
  https://fakestoreapi.com/products

---

## Estructura del proyecto

La estructura del proyecto está organizada de la siguiente forma:

fakestore/
│
├── index.html

├── catalogo.html

├── nosotros.html

├── carrito.html

├── contacto.html
│
├── contacto.html
│
├── css/

│ └── styles.css
│
├── js/

│ ├── app.js

│ └── components/

│ ├── navbar.js

│ └── footer.js
│
├── analisis.md

└── README.md


## Wireframe

![alt text](https://i.ibb.co/PVSDm33/screen.png)


![alt text](https://i.ibb.co/Lh5V8jv9/screen.png)

### Descripción de los archivos

- `index.html`: página principal del proyecto, contiene la presentación de la tienda y secciones informativas.
- `catalogo.html`: muestra los productos obtenidos desde la API y permite filtrarlos y ordenarlos.
- `nosotros.html`: contiene información general sobre el proyecto y su propósito.
- `carrito.html`: muestra los productos agregados al carrito y el total de la compra.
- `contacto.html`: contiene un formulario básico de contacto.

- `css/styles.css`: archivo principal de estilos del proyecto.
- `js/app.js`: contiene la lógica principal de la aplicación, como consumo de la API, manejo del carrito y eventos.
- `js/components/navbar.js`: componente reutilizable para el menú de navegación.
- `js/components/footer.js`: componente reutilizable para el pie de página.
- `analisis.md`: documento con el análisis del diseño, estructura de datos y decisiones del proyecto.
- `README.md`: documento de descripción general del proyecto.

---

## Funcionalidades del sistema

### Consumo de API

La aplicación obtiene los productos desde la FakeStore API utilizando fetch y async/await.
Los datos se cargan de forma dinámica cuando el usuario entra al catálogo.

---

### Catálogo de productos

El catálogo permite:

- Visualizar los productos en tarjetas
- Buscar productos por nombre
- Filtrar productos por categoría
- Ordenar productos por precio

Cada producto cuenta con un botón para agregarlo al carrito de compras.

---

### Carrito de compras

El carrito de compras permite:

- Agregar productos desde el catálogo
- Eliminar productos del carrito
- Mostrar el total de la compra
- Vaciar el carrito completo
- Guardar los datos en localStorage
- Mantener la información al recargar la página

---

### Eventos implementados

- Evento `click` para agregar y eliminar productos
- Evento `input` para la búsqueda de productos
- Evento `change` para filtros y ordenamientos

---

### Persistencia con localStorage

El carrito se guarda en localStorage cada vez que se agrega o elimina un producto.
Cuando la página se recarga, el carrito se recupera automáticamente.

---

### Componentes reutilizables

El navbar y el footer fueron creados como Web Components para reutilizar el mismo código en todas las páginas.
Esto ayuda a mantener el proyecto más organizado y evita repetir código.

---

### Diseño responsivo

El diseño del proyecto se adapta a diferentes tamaños de pantalla como computador, tablet y celular.
Se usaron técnicas básicas de diseño responsivo como Flexbox y Grid.

---

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio
2. Abrir el archivo `index.html` en cualquier navegador web
3. Navegar entre las páginas usando el menú
4. Probar las funcionalidades del catálogo y el carrito

No es necesario instalar dependencias ni utilizar servidor.

---

## Capturas de pantalla

En esta sección se pueden agregar capturas del proyecto, como:

- Página de inicio
- Catálogo de productos
- Carrito de compras

---

## Aprendizajes obtenidos

Durante el desarrollo de este proyecto se aprendió:

- Cómo consumir una API REST
- Cómo manipular el DOM con JavaScript
- Cómo usar eventos para interactuar con el usuario
- Cómo guardar información en localStorage
- Cómo organizar un proyecto web básico

---

## Autora

María Alejandra G.  
Proyecto académico de desarrollo web  
Año 2025

---

## Licencia

Este proyecto fue desarrollado únicamente con fines educativos.

