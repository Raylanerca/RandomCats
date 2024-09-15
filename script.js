document.getElementById('new-cat').addEventListener('click', fetchCatImage);

function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search') // API pública que retorna uma imagem aleatória de gatinho
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            const catImageUrl = data[0].url; // Extrai o URL da imagem
            document.getElementById('cat-image').src = catImageUrl; // Atualiza a imagem no HTML
        })
        .catch(error => console.error('Erro ao obter imagem do gatinho:', error));
}

// Carregar uma imagem de gatinho ao iniciar a página
fetchCatImage();
