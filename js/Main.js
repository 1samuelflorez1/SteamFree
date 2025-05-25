const juegos = [
  {
    id: 57,
    titulo_web: "Fortnite",
    title: "Fortnite",
    thumbnail: "https://www.freetogame.com/g/57/thumbnail.jpg",
    short_description: "A free-to-play, standalone mode of Epic Game's Fortnite.",
    game_url: "https://www.freetogame.com/open/overwatch-2",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Activision Blizzard",
    developer: "Blizzard Entertainment",
    release_date: "2022-10-04",
    freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
    descripcion: "Free to Play",
    enlace: "product.html",
    release_date: "2017-09-26",
    freetogame_profile_url: "https://www.freetogame.com/fortnite-battle-royale",
    link: "https://www.fortnite.com/"
  },
  {
    id: 475,
    titulo_web: "Genshin Impact",
    title: "Genshin Impact",
    thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
    short_description: "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
    game_url: "https://www.freetogame.com/open/genshin-impact",
    genre: "Action RPG",
    platform: "PC (Windows)",
    publisher: "miHoYo",
    developer: "miHoYo",
    descripcion: "Free to Play",
    enlace: "product.html",
    release_date: "2020-09-28",
    freetogame_profile_url: "https://www.freetogame.com/genshin-impact",
    link: "https://genshin.hoyoverse.com/es/"
  },
  {
    id: 516,
    titulo_web: "PUBG",
    title: "PUBG",
    thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
    short_description: "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
    game_url: "https://www.freetogame.com/open/pubg",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "KRAFTON, Inc.",
    developer: "KRAFTON, Inc.",
    release_date: "2022-01-12",
    descripcion: "Free to Play",
    freetogame_profile_url: "https://www.freetogame.com/pubg",
    enlace: "product.html",
    link: "https://pubg.com/es-es"
  },
  {
    id: 521,
    titulo_web: "Diablo Inmortal",
    title: "Diablo Immortal",
    thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
    short_description: "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
    game_url: "https://www.freetogame.com/open/diablo-immortal",
    genre: "MMOARPG",
    platform: "PC (Windows)",
    publisher: "Blizzard Entertainment",
    developer: "Blizzard Entertainment",
    release_date: "2022-06-02",
    descripcion: "Free to Play",
    freetogame_profile_url: "https://www.freetogame.com/diablo-immortal",
    enlace: "product.html",
    link: "https://diabloimmortal.blizzard.com/en-us/"
  },
  {
    id: 523,
    titulo_web: "Fall Guys",
    title: "Fall Guys",
    thumbnail: "https://www.freetogame.com/g/523/thumbnail.jpg",
    short_description: "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms.",
    game_url: "https://www.freetogame.com/open/fall-guys",
    genre: "Battle Royale",
    platform: "PC (Windows)",
    publisher: "Mediatonic",
    developer: "Mediatonic",
    release_date: "2020-08-04",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/fall-guys",
    link: "https://www.fallguys.com/es-ES"
  },
  {
    id: 515,
    titulo_web: "Halo Infinite",
    title: "Halo Infinite",
    thumbnail: "https://www.freetogame.com/g/515/thumbnail.jpg",
    short_description: "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
    game_url: "https://www.freetogame.com/open/halo-infinite",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Xbox Game Studios",
    developer: "343 Industries",
    release_date: "2021-11-15",
    descripcion: "Free to Play",
    freetogame_profile_url: "https://www.freetogame.com/halo-infinite",
    enlace: "product.html",
    link: "https://www.halowaypoint.com/halo-infinite"
  },
]

const juegos2 = [
    {
    id: 24,
    titulo_web: "Counter-Strike: Global Offensive",
    title: "Counter-Strike",
    thumbnail: "https://www.freetogame.com/g/24/thumbnail.jpg",
    short_description: "The popular multiplayer shooter from Valve. ",
    game_url: "https://www.freetogame.com/open/counter-strike-global-offensive",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Valve",
    developer: "Valve, Hidden Path Entertainment",
    release_date: "2012-08-21",
    descripcion: "Free to Play",
    freetogame_profile_url: "https://www.freetogame.com/counter-strike-global-offensive",
    enlace: "product.html",
    link: "https://blog.counter-strike.net/"
  },
   {
    id: 21,
    titulo_web: "Destiny 2",
    title: "Destiny 2",
    thumbnail: "https://www.freetogame.com/g/21/thumbnail.jpg",
    short_description: "A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.",
    game_url: "https://www.freetogame.com/open/destiny-2",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Bungie",
    developer: "Bungie",
    release_date: "2019-10-01",
    descripcion: "Free to Play",
    freetogame_profile_url: "https://www.freetogame.com/destiny-2",
    enlace: "product.html",
    link: "https://www.bungie.net/7/en/destiny"
  },
  {
    id: 540,
    titulo_web: "Overwatch 2",
    title: "Overwatch 2",
    thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
    short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    game_url: "https://www.freetogame.com/open/overwatch-2",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Activision Blizzard",
    developer: "Blizzard Entertainment",
    release_date: "2022-10-04",
    freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
    descripcion: "Free to Play",
    enlace: "product.html",
    link: "https://overwatch.blizzard.com/es-es/"
  },
]

//----------------------------------------------------------------------------------------cards parte superior

const contenedor = document.querySelector(".game-cards")

juegos.forEach((juego, index) => {
  const gameContainer = document.createElement("div")
  gameContainer.classList.add("game-container")

  const titulo = juego.title || juego.nombre 
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
    <button class="button-card" data-index="${index}">Info</button>
  `

  contenedor.appendChild(gameContainer)
});

//info boton

contenedor.addEventListener("click", function(e) {
  if (e.target.classList.contains("button-card")) {
    const index = e.target.getAttribute("data-index")
    const juego = juegos[index]
    localStorage.setItem("juegoSeleccionado", JSON.stringify(juego))
    window.location.href = "product.html"
  }
})

//---------------------------------------------------------------------------------cards parte inferior

const contenedor2 = document.querySelector(".game-cards2")

juegos2.forEach((juego, index) => {
  const gameContainer2 = document.createElement("div")
  gameContainer2.classList.add("game-container2")

  const titulo = juego.title || juego.nombre 
  const descripcion = juego.descripcion || juego.short_description  
  const thumbnail = juego.thumbnail 

  gameContainer2.innerHTML = `
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
    <button class="button-card" data-index="${index}">Info</button>
  `

  contenedor2.appendChild(gameContainer2)
});

//info boton

contenedor2.addEventListener("click", function(e) {
  if (e.target.classList.contains("button-card")) {
    const index = e.target.getAttribute("data-index")
    const juego = juegos2[index]
    localStorage.setItem("juegoSeleccionado", JSON.stringify(juego))
    window.location.href = "product.html"
  }
})


//Newsletter---------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("botonNews")
    const emailInput = document.getElementById("emailNews")

    boton.addEventListener("click", function () {
        const email = emailInput.value

        if (email !== "") {
            alert("Bien hecho te suscribiste")
            emailInput.value = "" // Esto borra el contenido del input
        } else {
            alert("Por favor escribe tu correo")
        }
    })
})