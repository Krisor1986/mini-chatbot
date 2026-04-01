const chat = document.getElementById("chat");
const inputMensaje = document.getElementById("inputMensaje");
const botonEnviar = document.getElementById("botonEnviar");

let mensajes = [
  { tipo: "bot", texto: "Hola, soy el bot 👋" }
];

function render() {
  const html = mensajes
    .map(
      (m) => `
        <div class="mensaje ${m.tipo}">
          ${m.texto}
        </div>
      `
    )
    .join("");

  chat.innerHTML = html;
  chat.scrollTop = chat.scrollHeight;
}

function responderBot(textoUsuario) {
  const texto = textoUsuario.toLowerCase();

  if (texto.includes("hola")) {
    return [
      "Hola 😊",
      "¡Hola! ¿Cómo estás?",
      "Buenas, ¿en qué te ayudo?",
      "Hola Carlos, qué bueno verte por aquí."
    ];
  }

  if (texto.includes("como estas") || texto.includes("cómo estás")) {
    return [
      "Estoy muy bien, gracias.",
      "Todo bien por aquí 🤖",
      "Muy bien, listo para ayudarte.",
      "Estoy genial. ¿Y tú?"
    ];
  }

  if (
    texto.includes("tu nombre") ||
    texto.includes("cómo te llamas") ||
    texto.includes("como te llamas") ||
    texto.includes("nombre")
  ) {
    return [
      "Me llamo ChatBot JS 🤖",
      "Soy un chatbot simple hecho con JavaScript.",
      "Puedes llamarme Bot.",
      "Soy tu asistente virtual de prueba."
    ];
  }

  if (texto.includes("gracias")) {
    return [
      "De nada.",
      "Un placer ayudarte.",
      "Para eso estoy.",
      "No hay de qué 😊"
    ];
  }

  if (
    texto.includes("adios") ||
    texto.includes("adiós") ||
    texto.includes("bye") ||
    texto.includes("hasta luego")
  ) {
    return [
      "Hasta luego 👋",
      "Adiós, que tengas buen día.",
      "Nos vemos pronto.",
      "Cuídate mucho."
    ];
  }

  if (texto.includes("ayuda")) {
    return [
      "Claro, dime qué necesitas.",
      "Estoy aquí para ayudarte.",
      "Cuéntame qué problema tienes.",
      "Intentaré ayudarte con gusto."
    ];
  }

  if (texto.includes("color favorito")) {
    return [
      "Me gusta el azul.",
      "Diría que el rojo también me queda bien 😄",
      "Creo que hoy elijo el azul."
    ];
  }

  if (texto.includes("comida")) {
    return [
      "No como, pero me hablan mucho de pizza 🍕",
      "Creo que elegiría sushi.",
      "La pizza suena como una gran opción."
    ];
  }

  if (texto.includes("programacion") || texto.includes("programación")) {
    return [
      "Me gusta JavaScript, claro 😄",
      "La programación es muy útil.",
      "Programar es resolver problemas paso a paso."
    ];
  }

  if (texto.includes("javascript")) {
    return [
      "JavaScript sirve para dar interactividad a una web.",
      "Con JavaScript puedes manipular el DOM.",
      "JavaScript es clave para hacer apps dinámicas."
    ];
  }

  if (texto.includes("html")) {
    return [
      "HTML crea la estructura de la página.",
      "HTML define el contenido.",
      "Sin HTML no tendrías la base de la web."
    ];
  }

  if (texto.includes("css")) {
    return [
      "CSS se encarga del estilo.",
      "CSS sirve para cambiar colores, tamaños y layout.",
      "Con CSS puedes hacer que una app se vea mucho mejor."
    ];
  }

  if (texto.includes("quien eres") || texto.includes("quién eres")) {
    return [
      "Soy un chatbot muy sencillo.",
      "Soy una pequeña app hecha con HTML, CSS y JavaScript.",
      "Soy un bot de práctica para clase."
    ];
  }

  if (texto.includes("que puedes hacer") || texto.includes("qué puedes hacer")) {
    return [
      "Puedo responder preguntas simples.",
      "Puedo simular una conversación básica.",
      "Por ahora solo tengo respuestas predefinidas."
    ];
  }

  if (texto.includes("edad")) {
    return [
      "No tengo edad como los humanos 😄",
      "Soy bastante joven, me acaban de programar.",
      "Digamos que nací hoy en clase."
    ];
  }

  if (texto.includes("donde vives") || texto.includes("dónde vives")) {
    return [
      "Vivo dentro del navegador.",
      "Vivo en tu proyecto de JavaScript.",
      "Mi casa está en el DOM 😄"
    ];
  }

  if (texto.includes("clase")) {
    return [
      "Parece una clase interesante.",
      "Seguro que estás aprendiendo mucho hoy.",
      "Vamos bien, sigue así."
    ];
  }

  if (texto.includes("profesor")) {
    return [
      "Tu profesor quiere que practiques la lógica.",
      "Seguro que quiere ver si entiendes render y map.",
      "Lo importante es que entiendas lo que haces."
    ];
  }

  if (texto.includes("render")) {
    return [
      "Render sirve para pintar la información en pantalla.",
      "Render actualiza la interfaz con los datos actuales.",
      "Sin render no verías los mensajes en el chat."
    ];
  }

  if (texto.includes("map")) {
    return [
      "map recorre un array y devuelve uno nuevo.",
      "map se usa aquí para transformar mensajes en HTML.",
      "Con map generamos el contenido del chat."
    ];
  }

  if (texto.includes("join")) {
    return [
      "join une los elementos del array en un solo string.",
      "Usamos join porque innerHTML necesita texto, no un array.",
      "Sin join, el resultado de map no quedaría listo para innerHTML."
    ];
  }

  return [
    "Interesante, cuéntame más.",
    "No entendí del todo, pero sigo aprendiendo 🤖",
    "Vale, ¿puedes explicarlo de otra forma?",
    "Suena bien.",
    "Puedo responder cosas simples por ahora.",
    "Todavía estoy aprendiendo.",
    "No tengo una respuesta exacta para eso, pero podemos seguir hablando."
  ];
}

function obtenerRespuestaAleatoria(listaRespuestas) {
  const indice = Math.floor(Math.random() * listaRespuestas.length);
  return listaRespuestas[indice];
}

function enviarMensaje() {
  const texto = inputMensaje.value.trim();

  if (texto === "") {
    return;
  }

  mensajes.push({
    tipo: "user",
    texto: texto
  });

  inputMensaje.value = "";
  render();

  mensajes.push({
    tipo: "loading",
    texto: "Escribiendo..."
  });

  render();

  setTimeout(() => {
    mensajes.pop();

    const posiblesRespuestas = responderBot(texto);
    const respuestaFinal = obtenerRespuestaAleatoria(posiblesRespuestas);

    mensajes.push({
      tipo: "bot",
      texto: respuestaFinal
    });

    render();
  }, 1000);
}

botonEnviar.addEventListener("click", enviarMensaje);

inputMensaje.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    enviarMensaje();
  }
});

let debounceTimer;

inputMensaje.addEventListener("input", function () {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    console.log("Usuario dejó de escribir");
  }, 400);
});

render();