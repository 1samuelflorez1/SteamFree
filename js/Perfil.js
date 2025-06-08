









// //Perfil de usuario---------------------------------------------------------------------------------------------------
// const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"))

// if (!usuario) {
//     window.location.href = "Login.html"
// }


// const info = document.querySelectorAll(".infomas .inicio")
// if (info.length >= 4) {
//     info[0].textContent = usuario.nombre
//     info[1].textContent = usuario.apellido
//     info[2].textContent = usuario.email
//     info[3].textContent = usuario.password
// }

// const contenedor = document.querySelector(".images")
// contenedor.innerHTML = ""

// //Favoritos usuario---------------------------------------------------------------------------------------------------
// usuario.favoritos.forEach(fav => {
//     const juegoDiv = document.createElement("div")
//     juegoDiv.classList.add("juegostodo")

//     juegoDiv.innerHTML = `
//         <div class="imagenes1">
//             <img src="${fav.thumbnail}" alt="${fav.title}">
//         </div>
//         <div class="juego1">
//             <h4 class="titulo">${fav.title}</h4>
//         </div>
//     `
//     juegoDiv.addEventListener("click", () => {
//         const juegoCompleto = {
//             title: fav.title,
//             titulo_web: fav.titulo_web || fav.title,
//             thumbnail: fav.thumbnail,
//             short_description: fav.short_description || fav.descripcion,
//             link: fav.link || fav.game_url,
//             developer: fav.developer || "Desconocido",
//             platform: fav.platform || "Desconocido",
//             genre: fav.genre || "Desconocido",
//             release_date: fav.release_date || "Desconocida"
//         }

//         localStorage.setItem("juegoSeleccionado", JSON.stringify(juegoCompleto))
//         window.location.href = "product.html"
//     })

//     contenedor.appendChild(juegoDiv)
// })

// //Log out---------------------------------------------------------------------------------------------------
// document.getElementById("logout-btn").addEventListener("click", () => {
//     localStorage.removeItem("usuarioLogueado")
//     window.location.href = "Login.html"
// })