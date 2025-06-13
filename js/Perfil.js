
document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('logueado'))

// si no encuentra una sesion activa lo mandara a la pagina de login-------------------------------------------------------------------------------------------------------

    if (!usuarioLogueado) {
        alert('No hay sesión activa. Redirigiendo al login...')
        window.location.href = 'Login.html'
        return
    }


    const inputs = document.querySelectorAll('.input-editable')

//Se cargan los datos en los campos del perfil------------------------------------------------------------------------------------------------------- 

    if (inputs.length >= 4) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
        const usuarioCompleto = usuarios.find(usuario => usuario.email === usuarioLogueado.email)

// para luego rellenarlos con la info segun se haya registrado-------------------------------------------------------------------------------------------------------

        if (usuarioCompleto) {
            inputs[0].value = usuarioCompleto.name
            inputs[1].value = usuarioCompleto.lastName
            inputs[2].value = usuarioCompleto.email
            inputs[3].value = usuarioCompleto.password
        }
    }
})


//Boton de cierre de sesionnnnnnnn-------------------------------------------------------------------------------------------------------

const botonLogout = document.querySelector('.boton2') // Detecta el botón "Log Out"

if (botonLogout) {
    botonLogout.addEventListener('click', (e) => {
        e.preventDefault()

//se elimina la sesion que esta activa

        localStorage.removeItem('logueado')
        window.location.href = 'Login.html'
    })
}



//Mostrar los favvvs del usuariooooooooooo-------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem('logueado'))

  if (!usuarioLogueado) {
    alert('No hay sesión activa. Redirigiendo al login...')
    window.location.href = 'Login.html'
    return
  }

  //Se obtiene el array de los usuarios y se encuentra el que tiene la sesion activa------------------------------------------------------------------------------------------------------- 

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
  const indexUsuario = usuarios.findIndex(u => u.email === usuarioLogueado.email)
  if (indexUsuario === -1) return

  const usuario = usuarios[indexUsuario]
  const contenedor = document.querySelector(".images")
  contenedor.innerHTML = ""

  const favoritos = [...(usuario.favoritos || [])] 


  //Por cada juego fav se genera una card/div------------------------------------------------------------------------------------------------------- 

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

// Al hacer clic en la imagen se dirige al detalle del juego------------------------------------------------------------------------------------------------------- 

    juegoDiv.querySelector("img").addEventListener("click", () => {
      localStorage.setItem("juegoSeleccionado", JSON.stringify(fav))
      window.location.href = "product.html"
    })

// Se crea un boton para quitar los favs , al hacer click en este se eliminara------------------------------------------------------------------------------------------------------- 

    juegoDiv.querySelector(".quitar-fav").addEventListener("click", () => {
      

//Se actualiza la lista del usuario en local quitando el juego-------------------------------------------------------------------------------------------------------

      usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
      const userIndex = usuarios.findIndex(u => u.email === usuarioLogueado.email)
      if (userIndex === -1) return


      usuarios[userIndex].favoritos = usuarios[userIndex].favoritos.filter(juego => juego.id !== fav.id)


      localStorage.setItem('usuarios', JSON.stringify(usuarios))

//Se quits del DOM visualmente-------------------------------------------------------------------------------------------------------

      juegoDiv.remove()
    })

    contenedor.appendChild(juegoDiv)
  })
})


//Cambiar contraseñaaaaaaaaaaaa-------------------------------------------------------------------------------------------------------
//Esto se ejecutara cuando el usuario haga click en el boton de guardar cambios-------------------------------------------------------------------------------------------------------

document.getElementById("guardarCambios").addEventListener("click", () => {
  const passwordInput = document.getElementById("password-input")
  const nuevaPassword = passwordInput.value.trim()

//Se obtiene al usuario actualmente logueado desde local------------------------------------------------------------------------------------------------------- 

  const usuarioLogueado = JSON.parse(localStorage.getItem('logueado'))
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

//Se obtienen los usuarios registrados-------------------------------------------------------------------------------------------------------  

  const indexUsuario = usuarios.findIndex(u => u.email === usuarioLogueado.email)
  if (indexUsuario === -1) return

//Se valida que la nueva contra no este vacia------------------------------------------------------------------------------------------------------- 

  if (nuevaPassword === "") {
    alert("La contraseña no puede estar vacía.")
    return
  }

// Si todo good, se actualiza la contra del usuario------------------------------------------------------------------------------------------------------- 

  usuarios[indexUsuario].password = nuevaPassword

//Se guarda lalista de usuarios actualizada en el local------------------------------------------------------------------------------------------------------- 

  localStorage.setItem("usuarios", JSON.stringify(usuarios))
  alert("Contraseña actualizada con éxito.")
})



// Mostrar/ocultar contraseñaaaaaaaaaaaaaaaaa-------------------------------------------------------------------------------------------------------
//

const togglePassword = document.getElementById("toggle-password")
const passwordInput = document.getElementById("password-input")

let isPasswordVisible = false

togglePassword.addEventListener("click", () => {
  isPasswordVisible = !isPasswordVisible  // Cambia el estado

  if (isPasswordVisible) {
  passwordInput.type = "password"
} else {
  passwordInput.type = "text"
}

  togglePassword.classList.toggle("bx-show-alt", isPasswordVisible)
  togglePassword.classList.toggle("bx-hide", !isPasswordVisible)
})