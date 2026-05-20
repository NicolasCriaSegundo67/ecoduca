const perguntas = [
    {
        pergunta: "Qual atitude ajuda o meio ambiente?",
        opcoes: ["Jogar lixo no chão", "Reciclar materiais", "Desperdiçar água"],
        correta: 1
    },
    {
        pergunta: "Qual energia é limpa?",
        opcoes: ["Solar", "Carvão", "Petróleo"],
        correta: 0
    },
    {
        pergunta: "O que economiza água?",
        opcoes: ["Banho longo", "Fechar torneira", "Lavar calçada"],
        correta: 1
    },
    {
        pergunta: "Qual é reciclável?",
        opcoes: ["Plástico", "Comida", "Folha seca"],
        correta: 0
    },
    {
        pergunta: "Qual ação ajuda o planeta?",
        opcoes: ["Desmatamento", "Poluição", "Plantio de árvores"],
        correta: 2
    },
    {
        pergunta: "Qual é uma energia renovável?",
        opcoes: ["Solar", "Gasolina", "Carvão"],
        correta: 0
    },
    {
        pergunta: "O que é reciclagem?",
        opcoes: ["Queimar lixo", "Reutilizar materiais", "Jogar fora"],
        correta: 1
    },
    {
        pergunta: "Como economizar energia?",
        opcoes: ["Deixar luz ligada", "Desligar aparelhos", "Abrir geladeira"],
        correta: 1
    },
    {
        pergunta: "Qual gás prejudica o planeta?",
        opcoes: ["Oxigênio", "CO2", "Nitrogênio"],
        correta: 1
    },
    {
        pergunta: "Qual prática é sustentável?",
        opcoes: ["Economizar água", "Poluir rios", "Queimar lixo"],
        correta: 0
    }
];

let atual = 0;

function carregarPergunta() {
    document.getElementById("pergunta").innerText =
        perguntas[atual].pergunta;

    document.getElementById("op0").innerText =
        perguntas[atual].opcoes[0];

    document.getElementById("op1").innerText =
        perguntas[atual].opcoes[1];

    document.getElementById("op2").innerText =
        perguntas[atual].opcoes[2];
}

function responder(opcao) {
    const resultado =
        document.getElementById("resultado");

    if (opcao === perguntas[atual].correta) {
        resultado.innerText =
            "✅ Resposta correta!";
    } else {
        resultado.innerText =
            "❌ Resposta errada!";
    }

    atual++;

    if (atual < perguntas.length) {
        setTimeout(() => {
            resultado.innerText = "";
            carregarPergunta();
        }, 1000);
    } else {
        document.getElementById("pergunta")
            .innerText = "🎉 Quiz Finalizado!";

        document.getElementById("op0").style.display = "none";
        document.getElementById("op1").style.display = "none";
        document.getElementById("op2").style.display = "none";
    }
}

function calcularAgua() {

    const minutos =
        Number(document.getElementById("banho").value);

    const litrosPorMinuto = 12;

    const litros =
        minutos * litrosPorMinuto;

    const resultado =
        document.getElementById("economiaResultado");

    if (minutos === 0) {
        resultado.innerText =
            "💀 Você fede";
    } else {
        resultado.innerText =
            `🚿 Você gastou aproximadamente ${litros} litros de água.`;
    }
}

carregarPergunta();