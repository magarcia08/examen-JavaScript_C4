class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>FakeStore</h1>
        <nav>
          <a href="index.html">Inicio</a>
          <a href="catalogo.html">Catálogo</a>
          <a href="nosotros.html">Nosotros</a>

          <a href="carrito.html">
            🛒 Carrito (<span id="contador-carrito">0</span>)
          </a>

          <a href="contacto.html">Contacto</a>
          <a href="login.html">Login</a>
          <a href="historial.html">Historial</a>

        </nav>
      </header>
    `;

    // Actualizar contador apenas se carga el navbar
    actualizarContadorNavbar();
  }
}

// ===============================
// Actualizar contador del carrito
// ===============================
function actualizarContadorNavbar() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let total = carrito.reduce((sum, p) => sum + p.cantidad, 0);

  let contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = total;
  }
}

// Escuchar cambios (cuando se agrega producto)
window.addEventListener("storage", actualizarContadorNavbar);

// Registrar componente
customElements.define("site-navbar", SiteNavbar);
