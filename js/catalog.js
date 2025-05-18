const juegos = [
  {
    id: 540,
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
    enlace: "product.html"

  },
  {
    id: 57,
    title: "Fortnite",
    thumbnail: "https://www.freetogame.com/g/57/thumbnail.jpg",
    short_description: "A free-to-play, standalone mode of Epic Game's Fortnite. ",
    game_url: "https://www.freetogame.com/open/fortnite-battle-royale",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Epic Games",
    developer: "Epic Games",
    release_date: "2017-09-26",
    freetogame_profile_url: "https://www.freetogame.com/fortnite-battle-royale",
    descripcion: "Free to Play",
    enlace: "product.html"
  },
  {
    id: 516,
    title: "PUBG: BATTLEGROUNDS",
    thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
    short_description: "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
    game_url: "https://www.freetogame.com/open/pubg",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "KRAFTON, Inc.",
    developer: "KRAFTON, Inc.",
    release_date: "2022-01-12",
    freetogame_profile_url: "https://www.freetogame.com/pubg",
    descripcion: "Free to Play",
    enlace: "product.html"
  },
  {
    id: 508,
    title: "Enlisted",
    thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
    short_description: "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
    game_url: "https://www.freetogame.com/open/enlisted",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Gaijin Entertainment",
    developer: "Darkflow Software",
    release_date: "2021-04-08",
    freetogame_profile_url: "https://www.freetogame.com/enlisted",
    descripcion: "Free to Play",
    enlace: "product.html"
  },
  {
    nombre: "Valorant",
    imagen: "https://www.freetogame.com/g/466/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Warframe",
    imagen: "https://www.freetogame.com/g/3/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Apex Legends",
    imagen: "https://www.freetogame.com/g/23/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Lol",
    imagen: "https://www.freetogame.com/g/441/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Genshin Impact",
    imagen: "https://www.freetogame.com/g/475/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Warzone",
    imagen: "https://www.freetogame.com/g/452/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Rocket League",
    imagen: "https://www.freetogame.com/g/474/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Dota 2",
    imagen: "https://www.freetogame.com/g/503/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Thumbnail",
    imagen: "https://www.freetogame.com/g/173/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Smite",
    imagen: "https://www.freetogame.com/g/602/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  },
  {
    nombre: "Brawlhalla",
    imagen: "https://www.freetogame.com/g/212/thumbnail.jpg",
    descripcion: "Free to Play",
    texto: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    enlace: "product.html"
  }
]


const contenedor = document.querySelector(".game-cards")

juegos.forEach(juego => {
  const gameContainer = document.createElement("div")
  gameContainer.classList.add("game-container")

  gameContainer.innerHTML = `
    <div class="cards">
      <div class="img-card">
        <img src="${juego.thumbnail}" alt="${juego.title}">
      </div>
      <div class="text-card">
        <div class="name-icon">
          <h3>${juego.title}</h3><i class='bx bx-heart'></i>
        </div>
        <p>${juego.descripcion}</p>
      </div>
    </div>
    <button class="button-card" onclick='verDetalles(${JSON.stringify(juego)})'>Info</button>

    `
  contenedor.appendChild(gameContainer)
} 
)

function verDetalles(juego) {
  localStorage.setItem("juegoSeleccionado", JSON.stringify(juego));
  window.location.href = "product.html";
}