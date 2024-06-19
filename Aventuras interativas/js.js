const historia = [
    { texto: "Você está em uma floresta escura. À sua frente, há dois caminhos. Você vai para a esquerda ou para a direita?", opcoes: ["Esquerda", "Direita"] },
    { texto: "Você encontra uma cabana abandonada. Você quer entrar para investigar?", opcoes: ["Sim", "Não"] },
    { texto: "Dentro da cabana, você encontra um baú. Você quer abri-lo?", opcoes: ["Sim", "Não"] },
    { texto: "Dentro do baú, você encontra um mapa do tesouro! Você quer seguir o mapa e procurar pelo tesouro?", opcoes: ["Sim", "Não"] },
    { texto: "Você encontrou o tesouro! Parabéns, você completou a aventura!", opcoes: [] }
];

let indiceHistoriaAtual = 0;

function exibirCena() {
    const historiaElement = document.getElementById("historia");
    historiaElement.textContent = historia[indiceHistoriaAtual].texto;

    const opcoesElement = document.getElementById("opcoes");
    opcoesElement.innerHTML = "";

    const opcoes = historia[indiceHistoriaAtual].opcoes;
    opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.addEventListener("click", () => escolherOpcao(index));
        opcoesElement.appendChild(botao);
    });
}

function escolherOpcao(indexOpcao) {
    indiceHistoriaAtual = indexOpcao + 1;
    if (indiceHistoriaAtual >= historia.length) {
        indiceHistoriaAtual = 0;
    }
    exibirCena();
}

function iniciarAventura() {
    indiceHistoriaAtual = 0;
    exibirCena();
}
