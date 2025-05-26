//Arreglo de quienes somos integrantes---------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const aboutcards = document.getElementById("aboutcards")

  const members = [
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

  members.forEach(member => {
    const container = document.createElement("div")
    container.className = "game-container"
    container.innerHTML = `
      <h1 class="nombre">${member.name}</h1>
      <div class="cards">
        <div class="img-card">
          <img class="${member.imageClass}" src="${member.image}" alt="${member.name}">
        </div>
        <div class="text-card">
          <div class="name-icon">
            <h3 class="${member.roleClass}">${member.role}</h3>
          </div>
          <p>${member.description}</p>
        </div>
      </div>
    `
    aboutcards.appendChild(container)
  })
})



//Contact us alerta (simulación)-----------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form")
    const nameInput = form.querySelector("input[name='name']")
    const emailInput = form.querySelector("input[name='email']")
    const messageInput = form.querySelector("textarea[name='message']")
    const submitButton = form.querySelector(".boton3")

    form.addEventListener("submit", function (event) {
        event.preventDefault()

        if (
            nameInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            messageInput.value.trim() !== ""
        ) {
            alert("Bien hecho, tu mensaje fue enviado")
            nameInput.value = ""
            emailInput.value = ""
            messageInput.value = ""
        } else {
            alert("Por favor completa todos los campos")
        }
    })
})