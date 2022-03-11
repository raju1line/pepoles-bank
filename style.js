const btnLogin = document.getElementById("login");
btnLogin.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const tansactionArea = document.getElementById("teansaction-area");
  tansactionArea.style.display = "block";
});
