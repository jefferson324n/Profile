

const backgroundImages = [
    'pasta_com_as_imagens/gif.gif',
    'pasta_com_as_imagens/gif7.gif',
    'pasta_com_as_imagens/gif8.gif',
    'pasta_com_as_imagens/gif9.gif',
    'pasta_com_as_imagens/gif10.gif',
    // Adicione mais imagens GIF aqui conforme necessário
];

let currentIndex = 0;

function changeBackground() {
    document.getElementById('background').style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Alterar o plano de fundo imediatamente após o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeBackground, 3000); // Trocar a cada 3 segundos
});