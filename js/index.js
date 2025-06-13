// --------------------------- Clase Member (Integrante del equipo) ----------------------------

class Member {
  constructor(name, role, description, image, imageClass, roleClass) {
    this.name = name
    this.role = role
    this.description = description
    this.image = image
    this.imageClass = imageClass
    this.roleClass = roleClass
  }

  render() {
    const container = document.createElement("div")
    container.className = "game-container"
    container.innerHTML = `
      <h1 class="nombre">${this.name}</h1>
      <div class="cards">
        <div class="img-card">
          <img class="${this.imageClass}" src="${this.image}" alt="${this.name}">
        </div>
        <div class="text-card">
          <div class="name-icon">
            <h3 class="${this.roleClass}">${this.role}</h3>
          </div>
          <p>${this.description}</p>
        </div>
      </div>
    `
    return container
  }
}

// --------------------------- Mostrar integrantes del equipo al cargar ----------------------------

document.addEventListener("DOMContentLoaded", function () {
  const aboutcards = document.getElementById("aboutcards")

  const members = [
    new Member("Laura", "Developer", "Codes the game mechanics, fixes bugs, and ensures everything works seamlessly", "./assets/guitar-cat.png", "imagen1", "puesto1"),
    new Member("Natalia", "Leader", "Guides the project, makes key decisions, and ensures everything runs smoothly", "./assets/Gato_bateria-removebg-preview.png", "imagen2", "puesto2"),
    new Member("Samuel", "Designer", "Designs game interfaces, characters, and environments to make everything look great", "./assets/gato_violin-removebg-preview.png", "imagen3", "puesto3")
  ]

  members.forEach(member => {
    aboutcards.appendChild(member.render())
  })
})


// --------------------------- Clase ContactMessage ----------------------------

class ContactMessage {
  constructor(name, email, message) {
    this.name = name
    this.email = email
    this.message = message
  }
}

// --------------------------- Formulario de contacto ----------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form")
  const nameInput = form.querySelector("input[name='name']")
  const emailInput = form.querySelector("input[name='email']")
  const messageInput = form.querySelector("textarea[name='message']")

  form.addEventListener("submit", function (event) {
    event.preventDefault()

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const message = messageInput.value.trim()

    if (name !== "" && email !== "" && message !== "") {
      const newMessage = new ContactMessage(name, email, message)
      const existingMessages = JSON.parse(localStorage.getItem("contactMessages")) || []
      existingMessages.push(newMessage)
      localStorage.setItem("contactMessages", JSON.stringify(existingMessages))

      alert("¡Bien hecho! Tu mensaje fue enviado correctamente.")

      nameInput.value = ""
      emailInput.value = ""
      messageInput.value = ""
    } else {
      alert("Por favor completa todos los campos antes de enviar.")
    }
  })
})
