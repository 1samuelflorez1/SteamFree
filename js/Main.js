const galeria = document.querySelector(".game-cards")
const searchInput = document.getElementById("searchInput")
const allCards = [] // Aquí guardaremos los elementos creados

async function createPost() {
  const cardsArray = []

  for (let index = 1; index <= 6; index++) {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/1samuelflorez1/Fake-Api-SteamFree/games/${index}`)
      if (!response.ok) throw new Error(`Error al obtener juego con ID ${index}`)
      const game = await response.json()

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
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
        const indexUsuario = usuarios.findIndex(u => u.email === usuarioLogueado?.email)

        if (indexUsuario === -1) return

        const favoritos = usuarios[indexUsuario].favoritos || []
        const yaFavorito = favoritos.some(fav => fav.id === game.id)
        if (yaFavorito) {
          alert("Este juego ya está en favoritos")
          return
        }

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

        icon.classList.add("bx-heart-filled")
        usuarios[indexUsuario].favoritos = favoritos
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        alert("Juego guardado en favoritos")
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

      cardsArray.push(card)
      allCards.push(card)

    } catch (error) {
      console.error("Error al cargar los juegos:", error)
    }
  }

  // Renderizamos todo junto al final
  galeria.append(...cardsArray)
}



createPost()
