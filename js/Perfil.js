const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"))

if (!usuario) {
    window.location.href = "Login.html"
}


const info = document.querySelectorAll(".infomas .inicio")
if (info.length >= 4) {
    info[0].textContent = usuario.nombre
    info[1].textContent = usuario.apellido
    info[2].textContent = usuario.email
    info[3].textContent = usuario.password
}


const contenedor = document.querySelector(".images")
contenedor.innerHTML = ""

usuario.favoritos.forEach(fav => {
    const juegoHTML = `
        <div class="juegostodo">
            <div class="imagenes1">
                <img src="${fav.imagen}" alt="${fav.titulo}">
            </div>
            <div class="juego1">
                <h4 class="titulo">${fav.titulo}</h4>
            </div>
        </div>
    `
    contenedor.innerHTML += juegoHTML
})

