const input = document.getElementById("inputTexto");
const boton = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");

let items = [];

function render() {

  lista.innerHTML = items
    .map(item => `<li>${item}</li>`)
    .join("");

}

boton.addEventListener("click", () => {

  const texto = input.value.trim();

  if(texto === "") return;

  items.push(texto);

  input.value = "";

  render();

});