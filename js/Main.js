const galeria = document.querySelector(".game-cards")
const searchInput = document.getElementById("searchInput")

// Aqui se guardan todas las cards-----------------------------------------------

const allCards = [] 


//Se crea la funcion que creara las tarjetas de los juegos--------------------------------------------------------------------------------------------------------------------------------

async function createPost() {

  const cardsArray = []


//Se recorren los primeros 6 juegos del fake API--------------------------------------------------------------------------------------------------------------------------------

  for (let index = 1; index <= 6; index++) {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/1samuelflorez1/Fake-Api-SteamFree/games/${index}`)
      if (!response.ok) throw new Error(`Error al obtener juego con ID ${index}`)
      const game = await response.json()

//Se crea la card principal aplicandole los estilos ya creados--------------------------------------------------------------------------------------------------------------------------------
  
      const card = document.createElement("div")
      card.classList.add("cards")
      card.setAttribute("data-title", game.title.toLowerCase()) //guarda el titulo para la busquedad (se puede escribir en mayusculas o minusculas------------------------------------------------

// Se crea el div de la imagen del juego  aplicandole los estilos ya creados--------------------------------------------------------------------------------------------------------------------------------

      const imgContainer = document.createElement("div")
      imgContainer.classList.add("img-card")
      const img = document.createElement("img")
      img.src = game.thumbnail
      img.alt = game.title
      imgContainer.appendChild(img)
      card.appendChild(imgContainer)

//Se crea el div del titulo del juego y el icono fav--------------------------------------------------------------------------------------------------------------------------------  

      const nameIcon = document.createElement("div")
      nameIcon.classList.add("name-icon")
      const title = document.createElement("h3")
      title.textContent = game.title
      const icon = document.createElement("i")
      icon.className = "bx bx-heart"
      nameIcon.appendChild(title)
      nameIcon.appendChild(icon)

// Se crea un evento al hacer clic en el ícono para guardar el juego como favorito---------------------------------------------------------------------------------

      icon.addEventListener("click", () => {
        const usuarioLogueado = JSON.parse(localStorage.getItem("logueado"))
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
        const indexUsuario = usuarios.findIndex(u => u.email === usuarioLogueado?.email)

        if (indexUsuario === -1) return

        const favoritos = usuarios[indexUsuario].favoritos || []

// Verificamos si ya está agregado--------------------------------------------------------------------------------------------------------------------------------

        const yaFavorito = favoritos.some(fav => fav.id === game.id)
        if (yaFavorito) {
          alert("Este juego ya está en favoritos")
          return
        }

// Si no esta entonces se agrega--------------------------------------------------------------------------------------------------------------------------------

        favoritos.push({

 // Detalles de la info del juego--------------------------------------------------------------------------------------------------------------------------------

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

//Se crea div de texto de la tarjeta--------------------------------------------------------------------------------------------------------------------------------

      const textCard = document.createElement("div")
      textCard.classList.add("text-card")
      const genre = document.createElement("p")
      genre.textContent = game.genre
      textCard.appendChild(nameIcon)

      card.appendChild(textCard)

//Boton para ver la info del juego seleccionado --------------------------------------------------------------------------------------------------------------------------------

      const button = document.createElement("button")
      button.classList.add("button-card")
      button.textContent = "Info"
      button.onclick = () => {

//SSSSse guarda el juego en localStorage y se redirige a otra pagina al darle click-------------------------------------------------------------------------------------------------------------

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

//Se agregan todas  las card al DOM de una sola vez--------------------------------------------------------------------------------------------------------------------------------
  galeria.append(...cardsArray)
}



createPost()
