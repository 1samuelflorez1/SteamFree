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

//Boton añadir favvvv desde el detalle del juegoooooooo-------------------------------------------------------------------------------------------------------



document.addEventListener("DOMContentLoaded", () => {
  const favButton = document.querySelector(".fav-btn")


// Si no se encuentra el botón en la página, salimos-------------------------------------------------------------------------------------------------------


  if (!favButton) return


// Esto es cuando el usuario hace clic en el boton de añadir fav----------------------------------------------------------------------------------------------------- 

  favButton.addEventListener("click", () => {

//Se obtiene el el juego actualmente seleccionado que previamente fue guardado en el local-----------------------------------------------------------------------------------------------------

    const juego = JSON.parse(localStorage.getItem("juegoSeleccionado"))
    if (!juego) return

// se obtiene la info del usuario que ha iniciado sesión-----------------------------------------------------------------------------------------------------

    const usuarioLogueado = JSON.parse(localStorage.getItem("logueado"))
    if (!usuarioLogueado) {
      alert("Debes iniciar sesión para añadir a favoritos.")
      window.location.href = "Login.html"
      return
    }

// Obtener todos los usuarios del local-----------------------------------------------------------------------------------------------------
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const indexUsuario = usuarios.findIndex(u => u.email === usuarioLogueado.email)
    if (indexUsuario === -1) return

    const usuario = usuarios[indexUsuario]

// Verificar si ya está en favvv del usuario----------------------------------------------------------------------------------------------------- 

    const yaExiste = (usuario.favoritos || []).some(f => f.id === juego.id)
    if (yaExiste) {
      alert("Este juego ya está en tus favoritos.")
      return
    }

// Si no tiene favvv aun se incia el array----------------------------------------------------------------------------------------------------- 

    if (!usuario.favoritos) {
      usuario.favoritos = []
    }

//Se añade el juego a la lista de favs del usuario----------------------------------------------------------------------------------------------------- 

    usuario.favoritos.push(juego)

//se guardan los cambios actualizados en el local----------------------------------------------------------------------------------------------------- 

    usuarios[indexUsuario] = usuario
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    alert("Juego añadido a favoritos.")
  })
})