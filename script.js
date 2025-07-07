const botao = document.getElementById("button1");
const texto = document.getElementById("text1");

botao.addEventListener("click", function() {
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
});