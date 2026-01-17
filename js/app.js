
// URL API

const url = "https://fakestoreapi.com/products";


// VARIABLES GLOBALES

let productos = [];
let productosFiltrados = [];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



let paginaActual = 1;
const productosPorPagina = 6;


async function obtenerProductos() {
  try {
    const respuesta = await fetch(url);
    productos = await respuesta.json();

    productosFiltrados = [...productos];
    cargarCategorias();
    mostrarProductosPaginados();
    actualizarContadorCarrito();
  } catch (error) {
    console.error("Error al cargar productos", error);
  }
}


function mostrarProductosPaginados() {
  const contenedor = document.getElementById("lista-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;

  const paginaProductos = productosFiltrados.slice(inicio, fin);


  if paginaAnterior.inderex
  paginaProductos.forEach(producto => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${producto.image}">
        <h4>${producto.title}</h4>
        <p>$${producto.price}</p>
        <button class="btn" onclick="agregarCarrito(${producto.id})">
          Agregar al carrito
        </button>
      </div>
    `;
  });

  actualizarBotonesPaginacion();
}


// BOTONES PAGINA

function actualizarBotonesPaginacion() {
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");
  const textoPagina = document.getElementById("pagina-actual");

  if (!btnAnterior || !btnSiguiente || !textoPagina) return;

  btnAnterior.disabled = paginaActual === 1;
  btnSiguiente.disabled = paginaActual === totalPaginas;

  textoPagina.innerText = `Página ${paginaActual} de ${totalPaginas}`;
}

function paginaSiguiente() {
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarProductosPaginados();
  }
}

function paginaAnterior() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductosPaginados();
  }
}

// ctageoria

function cargarCategorias() {
  const select = document.getElementById("categoria");
  if (!select) return;

  select.innerHTML = `<option value="all">Todas</option>`;

  const categorias = [...new Set(productos.map(p => p.category))];
  categorias.forEach(cat => {
    select.innerHTML += `<option value="${cat}">${cat}</option>`;
  });
}


// FILTROS

const buscar = document.getElementById("buscar");
if (buscar) {
  buscar.addEventListener("input", () => {
    const texto = buscar.value.toLowerCase();

    productosFiltrados = productos.filter(p =>
      p.title.toLowerCase().includes(texto)
    );

    paginaActual = 1;
    mostrarProductosPaginados();
  });
}

const categoria = document.getElementById("categoria");
if (categoria) {
  categoria.addEventListener("change", () => {
    if (categoria.value === "all") {
      productosFiltrados = [...productos];
    } else {
      productosFiltrados = productos.filter(
        p => p.category === categoria.value
      );
    }

    paginaActual = 1;
    mostrarProductosPaginados();
  });
}


// carrito 

function agregarCarrito(id) {
  const producto = productos.find(p => p.id === id);
  const existe = carrito.find(p => p.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  alert("Producto agregado al carrito");
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (!contador) return;

  const total = carrito.reduce((sum, p) => sum + p.cantidad, 0);
  contador.innerText = total;
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-lista");
  const totalTexto = document.getElementById("total");
  if (!contenedor || !totalTexto) return;

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((p, index) => {
    total += p.price * p.cantidad;

    contenedor.innerHTML += `
      <div class="carrito-item">
        <img src="${p.image}">
        <div>
          <h4>${p.title}</h4>
          <p>$${p.price}</p>
        </div>
        <div>
          <button onclick="restarCantidad(${index})">−</button>
          <span>${p.cantidad}</span>
          <button onclick="sumarCantidad(${index})">+</button>
        </div>
      </div>
    `;
  });

  totalTexto.innerText = "Total: $" + total.toFixed(2);
}

function sumarCantidad(index) {
  carrito[index].cantidad++;
  guardarCarrito();
}

function restarCantidad(index) {
  carrito[index].cantidad--;
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }
  guardarCarrito();
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContadorCarrito();
}

// inicializando
obtenerProductos();
mostrarCarrito();
