
const registroForm = document.getElementById('formRegistro')  


// esta es la funcion que se ejecuta cuando el usuario envia el form

function registrarUsuario(e){ //esto sirve para que no se resetee-----------------------------------------------------------------------------------
    e.preventDefault()

    const nombreValor = document.getElementById('name').value  //esta parte es para adquirir cada elemento del form----------------------------------------------
    const apellidoValor = document.getElementById('lastName').value
    const emailValor = document.getElementById('email').value
    const passwordValor = document.getElementById('password').value

// se obtiene la lista de usuarios del local o un array vacio si aun no existe el  usuario-----------------------------------------------------------------------------------

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    const existeUsuario = usuarios.find((usuario) => usuario.email === emailValor) //esto busca si en este caso, el email ya existe------------------------------------------------
  
//se verifica si ya existe este usuario con el mismo correo-----------------------------------------------------------------------------------  

    if(existeUsuario){
        alert("El usuario ya esta registrado")
        registroForm.reset()
        return
    }

 // se crea un nuevo objeto de usuario con los datos dados por el usuario-----------------------------------------------------------------------------------

    const usuario = {
        name: nombreValor,
        lastName: apellidoValor,
        email: emailValor,
        password: passwordValor
    }

    usuarios.push(usuario)  //en esta parte se accede al local con el const de antes y ahi con el push se almacena------------------------------------------------------------------------
    
//se guarda en el arreglo actualizado en el localllll----------------------------------------------------------------------------------- 

    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('Usuario creado exitosamente')

//se muestra una alerta de confirmacion y manda a login----------------------------------------------------------------------------------- 
    window.location.href = 'Login.html'

}

registroForm.addEventListener('submit', registrarUsuario)