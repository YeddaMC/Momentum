// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle"); // Seleciona o botão de menu
    const navLinks = document.querySelector(".nav-links"); // Seleciona a lista de links do menu

    // Adiciona um evento de clique ao botão do menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Adiciona ou remove a classe "active"
    });
});
