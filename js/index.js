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



//Contact us que la info se guarda en el local -----------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form")
  const nameInput = form.querySelector("input[name='name']")
  const emailInput = form.querySelector("input[name='email']")
  const messageInput = form.querySelector("textarea[name='message']")
  

  form.addEventListener("submit", function (event) {
    event.preventDefault()

// tenemos los valores de los campos eliminando espacios que no se necesitan---------------------------------------------------------------------

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const message = messageInput.value.trim()

    if (name !== "" && email !== "" && message !== "") {

// Estos son los datos que iran en el mensaje-----------------------------------------------------------------------------------------------------

      const contactMessage = {
        name,
        email,
        message,
        date: new Date().toISOString()
      }

      
      const existingMessages = JSON.parse(localStorage.getItem("contactMessages")) || []

//Se agrega el nuevo mensaje que el usuario vaya a añadir--------------------------------------------------------------------------------

      existingMessages.push(contactMessage)

//Se guarda el array actualizado en localStorage----------------------------------------------------------------------------------------------------------------

      localStorage.setItem("contactMessages", JSON.stringify(existingMessages))

      alert("¡Bien hecho! Tu mensaje fue enviado correctamente.")

// Luego de enviar el mensaje se limpian los campos del formulario para que quede vacio-------------------------------------------------------------------------
   
      nameInput.value = ""
      emailInput.value = ""
      messageInput.value = ""
    } else {
      alert("Por favor completa todos los campos antes de enviar.")
    }
  })
})