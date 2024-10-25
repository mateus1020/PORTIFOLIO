const btnMostrar = document.getElementById("mostrarSobre");
const sobreTexto = document.getElementById("sobreTexto");

btnMostrar.addEventListener("click", () => {
  sobreTexto.classList.toggle("mostrar"); // Alterna a classe 'mostrar'
});
