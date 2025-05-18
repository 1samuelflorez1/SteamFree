const juegos = [
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
    enlace: "product.html"

  },
  {
    id: 57,
    titulo_web: "Fortnite",
    title: "Fortnite",
    thumbnail: "https://www.freetogame.com/g/57/thumbnail.jpg",
    short_description: "A free-to-play, standalone mode of Epic Game's Fortnite. ",
    game_url: "https://www.freetogame.com/open/fortnite-battle-royale",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Epic Games",
    developer: "Epic Games",
    descripcion: "Free to Play",
    enlace: "product.html",
    release_date: "2017-09-26",
    freetogame_profile_url: "https://www.freetogame.com/fortnite-battle-royale"
  },
  {
    id: 516,
    titulo_web: "Fortnite",
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
    enlace: "product.html"
  },
  {
    id: 508,
    title: "Enlisted",
    titulo_web: "Enlisted",
    thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
    short_description: "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
    game_url: "https://www.freetogame.com/open/enlisted",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Gaijin Entertainment",
    developer: "Darkflow Software",
    release_date: "2021-04-08",
    descripcion: "Free to Play",
    freetogame_profile_url: "https://www.freetogame.com/enlisted",
    enlace: "product.html"
  },
  {
    id: 466,
    titulo_web: "Valorant",
    title: "Valorant",
    thumbnail: "https://www.freetogame.com/g/466/thumbnail.jpg",
    short_description: "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
    game_url: "https://www.freetogame.com/open/valorant",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Riot Games",
    developer: "Riot Games",
    release_date: "2020-06-02",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/valorant"
  },
  {
    id: 3,
    title: "Warframe",
    titulo_web: "Warframe",
    thumbnail: "https://www.freetogame.com/g/3/thumbnail.jpg",
    short_description: "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
    game_url: "https://www.freetogame.com/open/warframe",
    genre: "Shooter",
    platfor: "PC (Windows)",
    publisher: "Digital Extremes",
    developer: "Digital Extremes",
    release_date: "2013-03-25",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/warframe"
  },
  {
    id: 23,
    titulo_web: "Apex Legends",
    title: "Apex Legends",
    thumbnail: "https://www.freetogame.com/g/23/thumbnail.jpg",
    short_description: "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ",
    game_url: "https://www.freetogame.com/open/apex-legends",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Electronic Arts",
    developer: "Electronic Arts",
    release_date: "2019-02-04",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/apex-legends"
  },
  {
    id: 286,
    titulo_web: "League of Legends",
    title: "LOL",
    thumbnail: "https://www.freetogame.com/g/286/thumbnail.jpg",
    short_description: "A free-to-play MOBA game, and one of the most played pc game in the world.",
    game_url: "https://www.freetogame.com/open/league-of-legends",
    genre: "MOBA",
    platform: "PC (Windows)",
    publisher: "Riot Games",
    developer: "Riot Games",
    release_date: "2009-10-27",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/league-of-legends"
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
    freetogame_profile_url: "https://www.freetogame.com/genshin-impact"
  },
  {
    "id": 452,
    titulo_web: "Call Of Duty: Warzone",
    title: "Call Of Duty: Warzone",
    thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg",
    short_description: "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
    game_url: "https://www.freetogame.com/open/call-of-duty-warzone",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Activision",
    developer: "Infinity Ward",
    release_date: "2020-03-10",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/call-of-duty-warzone"
  },
  {
    id: 474,
    titulo_web: "Rocket League",
    title: "Rocket League",
    thumbnail: "https://www.freetogame.com/g/474/thumbnail.jpg",
    short_description: "Get your car-soccer gaming on for free with Psyonix’s Rocket League. The popular competitive multi-player game is a popular offering with over 57 million players.",
    game_url: "https://www.freetogame.com/open/rocket-league",
    genre: "Sports",
    platform: "PC (Windows)",
    publisher: "Psyonix LLC",
    developer: "Psyonix LLC",
    release_date: "2020-09-24",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/rocket-league"
  },
  {
    id: 229,
    titulo_web: "Dota 2",
    title: "Dota 2",
    thumbnail: "https://www.freetogame.com/g/229/thumbnail.jpg",
    short_description: "Valve's premiere competitive free to play MOBA.",
    game_url: "https://www.freetogame.com/open/dota-2",
    genre: "MOBA",
    platform: "PC (Windows)",
    publisher: "Valve",
    developer: "Valve",
    release_date: "2013-07-09",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/dota-2"
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
    freetogame_profile_url: "https://www.freetogame.com/fall-guys"
  },
  {
    id: 217,
    titulo_web: "Smite",
    title: "Smite",
    thumbnail: "https://www.freetogame.com/g/217/thumbnail.jpg",
    short_description: "A popular free-to-play 3D MOBA where you take on the role of an ancient god.",
    game_url: "https://www.freetogame.com/open/smite",
    genre: "MOBA",
    platform: "PC (Windows)",
    publisher: "Hi-Rez Studios",
    developer: "Hi-Rez Studios",
    release_date: "2014-03-25",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/smite"
  },
  {
    "id": 212,
    titulo_web: "Brawlhalla",
    title: "Brawlhalla",
    thumbnail: "https://www.freetogame.com/g/212/thumbnail.jpg",
    short_description: "A free-to-play 2D platform fighter inspired by the Smash Bros.",
    game_url: "https://www.freetogame.com/open/brawlhalla",
    genre: "Fighting",
    platform: "PC (Windows)",
    publisher: "Blue Mammoth Games",
    developer: "Blue Mammoth Games",
    release_date: "2015-11-03",
    descripcion: "Free to Play",
    enlace: "product.html",
    freetogame_profile_url: "https://www.freetogame.com/brawlhalla"
  }
]

//cards

const contenedor = document.querySelector(".game-cards")

juegos.forEach((juego, index) => {
  const gameContainer = document.createElement("div")
  gameContainer.classList.add("game-container")

  const titulo = juego.title || juego.nombre 
  const descripcion = juego.descripcion || juego.short_description  // || significa o
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