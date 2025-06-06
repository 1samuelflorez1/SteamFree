
const registroForm = document.getElementById('formRegistro')  //Esto se hace de primero para selecionar que se va a cambair en el html

function registrarUsuario(e){ //esto nos sirve para que no se resetee
    e.preventDefault()

    const nombreValor = document.getElementById('name').value  //esta parte es para adquirir cada elemento del form
    const apellidoValor = document.getElementById('lastName').value
    const emailValor = document.getElementById('email').value
    const passwordValor = document.getElementById('password').value

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    const existeUsuario = usuarios.find((usuario) => usuario.email === emailValor) //esto busca si en este caso, el email ya existe
    
    if(existeUsuario){
        alert("El usuario ya esta registrado")
        registroForm.reset()
        return
    }
    const usuario = {
        name: nombreValor,
        lastName: apellidoValor,
        email: emailValor,
        password: passwordValor
    }
    usuarios.push(usuario)  //en esta parte accedo al localstorague con el const de antes y ahi con el push se almacena
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('Usuario creado exitosamente')
    window.location.href = 'Login.html'

}

registroForm.addEventListener('submit', registrarUsuario)