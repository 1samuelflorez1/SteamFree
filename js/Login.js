const loginForm = document.getElementById('login')

// Esta es la funcion que se ejecuta al enviar el formulario-------------------------------------------------------------------------------------------------

function ingresarUsuario(e){
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

// Si no hay ningun usuario se usa un array vacio por defecto-------------------------------------------------------------------------------------------------------

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    const existeUsuario = usuarios.find((usuario) => usuario.email === email) //esto es para buscar si el email ya existiera---------------------------------


 // Si no se encontro el usuario se muestra alerta de error y se reinicia el form -----------------------------------------------------------------------------------

    if(!existeUsuario){
        alert("El usuario o contraseñas son incorrectos")
        loginForm.reset()
        return
    }

 // Si el usuario existe pero la contraseña no coincide se muuestra errorrrrr-----------------------------------------------------------------------------------

    if(existeUsuario.password !== password){
        alert("La contraseña es incorrecta")
        loginForm.reset()
        return
    }

 // Si todo esta good, se crea un objeto con la infor basica del usuario-------------------------------------------------------------------------------------------------------

    const usuarioLogueado = {
        nombreCompleto: existeUsuario.name+" "+existeUsuario.lastName,
        email: existeUsuario.email
    }

// Se guarda al usuario logueado en local para usarlo en las demas paginas (perfil) -----------------------------------------------------------------------------------

    localStorage.setItem('logueado', JSON.stringify(usuarioLogueado))
    window.location.href = 'main.html'

}


loginForm.addEventListener('submit', ingresarUsuario)

