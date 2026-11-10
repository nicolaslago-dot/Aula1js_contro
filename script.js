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

pesquisa.addEventListener('input', function() {
    contador.textContent = pesquisa.value.length + "/ 40 caracteres";
    pesquisa.setAttribute('aria-invalid');
    mensagem.classList.remove("erro", "sucesso");
    mensagem.textContent = "Pronto para Pesquisar!";
});

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const valor = pesquisa.value.trim();
    mensagem.classList.remove("erro", "sucesso");

    if (valor === "") {
        mensagem.classList.add("erro");
        mensagem.textContent = "Campo de pesquisa vazio!";
        pesquisa.setAttribute('aria-invalid', 'true');
        pesquisa.focus();
        return;
    }

    nome.textContent = valor;
    descricao.textContent = "voce pesquisou por " + valor + " e não encontrou nada!";
    imagem.src = "imagens/resultado.png";
    imagem.alt = "Silhueta de personagem aguardando pesquisa";
    mensagem.classList.add("sucesso");
    mensagem.textContent = "Pesquisa realizada com sucesso!";
    pesquisa.removeAttribute('aria-invalid');
});

