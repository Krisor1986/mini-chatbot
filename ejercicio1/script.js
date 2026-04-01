let mensajes = [];

const input = document.getElementById("mensajeInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaMensajes");

function render() {
  lista.innerHTML = "";

  for (let i = 0; i < mensajes.length; i++) {
    lista.innerHTML += `
      <div class="mensaje">
        ${mensajes[i]}
        <button onclick="removeMensaje(${i})">Eliminar</button>
      </div>
    `;
  }
}

function agregarMensaje() {
  const nuevoMensaje = input.value.trim();

  if (nuevoMensaje === "") {
    return;
  }

  mensajes.push(nuevoMensaje);
  input.value = "";
  render();
}

function removeMensaje(index) {
  mensajes.splice(index, 1);
  render();
}

boton.addEventListener("click", agregarMensaje);