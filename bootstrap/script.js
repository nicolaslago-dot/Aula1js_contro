const formulario = document.querySelector("#formulario");
const pesquisa = document.querySelector("#pesquisa");
const contador = document.querySelector("#contador");
const mensagem = document.querySelector("#mensagem");
const nome = document.querySelector("#nome");
const descricao = document.querySelector("#descricao");
const imagem = document.querySelector("#imagem");
const card = document.querySelector("#card");
const botaoDestaque = document.querySelector("#botao-destaque");
const botaoTema = document.querySelector("#botao-tema");

botaoDestaque.addEventListener("click", function () {
    const destacado = card.classList.toggle("destaque");
    botaoDestaque.setAttribute("aria-pressed", destacado);
});

botaoTema.addEventListener("click", function () {
    const escuro = document.body.classList.toggle("tema-escuro");
    botaoTema.setAttribute("aria-pressed", escuro);
});

pesquisa.addEventListener("input", function () {
    contador.textContent = pesquisa.value.length + " / 40 caracteres";
    pesquisa.removeAttribute("aria-invalid");
    mensagem.classList.remove("erro", "sucesso");
    mensagem.textContent = "Pronto para pesquisar.";
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valor = pesquisa.value.trim();
    mensagem.classList.remove("erro", "sucesso");

    if (valor === "") {
        mensagem.textContent = "Digite o nome de um personagem.";
        mensagem.classList.add("erro");
        pesquisa.setAttribute("aria-invalid", "true");
        pesquisa.focus();
        return;
    }

    nome.textContent = valor;
    descricao.textContent = "Você pesquisou por " + valor + ". Na próxima aula, os dados virão de uma API.";
    imagem.src = "../imagens/resultado.svg";
    imagem.alt = "Ilustração genérica para representar a pesquisa por " + valor;
    mensagem.textContent = "Card atualizado! Esta é uma simulação local.";
    mensagem.classList.add("sucesso");
    pesquisa.removeAttribute("aria-invalid");
});
