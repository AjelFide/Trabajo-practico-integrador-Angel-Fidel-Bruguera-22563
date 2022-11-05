const TICKET = 200;
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoria");
const totalPago = document.querySelector("#totalPago");

const btnBorrar = document.querySelector("#btnBorrar");
const btnResumen = document.querySelector("#btnResumen");

btnBorrar.addEventListener("click", borrar);
btnResumen.addEventListener("click", mostrarTotal);

function borrar() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  cantidad.value = "";
  totalPago.textContent = "";
}

function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 1;
    case "1":
      return 0.8;
    case "2":
      return 0.5;
    case "3":
      return 0.15;
    default:
      return false;
  }
}

function calcularTotal() {
  let total = 0;
  total = parseInt(cantidad.value) * (TICKET - (calcularDescuento() * TICKET));
  return total;
}

function mostrarTotal() {
  totalPago.textContent = calcularTotal();
}