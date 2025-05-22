document.addEventListener("DOMContentLoaded", () => {
  const teamMembers = [
    {
      name: "Laura",
      role: "Developer",
      description: "Codes the game mechanics, fixes bugs, and ensures everything works seamlessly",
      image: "./assets/guitar-cat.png",
      imageClass: "imagen1",
      roleClass: "puesto1"
    },
    {
      name: "Natalia",
      role: "Leader",
      description: "Guides the project, makes key decisions, and ensures everything runs smoothly",
      image: "./assets/Gato_bateria-removebg-preview.png",
      imageClass: "imagen2",
      roleClass: "puesto2"
    },
    {
      name: "Samuel",
      role: "Designer",
      description: "Designs game interfaces, characters, and environments to make everything look great",
      image: "./assets/gato_violin-removebg-preview.png",
      imageClass: "imagen3",
      roleClass: "puesto3"
    }
  ];

  const aboutContainer = document.createElement("div");
  aboutContainer.className = "aboutcards";

  teamMembers.forEach(member => {
    const container = document.createElement("div");
    container.className = "game-container";

    const nameEl = document.createElement("h1");
    nameEl.className = "nombre";
    nameEl.textContent = member.name;

    const card = document.createElement("div");
    card.className = "cards";

    const imgCard = document.createElement("div");
    imgCard.className = "img-card";

    const img = document.createElement("img");
    img.className = member.imageClass;
    img.src = member.image;
    img.alt = member.name;
    imgCard.appendChild(img);

    const textCard = document.createElement("div");
    textCard.className = "text-card";

    const nameIcon = document.createElement("div");
    nameIcon.className = "name-icon";

    const role = document.createElement("h3");
    role.className = member.roleClass;
    role.textContent = member.role;

    const description = document.createElement("p");
    description.textContent = member.description;

    nameIcon.appendChild(role);
    textCard.appendChild(nameIcon);
    textCard.appendChild(description);

    card.appendChild(imgCard);
    card.appendChild(textCard);

    container.appendChild(nameEl);
    container.appendChild(card);

    aboutContainer.appendChild(container);
  });

  // Texto de la misión
  const mission = document.createElement("p");
  mission.className = "ourmission";
  mission.textContent = "Our mission is to provide a secure, fun, and competitive environment where players can explore trending games, track rankings, and stay updated on the latest gaming news.";

  // Insertar en el DOM
  const target = document.getElementById("about-section"); // Asegúrate de tener un <div id="about-section"></div> en tu HTML
  if (target) {
    target.appendChild(aboutContainer);
    target.appendChild(mission);
  } else {
    console.error("Contenedor 'about-section' no encontrado.");
  }
});
