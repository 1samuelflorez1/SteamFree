const galeria = document.querySelector(".game-cards")

function createPost() {
  for (let index = 1; index < 50; index++) {
    fetch(`https://my-json-server.typicode.com/1samuelflorez1/Fake-Api-SteamFree/games/${index}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al obtener juego con ID ${index}`)
        }
        return response.json()
      })
      .then((game) => {
        // Crear tarjeta
        const card = document.createElement("div")
        card.classList.add("cards")

        // Imagen
        const imgContainer = document.createElement("div")
        imgContainer.classList.add("img-card")

        const img = document.createElement("img")
        img.src = game.thumbnail;
        img.alt = game.title;
        imgContainer.appendChild(img);
        card.appendChild(imgContainer);

        // Título y corazón
        const textCard = document.createElement("div")
        textCard.classList.add("text-card")

        const title = document.createElement("h3")
        title.textContent = game.title

        const heartIcon = document.createElement("i")
        heartIcon.className = "bx bx-heart" // Icono de corazón vacío
        heartIcon.style.fontSize = "24px"
        heartIcon.style.cursor = "pointer"
        heartIcon.style.marginLeft = "10px"

        // Contenedor para título + corazón
        const titleContainer = document.createElement("div")
        titleContainer.style.display = "flex"
        titleContainer.style.alignItems = "center"
        titleContainer.style.justifyContent = "space-between"

        titleContainer.appendChild(title)
        titleContainer.appendChild(heartIcon)

        textCard.appendChild(titleContainer)
        card.appendChild(textCard)

        // Botón "Info"
        const button = document.createElement("button")
        button.classList.add("button-card")
        button.textContent = "Info"
        button.onclick = () => {
        localStorage.setItem("juegoSeleccionado", JSON.stringify(game))
        window.location.href = "product.html"
        }

        card.appendChild(button)

        // Agregar la tarjeta a la galería
        galeria.appendChild(card)
      })
      .catch((error) => {
        console.warn(error.message)
      });
  }
}

createPost()
