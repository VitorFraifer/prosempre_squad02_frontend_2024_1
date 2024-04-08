let indiceAtual = 0;

function moverCarrossel(indice) {
    const cards = document.querySelector('.cards');
    const larguraCard = document.querySelector('.cardCurso').offsetWidth;
    const novoDeslocamento = indice * larguraCard * -1;
    cards.style.transform = 'translateX(${novoDeslocamento}px)';
}

document.querySelector('#setaCarrosselMobileDireita').addEventListener('click', () => {
    const totalCards = document.querySelectorAll('.cardCurso').length;
    indiceAtual = (indiceAtual + 1) % totalCards; // Volta ao início se atingir o final
    moverCarrossel(indiceAtual);
});

document.querySelector('#setaCarrosselMobileEsquerda').addEventListener('click', () => {
    const totalCards = document.querySelectorAll('.cardCurso').length;
    indiceAtual = (indiceAtual - 1 + totalCards) % totalCards; // Permite navegação circular
    moverCarrossel(indiceAtual);
});

// Inicializa o carrossel na primeira imagem
moverCarrossel(indiceAtual);