document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    const usuarioBD = usuarios.find(u => u.email === usuario.email);
  
    const contenedor = document.getElementById("historial-lista");
  
    if (!usuarioBD || usuarioBD.historial.length === 0) {
      contenedor.innerHTML = "<p>No tienes compras registradas</p>";
      return;
    }
  
    usuarioBD.historial.forEach(compra => {
  
      let productosHTML = "";
  
      compra.productos.forEach(p => {
        productosHTML += `
          <li>${p.title} x ${p.cantidad} - $${p.price}</li>
        `;
      });
  
      contenedor.innerHTML += `
        <div class="historial-card">
          <h4>🧾 Compra #${compra.id}</h4>
          <p><strong>Fecha:</strong> ${compra.fecha}</p>
          <ul>${productosHTML}</ul>
          <p class="total">Total: $${compra.total.toFixed(2)}</p>
        </div>
      `;
    });
  
  });
  