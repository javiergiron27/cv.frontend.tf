const modoOscuroToggle = document.getElementById("modoOscuro");
const body = document.body;

modoOscuroToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
});