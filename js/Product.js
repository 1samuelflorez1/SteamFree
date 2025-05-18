// product.js

document.addEventListener("DOMContentLoaded", () => {
  const juego = JSON.parse(localStorage.getItem("juegoSeleccionado"));

  if (!juego) {
    // Si no hay juego en localStorage, redirige a catalog.html
    window.location.href = "catalog.html";
    return;
  }

  // Título del documento
  document.title = juego.nombre;

  // Título principal
  const title = document.querySelector(".game-info h1");
  if (title) title.textContent = juego.title;

  // Imagen del juego
  const thumbnail = document.querySelector(".thumbnail img");
  if (thumbnail) {
    thumbnail.src = juego.thumbnail;
    thumbnail.alt = juego.title;
  }
  // Descripción del juego
  const short_description = document.querySelector(".thumbnail .short_description");
  if (short_description) short_description.textContent = juego.short_description;

  // (Opcional) Redirigir botón “Play Now” si hay enlace externo
  const playButton = document.querySelector(".play-btn");
  if (playButton && juego.enlace && juego.enlace !== "#") {
    playButton.parentElement.href = juego.enlace;
  } else {
    playButton.parentElement.style.display = "none"; // Oculta el botón si no hay enlace
  }

const detailsContainer = document.querySelector(".details");
if (detailsContainer) {
  detailsContainer.innerHTML = 
    `<p><strong>Developer</strong> ${juego.developer}</p>
    <p><strong>Platform</strong> ${juego.platform}</p>
    <p><strong>Genre</strong> ${juego.genre}</p>
    <p><strong>Release Date</strong> ${juego.release_date}</p>`
  ;
}
});