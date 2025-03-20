// Seleciona o botão do menu hambúrguer e a lista de links da navbar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Adiciona um evento de clique ao botão do menu
menuToggle.addEventListener("click", () => {
    // Alterna a classe 'active' para exibir ou ocultar o menu
    navLinks.classList.toggle("active");
});
