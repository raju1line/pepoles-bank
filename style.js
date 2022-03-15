const btnLogin = document.getElementById("login");
btnLogin.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const tansactionArea = document.getElementById("teansaction-area");
  tansactionArea.style.display = "block";
});
const inputDiposit = document.getElementById("add-diposit");
inputDiposit.addEventListener("click", function () {
  let dipositnum = updateValue("diposit-valu-area");
  update("show-diposit", dipositnum);
  update("curent-balance", dipositnum);
  document.getElementById("diposit-valu-area").value = "";
});

const inputWitdraw = document.getElementById("input-withdraw");
inputWitdraw.addEventListener("click", function () {
  let withdrawnum = updateValue("add-withdraw");
  update("show-withdraw", withdrawnum);
  update("curent-balance", -1 * withdrawnum);
  document.getElementById("add-withdraw").value = "";
});

function updateValue(id) {
  const numUpdate = document.getElementById(id).value;
  let Diposit = parseFloat(numUpdate);
  if (Number.isNaN(Diposit)) {
    return 0;
  }
  return Diposit;
}

function update(id, dipositnum) {
  const showDiposit = document.getElementById(id).innerText;
  let showNumber = parseFloat(showDiposit);
  const totalDiposit = showNumber + dipositnum;
  document.getElementById(id).innerText = totalDiposit;
}
