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


document.addEventListener("DOMContentLoaded", () => {
  const favButton = document.querySelector(".fav-btn")

  if (!favButton) return

  favButton.addEventListener("click", () => {
    const juego = JSON.parse(localStorage.getItem("juegoSeleccionado"))
    if (!juego) return

    const usuarioLogueado = JSON.parse(localStorage.getItem("logueado"))
    if (!usuarioLogueado) {
      alert("Debes iniciar sesión para añadir a favoritos.")
      window.location.href = "Login.html"
      return
    }

    // Obtener todos los usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const indexUsuario = usuarios.findIndex(u => u.email === usuarioLogueado.email)
    if (indexUsuario === -1) return

    const usuario = usuarios[indexUsuario]

    // Verificar si ya está en favoritos
    const yaExiste = (usuario.favoritos || []).some(f => f.id === juego.id)
    if (yaExiste) {
      alert("Este juego ya está en tus favoritos.")
      return
    }

    // Si no tiene favoritos aún, inicializamos el array
    if (!usuario.favoritos) {
      usuario.favoritos = []
    }

    // Agregar el juego
    usuario.favoritos.push(juego)

    // Guardar cambios
    usuarios[indexUsuario] = usuario
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    alert("Juego añadido a favoritos.")
  })
})