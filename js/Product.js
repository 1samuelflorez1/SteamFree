// product.js

document.addEventListener("DOMContentLoaded", () => {
  const juego = JSON.parse(localStorage.getItem("juegoSeleccionado"))

  if (!juego) {
    window.location.href = "catalog.html"
    return;
  }

  document.title = juego.nombre

  const title = document.querySelector(".game-info h1")
  if (title) title.textContent = juego.title

  const thumbnail = document.querySelector(".thumbnail img")
  if (thumbnail) {
    thumbnail.src = juego.thumbnail
    thumbnail.alt = juego.title
  }
  const short_description = document.querySelector(".thumbnail .short_description")
  if (short_description) short_description.textContent = juego.short_description

  const titulo_web = document.querySelector(".titulo_web")
  if (titulo_web) titulo_web.textContent = juego.titulo_web

const playButton = document.querySelector(".play-btn")
if (playButton && juego.link && juego.link !== "#") {
  playButton.addEventListener("click", () => {
    window.open(juego.link, "_blank"); // Abre el juego en una nueva pestaña
  })
}

const detailsContainer = document.querySelector(".details")
if (detailsContainer) {
  detailsContainer.innerHTML = 
    `<p><strong>Developer</strong> ${juego.developer}</p>
    <p><strong>Platform</strong> ${juego.platform}</p>
    <p><strong>Genre</strong> ${juego.genre}</p>
    <p><strong>Release Date</strong> ${juego.release_date}</p>`
  
}
})