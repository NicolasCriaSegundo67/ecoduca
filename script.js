const perguntas = [
        opcoes: ["Jogar lixo no chão", "Reciclar materiais", "Desperdiçar água"],
        correta: 1
    },
    {
        pergunta: "Qual energia é limpa?",
        opcoes: ["Solar", "Carvão", "Petróleo"],
        correta: 0
    },
    {
        pergunta: "Qual é uma prática sustentável?",
        opcoes: ["Desmatamento", "Economizar água", "Poluição"],
        correta: 1
    },
    {
        pergunta: "Qual material demora mais para se decompor?",
        opcoes: ["Papel", "Casca de banana", "Plástico"],
        correta: 2
    },
    {
        pergunta: "Qual ação economiza energia elétrica?",
        opcoes: ["Deixar luz acesa", "Desligar aparelhos sem uso", "Abrir a geladeira toda hora"],
        correta: 1
    },
    {
        pergunta: "O que significa reciclar?",
        opcoes: ["Jogar lixo no rio", "Reutilizar materiais", "Queimar resíduos"],
        correta: 1
    },
    {
        pergunta: "Qual destas fontes é renovável?",
        opcoes: ["Energia eólica", "Petróleo", "Carvão mineral"],
        correta: 0
    }
];

let atual = 0;

function carregarPergunta() {
    document.getElementById("pergunta").innerText = perguntas[atual].pergunta;

    document.getElementById("op0").innerText = perguntas[atual].opcoes[0];
    document.getElementById("op1").innerText = perguntas[atual].opcoes[1];
    document.getElementById("op2").innerText = perguntas[atual].opcoes[2];
}

function responder(opcao) {
    const resultado = document.getElementById("resultado");

    if (opcao === perguntas[atual].correta) {
        resultado.innerText = "✅ Resposta correta!";
    } else {
        resultado.innerText = "❌ Resposta errada!";
    }

    atual++;

    if (atual < perguntas.length) {
        setTimeout(() => {
            resultado.innerText = "";
            carregarPergunta();
        }, 1000);
    } else {
        document.getElementById("pergunta").innerText = "Quiz Finalizado!";
        document.getElementById("op0").style.display = "none";
        document.getElementById("op1").style.display = "none";
        document.getElementById("op2").style.display = "none";
    }
}

function calcularEconomia() {
    const minutos = Number(document.getElementById("banho").value);
    const resultado = document.getElementById("economiaResultado");

    if (minutos === 0) {
        resultado.innerText = "💀 Você fede";
    } else if (minutos > 10) {
        resultado.innerText =
            "Você pode economizar água diminuindo o tempo do banho!";
    } else {
        resultado.innerText =
            "Parabéns! Seu tempo de banho ajuda na economia de água.";
    }
}

carregarPergunta();