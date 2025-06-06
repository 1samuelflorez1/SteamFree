const galeria = document.querySelector(".game-cards");

function createPost() {
  for (let index = 1; index < 50; index++) {
    fetch(`https://my-json-server.typicode.com/1samuelflorez1/Fake-Api-SteamFree/games/${index}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al obtener juego con ID ${index}`);
        }
        return response.json();
      })
      .then((game) => {
        // Crear contenedor de tarjeta
        const card = document.createElement("div");
        card.classList.add("cards");

        // Imagen del juego
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-card");

        const img = document.createElement("img");
        img.src = game.thumbnail;
        img.alt = game.title;
        imgContainer.appendChild(img);
        card.appendChild(imgContainer);

        // Título y descripción
        const textCard = document.createElement("div");
        textCard.classList.add("text-card");

        const title = document.createElement("h3");
        title.textContent = game.title;
        textCard.appendChild(title);

        // const genre = document.createElement("p");
        // genre.textContent = game.genre;
        // textCard.appendChild(genre);

        card.appendChild(textCard);

        // Botón
        const button = document.createElement("button");
        button.classList.add("button-card");
        button.textContent = "Info";
        button.onclick = () => {
          window.open(game.game_url, "_blank");
        };

        card.appendChild(button);

        // Agregar la tarjeta a la galería
        galeria.appendChild(card);
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }
}

createPost();