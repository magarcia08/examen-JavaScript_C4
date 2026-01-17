document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("login-error");
  
    if (!email || !password) {
      error.textContent = "Completa todos los campos";
      return;
    }
  
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    const usuario = usuarios.find(
      u => u.email === email && u.password === password
    );
  
    if (!usuario) {
      error.textContent = "Correo o contraseña incorrectos";
      return;
    }
  
    localStorage.setItem("sesionActiva", "true");
    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
  
    window.location.href = "catalogo.html";
  });
  