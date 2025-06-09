const galeria = document.querySelector(".game-cards")
const searchInput = document.getElementById("searchInput")
const allCards = []; // Aquí guardaremos los elementos creados

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


