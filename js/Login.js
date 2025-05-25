const usuarios = [
    {
        nombre: "Charlotte",
        apellido: "Winston",
        email: "Ch4rlott3@gmail.com",
        password: "SecretoMisteriosoOcultar",
        favoritos: [
            { titulo: "Fortnite", imagen: "../assets/Fortniteproduct.jpg" },
            { titulo: "Valorant", imagen: "../assets/valorant.jpg" },
            { titulo: "Brawlhalla", imagen: "https://www.freetogame.com/g/212/thumbnail.jpg" },
            { titulo: "Dota 2", imagen: "https://www.freetogame.com/g/229/thumbnail.jpg" }
        ]
    },
    {
        nombre: "Juan",
        apellido: "Pérez",
        email: "juan@gmail.com",
        password: "juan123",
        favoritos: [
            { titulo: "Call of Duty", imagen: "../assets/warzone.jpg" },
            { titulo: "PUBG", imagen: "https://www.freetogame.com/g/516/thumbnail.jpg" },
            { titulo: "Overwatch 2", imagen: "https://www.freetogame.com/g/540/thumbnail.jpg" },
            { titulo: "Apex Legends", imagen: "https://www.freetogame.com/g/23/thumbnail.jpg" }
        ]
    },
    {
        nombre: "Ana",
        apellido: "Gómez",
        email: "ana@gmail.com",
        password: "ana456",
        favoritos: [
            { titulo: "Fall Guys", imagen: "../assets/fallguys.jpg" },
            { titulo: "Genshin Impact", imagen: "../assets/genshin.jpg" },
            { titulo: "Fortnite", imagen: "https://www.freetogame.com/g/57/thumbnail.jpg" },
            { titulo: "LOL", imagen: "https://www.freetogame.com/g/286/thumbnail.jpg" }
        ]
    }
];

function enviarLogin() {
    const email = document.getElementById("Email").value
    const password = document.getElementById("password").value

    if (!email || !password) {
        alert("Por favor, completa ambos campos.")
        return;
    }

    const usuario = usuarios.find(user => user.email === email && user.password === password)

    if (usuario) {
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuario)); // 👈 Guarda al usuario
    window.location.href = "Main.html";
    } else {
        alert("Email o contraseña incorrectos.")
    }
}


document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const email = document.getElementById("Email").value
        const password = document.getElementById("password").value

        if (email && password) {
            e.preventDefault()
            enviarLogin()
        }
    }
});

document.getElementById("boton-final").addEventListener("click", function () {
    enviarLogin()
});


const passwordInput = document.getElementById("password")
const togglePassword = document.getElementById("toggle-password")

togglePassword.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password"
    passwordInput.type = isHidden ? "text" : "password"

  
    togglePassword.classList.toggle("bx-show-alt")
    togglePassword.classList.toggle("bx-hide")  
})