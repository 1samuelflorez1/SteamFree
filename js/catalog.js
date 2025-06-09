const galeria = document.querySelector(".game-cards")
const searchInput = document.getElementById("searchInput")
const allCards = [] // Aquí guardaremos los elementos creados

function createPost() {
  for (let index = 1; index < 19; index++) {
    fetch(`https://my-json-server.typicode.com/1samuelflorez1/Fake-Api-SteamFree/games/${index}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al obtener juego con ID ${index}`)
        }
        return response.json()
      })
      .then((game) => {
        const card = document.createElement("div")
        card.classList.add("cards")
        card.setAttribute("data-title", game.title.toLowerCase())

        const imgContainer = document.createElement("div")
        imgContainer.classList.add("img-card")
        const img = document.createElement("img")
        img.src = game.thumbnail
        img.alt = game.title
        imgContainer.appendChild(img)
        card.appendChild(imgContainer)

        const nameIcon = document.createElement("div")
        nameIcon.classList.add("name-icon")
        const title = document.createElement("h3")
        title.textContent = game.title
        const icon = document.createElement("i")
        icon.className = "bx bx-heart"
        nameIcon.appendChild(title)
        nameIcon.appendChild(icon)

        icon.addEventListener("click", () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("logueado"))
   {
    alert("Juego Guardado en Favoritos")
    
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
  const indexUsuario = usuarios.findIndex(u => u.email === usuarioLogueado.email)

  if (indexUsuario === -1) return

  const favoritos = usuarios[indexUsuario].favoritos || []

  // Verificar si ya está en favoritos
  const yaFavorito = favoritos.some(fav => fav.id === game.id)
  if (!yaFavorito) {
    favoritos.push({
      id: game.id,
      title: game.title,
      thumbnail: game.thumbnail,
      short_description: game.short_description,
      link: game.link,
      game_url: game.game_url,
      developer: game.developer,
      platform: game.platform,
      genre: game.genre,
      release_date: game.release_date
    })
    icon.classList.add("bx-heart-filled") // Opcional: cambia estilo del ícono
    usuarios[indexUsuario].favoritos = favoritos
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
  }
})


        const textCard = document.createElement("div")
        textCard.classList.add("text-card")
        const genre = document.createElement("p")
        genre.textContent = game.genre
        textCard.appendChild(nameIcon)
        

        card.appendChild(textCard)

        const button = document.createElement("button")
        button.classList.add("button-card")
        button.textContent = "Info"
        button.onclick = () => {
        localStorage.setItem("juegoSeleccionado", JSON.stringify(game))
        window.location.href = "product.html"
        }
        card.appendChild(button)

        galeria.appendChild(card)
        allCards.push(card) // Guardamos la tarjeta en el array
      })
      .catch((error) => {
        console.error("Error al cargar los juegos:", error)
      });
}

// Filtro al escribir en la barra de búsqueda
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase()

  allCards.forEach((card) => {
    const title = card.getAttribute("data-title")
    if (title.includes(searchTerm)) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  });
});
}
createPost()




