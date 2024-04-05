function cortarTextoSeNecessario() {
    var titulo = document.getElementById("titulo");
    var larguraMaxima = parseFloat(window.getComputedStyle(titulo).getPropertyValue("width"));
    var alturaMaxima = parseFloat(window.getComputedStyle(titulo).getPropertyValue("height"));
    var lineHeight = parseFloat(window.getComputedStyle(titulo).getPropertyValue("line-height"));
    var texto = titulo.innerText;

    // Calcula quantas linhas cabem na altura disponível
    var linhasAltura = Math.floor(alturaMaxima / lineHeight);

    // Verifica se o texto excede a altura definida
    if (titulo.scrollHeight > alturaMaxima) {
        // Calcula quantos caracteres cabem em uma linha
        var caracteresPorLinha = Math.floor(titulo.scrollWidth / titulo.offsetWidth);
        // Calcula quantos caracteres cabem no total
        var caracteresTotais = caracteresPorLinha * linhasAltura;
        // Corta o texto para caber na largura e altura e adiciona "..." ao final
        titulo.innerText = texto.substring(0, caracteresTotais - 3) + "...";
    }
}

// Chama a função quando a página carregar
window.addEventListener("load", cortarTextoSeNecessario);
// Chama a função quando a janela for redimensionada (se necessário)
window.addEventListener("resize", cortarTextoSeNecessario);