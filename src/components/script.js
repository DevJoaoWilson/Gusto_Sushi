window.addEventListener("scroll", function() {
    var header = document.getElementById("fixed-header");
    if (window.pageYOffset > 200) { // Verifica se o usuário rolou mais de 100px
        header.style.top = "0"; // Mostra o cabeçalho
    } else {
        header.style.top = "-100px"; // Esconde o cabeçalho
    }
});
