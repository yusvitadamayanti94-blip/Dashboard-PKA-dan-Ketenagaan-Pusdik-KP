// ========================
// REGISTER
// ========================
function registerUser() {
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (email === "" || password === "") {
    alert("Email dan password wajib diisi");
    return false;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.email === email);
  if (exists) {
    alert("Email sudah terdaftar");
    return false;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Pendaftaran berhasil, silakan login");
  window.location.href = "login.html";
  return false;
}

// ========================
// LOGIN
// ========================
function loginAdmin() {
  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    u => u.email === email && u.password === password
  );

  if (!validUser) {
    alert("Email atau password salah / belum terdaftar");
    return false;
  }

  localStorage.setItem("isLogin", "true");
  localStorage.setItem("loginUser", email);

  window.location.href = "index.html";
  return false;
}

// ========================
// TOGGLE PASSWORD (UMUM)
// ========================
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// ========================
// LOGOUT
// ========================
function logout() {
  localStorage.removeItem("isLogin");
  localStorage.removeItem("loginUser");
  window.location.href = "login.html";
}


