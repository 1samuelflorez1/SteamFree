const loginForm = document.getElementById('login')

function ingresarUsuario(e){
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    const existeUsuario = usuarios.find((usuario) => usuario.email === email) //esto busca si en este caso, el email ya existe

    if(!existeUsuario){
        alert("El usuario o contraseñas son incorrectos")
        loginForm.reset()
        return
    }

    if(existeUsuario.password !== password){
        alert("La contraseña es incorrecta")
        loginForm.reset()
        return
    }
    const usuarioLogueado = {
        nombreCompleto: existeUsuario.name+" "+existeUsuario.lastName,
        email: existeUsuario.email
    }
    localStorage.setItem('logueado', JSON.stringify(usuarioLogueado))
    window.location.href = 'main.html'


}


loginForm.addEventListener('submit', ingresarUsuario)

