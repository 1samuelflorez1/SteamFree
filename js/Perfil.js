
document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('logueado'))

    if (!usuarioLogueado) {
        alert('No hay sesión activa. Redirigiendo al login...')
        window.location.href = 'Login.html'
        return
    }

    // Selecciona los inputs en orden: nombre, apellido, email, password
    const inputs = document.querySelectorAll('.input-editable')

    // Cargamos los datos en los campos del perfil
    if (inputs.length >= 4) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
        const usuarioCompleto = usuarios.find(usuario => usuario.email === usuarioLogueado.email)

        if (usuarioCompleto) {
            inputs[0].value = usuarioCompleto.name
            inputs[1].value = usuarioCompleto.lastName
            inputs[2].value = usuarioCompleto.email
            inputs[3].value = usuarioCompleto.password
        }
    }
})

const botonLogout = document.querySelector('.boton2') // Detecta el botón "Log Out"

if (botonLogout) {
    botonLogout.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.removeItem('logueado')
        window.location.href = 'Login.html'
    })
}



document.addEventListener('DOMContentLoaded', () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem('logueado'))

  if (!usuarioLogueado) {
    alert('No hay sesión activa. Redirigiendo al login...')
    window.location.href = 'Login.html'
    return
  }

  // Obtener los usuarios actualizados y encontrar al usuario actual
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
  const indexUsuario = usuarios.findIndex(u => u.email === usuarioLogueado.email)
  if (indexUsuario === -1) return

  const usuario = usuarios[indexUsuario]
  const contenedor = document.querySelector(".images")
  contenedor.innerHTML = ""

  const favoritos = [...(usuario.favoritos || [])] // Copia segura

  favoritos.forEach((fav) => {
    const juegoDiv = document.createElement("div")
    juegoDiv.classList.add("juegostodo")

    juegoDiv.innerHTML = `
      <div class="juegosfav">
        <div class="imagenes1">
          <img src="${fav.thumbnail}" alt="${fav.title}">
        </div>
        <h4 class="titulofav">${fav.title}</h4>
        <button class="quitar-fav">Quitar de favoritos</button>
      </div>
    `

    // Redirigir al producto al hacer clic en la imagen
    juegoDiv.querySelector("img").addEventListener("click", () => {
      localStorage.setItem("juegoSeleccionado", JSON.stringify(fav))
      window.location.href = "product.html"
    })

    // Botón para quitar de favoritos
    juegoDiv.querySelector(".quitar-fav").addEventListener("click", (e) => {
      e.stopPropagation()

      // Volver a cargar los usuarios del localStorage por si hubo cambios
      usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
      const userIndex = usuarios.findIndex(u => u.email === usuarioLogueado.email)
      if (userIndex === -1) return

      // Filtrar el juego a eliminar
      usuarios[userIndex].favoritos = usuarios[userIndex].favoritos.filter(j => j.id !== fav.id)

      // Guardar en localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuarios))

      // Quitar del DOM
      juegoDiv.remove()
    })

    contenedor.appendChild(juegoDiv)
  })
})

