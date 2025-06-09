//Detalle juego---------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const juego = JSON.parse(localStorage.getItem("juegoSeleccionado"))

  if (!juego) {
    window.location.href = "catalog.html"
    return;
  }

//Pestaña de la web---------------------------------------------------------------------------------------------------
  document.title = juego.nombre
  
//Nombre del juego---------------------------------------------------------------------------------------------------
  const title = document.querySelector(".game-info h1")
  if (title) title.textContent = juego.title

//Imagen del juego---------------------------------------------------------------------------------------------------
  const thumbnail = document.querySelector(".thumbnail img")
  if (thumbnail) {
    thumbnail.src = juego.thumbnail
    thumbnail.alt = juego.title
  }
//Descripcion del juego---------------------------------------------------------------------------------------------------
  const short_description = document.querySelector(".thumbnail .short_description")
  if (short_description) short_description.textContent = juego.short_description

//Nombre del juego---------------------------------------------------------------------------------------------------
  const titulo_web = document.querySelector(".titulo_web")
  if (titulo_web) titulo_web.textContent = juego.titulo_web

 //Link del boton---------------------------------------------------------------------------------------------------
const playButton = document.querySelector(".play-btn")
if (playButton && juego.game_url && juego.game_url !== "#") {
  playButton.addEventListener("click", () => {
    window.open(juego.game_url, "_blank")
  })
}

//Detalles del juego abajo de los botones---------------------------------------------------------------------------------------------------
const detailsContainer = document.querySelector(".details")
if (detailsContainer) {
  detailsContainer.innerHTML = 
    `<p><strong>Developer</strong> ${juego.developer}</p>
    <p><strong>Platform</strong> ${juego.platform}</p>
    <p><strong>Genre</strong> ${juego.genre}</p>
    <p><strong>Release Date</strong> ${juego.release_date}</p>`
  
}
})