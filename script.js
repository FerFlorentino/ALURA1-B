const filtro = document.getElementById('filtro');
const listaFilmes = document.getElementById('listaFilmes');
const filmes = listaFilmes.getElementsByTagName('li');

// Filtrar filmes enquanto digita
filtro.addEventListener('input', () => {
    const termo = filtro.value.toLowerCase();
    for (let i = 0; i < filmes.length; i++) {
        const nomeFilme = filmes[i].textContent.toLowerCase();
        filmes[i].style.display = nomeFilme.includes(termo) ? '' : 'none';
    }
});

// Mostrar alerta quando clicar no link do filme
for (let i = 0; i < filmes.length; i++) {
    const link = filmes[i].getElementsByTagName('a')[0];
    link.addEventListener('click', (e) => {
        e.preventDefault(); // impede abrir o link imediatamente
        alert('Você clicou no filme: ' + link.textContent);
        window.open(link.href, '_blank'); // abre o link em outra aba
    });
}
