document.getElementById("checkout")?.addEventListener("submit", e => {
    e.preventDefault();
  
    const session = getSession();
    if (!session) {
      alert("Debes iniciar sesión");
      return;
    }
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) return alert("Carrito vacío");
  
    const compra = {
      fecha: new Date().toLocaleString(),
      productos: cart,
      total: cart.reduce((s,p)=>s+p.price*p.qty,0)
    };
  
    if (session.role !== "admin") {
      const users = getUsers();
      const user = users.find(u => u.user === session.user);
      user.compras.push(compra);
      saveUsers(users);
    }
  
    localStorage.removeItem("cart");
    alert("Compra realizada");
    location.href = "index.html";
  });
  