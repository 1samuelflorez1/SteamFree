

//Boton de info que redirige a el detalle del juego---------------------------------------------------------------------------------------------------

contenedor.addEventListener("click", function(e) {
  if (e.target.classList.contains("button-card")) {
    const index = e.target.getAttribute("data-index")
    const juego = juegos[index]
    localStorage.setItem("juegoSeleccionado", JSON.stringify(juego))
    window.location.href = "product.html"
  }
})

//barra de busqueda funcional---------------------------------------------------------------------------------------------------
const searchInput = document.getElementById("search-input")

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase()
  contenedor.innerHTML = "" 

  const juegosFiltrados = juegos.filter(juego =>
    juego.title.toLowerCase().includes(searchTerm)
  )
  
  if (juegosFiltrados.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron juegos.</p>"
  } else {
    juegosFiltrados.forEach((juego, index) => {
      const gameContainer = document.createElement("div")
      gameContainer.classList.add("game-container")

      const titulo = juego.title || juego.nombre;
      const descripcion = juego.descripcion || juego.short_description
      const thumbnail = juego.thumbnail

      gameContainer.innerHTML = `
        <div class="cards">
          <div class="img-card">
            <img src="${thumbnail}" alt="${titulo}">
          </div>
          <div class="text-card">
            <div class="name-icon">
              <h3>${titulo}</h3><i class='bx bx-heart'></i>
            </div>
            <p>${descripcion}</p>
          </div>
        </div>
        <button class="button-card" data-index="${juegos.indexOf(juego)}">Info</button>
      `;

      contenedor.appendChild(gameContainer)
    })
  }
})

