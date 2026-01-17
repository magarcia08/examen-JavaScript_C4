const usuarioActual = JSON.parse(localStorage.getItem("usuarioActivo"));

function registrarUsuario(nombre, email, password) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.find(u => u.email === email)) {
    alert("Usuario ya existe");
    return;
  }

  usuarios.push({
    nombre,
    email,
    password,
    rol: "user",
    historial: []
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Registro exitoso");
  window.location.href = "login.html";
}

function login(email, password) {
  if (email === "admin123" && password === "admin123") {
    localStorage.setItem("usuarioActivo", JSON.stringify({
      nombre: "Administrador",
      rol: "admin"
    }));
    window.location.href = "index.html";
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let usuario = usuarios.find(u => u.email === email && u.password === password);

  if (!usuario) {
    alert("Credenciales incorrectas");
    return;
  }

  localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
  window.location.href = "index.html";
}

function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  window.location.href = "login.html";
}
