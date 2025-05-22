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

document.getElementById("boton-final").addEventListener("click", function () {
    const emailInput = document.getElementById("Email").value.trim();
    const passwordInput = document.querySelector("input[type='password']").value.trim();

    const usuario = usuarios.find(user => user.email === emailInput && user.password === passwordInput);

    if (usuario) {
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
        window.location.href = "Perfil.html";
    } else {
        alert("Email o contraseña incorrectos.");
    }
});