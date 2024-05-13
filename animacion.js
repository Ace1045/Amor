// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "For a while there, it was rough", time: 4 },
  { text: "But lately, i've been doin' better", time: 6 },
  { text: "Than the last four cold decembers i recall", time: 12 },
  { text: "And i see my family every month", time: 17 },
  { text: "I found a girl my parents love", time: 19 },
  { text: "She'll come and stay the night,", time: 23 },
  { text: "And i think i might have it all", time: 25 },
  { text: "And i thank god every day", time: 31 },
  { text: "For the girl he sent my way", time: 33 },
  { text: "But i know the things he gives me, he can take a way", time: 39 },
  { text: "And i hold you every night", time: 45 },
  { text: "And that's a feeling i wanna get used to", time: 47 },
  { text: "But there's no man as terrified", time: 54 },
  { text: "As the man who stands to lose you", time: 57 },
  { text: "Oh, i hope i don't lose you", time: 66 },
  { text: "Please stay", time: 71 },
  { text: "I want you, i need you, oh, god", time: 74 },
  { text: "Don't take", time: 76 },
  { text: "These beautiful things that i've got", time: 81 },
  { text: "Please stay", time: 83 },
  { text: "I want you, i need you, oh, god", time: 88 },
  { text: "Don't take", time: 90 },
  { text: "These beautiful things that i've got", time: 95 },
  { text: "Oh, ooh", time: 97 },
  { text: "Please don't take", time: 105 },
  { text: "I found my mind, i'm feelin' sane", time: 110 },
  { text: "It's been a while, but i'm finding my faith", time: 112 },
  { text: "If everything's good and it's great,", time: 115 },
  { text: "Why do i sit and wait 'til it's gone?", time: 117 },
  { text: "Oh, i'll tell ya, i know i've got enough", time: 123 },
  { text: "I've got peace and i've got love", time: 126 },
  { text: "But i'm up at night thinkin' i just might lose it all", time: 129 },
  { text: "Please stay", time: 139 },
  { text: "I want you, i need you, oh, god", time: 142 },
  { text: "Don't take", time: 145 },
  { text: "These beautiful things that i've got", time: 149 },
  { text: "Oh, ooh", time: 151 },
  { text: "Please stay", time: 160 },
  { text: "I want you, i need you, oh, god", time: 162 },
  { text: "I need", time: 166 },
  { text: "These beautiful things that i've got", time: 170 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);