let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito() {
  let contenedor = document.getElementById("carrito-lista");
  let total = 0;
  contenedor.innerHTML = "";

  carrito.forEach((p, i) => {
    total += p.price * p.cantidad;
    contenedor.innerHTML += `
      <div>
        ${p.title} - $${p.price} x ${p.cantidad}
        <button onclick="sumar(${i})">+</button>
        <button onclick="restar(${i})">-</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total.toFixed(2);
}

function sumar(i) {
  carrito[i].cantidad++;
  guardar();
}

function restar(i) {
  carrito[i].cantidad--;
  if (carrito[i].cantidad <= 0) carrito.splice(i, 1);
  guardar();
}

function guardar() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}
