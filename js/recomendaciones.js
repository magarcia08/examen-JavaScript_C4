function mostrarRecomendados() {

    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (!usuario) return;
  
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const userBD = usuarios.find(u => u.email === usuario.email);
  
    if (!userBD || !userBD.historial || userBD.historial.length === 0) {
      console.log("Sin historial");
      return;
    }
  
    const contenedor = document.getElementById("recomendados");
    if (!contenedor) {
      console.log("No existe contenedor recomendados");
      return;
    }
  
    let contador = {};
  
    userBD.historial.forEach(compra => {
      compra.productos.forEach(p => {
        if (!contador[p.id]) {
          contador[p.id] = {
            id: p.id,
            title: p.title,
            price: p.price,
            image: p.image || "img/default.png",
            cantidad: 0
          };
        }
        contador[p.id].cantidad += p.cantidad;
      });
    });
  
    let recomendados = Object.values(contador).slice(0, 4);
  
    contenedor.innerHTML = "";
  
    recomendados.forEach(p => {
      contenedor.innerHTML += `
        <div class="card destacado">
          <img src="${p.image}" alt="${p.title}">
          <h4>${p.title}</h4>
          <p>$${p.price}</p>
          <button onclick="agregarCarrito(${p.id})">
            Comprar de nuevo
          </button>
        </div>
      `;
    });
  }
  