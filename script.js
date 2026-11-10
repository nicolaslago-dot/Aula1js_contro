const formulario = document.getElementById('formulario');
const pesquisa = document.getElementById('pesquisa');
const contador = document.getElementById('contador');
const mensagem = document.getElementById('mensagem');
const nome = document.getElementById('nome');
const descricao = document.getElementById('descricao');
const imagem = document.getElementById('imagem');
const card = document.getElementById('card');
const botaoDestaque = document.getElementById('botao-destaque');
const botaoTema = document.getElementById('botao-tema');


botaoDestaque.addEventListener('click', function() {
    const destaque = card.classList.toggle('destaque');
    botaoDestaque.setAttribute('aria-pressed', destaque);
});

botaoTema.addEventListener('click', function() {
    const escuro = document.body.classList.toggle('tema-escuro');
    botaoTema.setAttribute('aria-pressed', escuro);
});
