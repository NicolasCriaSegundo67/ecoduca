const perguntas=[
{pergunta:'Qual atitude ajuda o meio ambiente?',opcoes:['Lixo no chão','Reciclar','Desperdiçar água','Poluir rios'],correta:1},
{pergunta:'Qual energia é limpa?',opcoes:['Carvão','Petróleo','Solar','Gasolina'],correta:2},
{pergunta:'Como economizar água?',opcoes:['Banho longo','Fechar torneira','Lavar calçada','Mangueira ligada'],correta:1},
{pergunta:'Qual prática é sustentável?',opcoes:['Desmatamento','Poluição','Economizar água','Queimar lixo'],correta:2},
{pergunta:'O que é reciclagem?',opcoes:['Jogar fora','Reutilizar materiais','Queimar','Poluir'],correta:1},
{pergunta:'Qual é renovável?',opcoes:['Carvão','Petróleo','Solar','Diesel'],correta:2},
{pergunta:'O que reduz poluição?',opcoes:['Mais carros','Transporte público','Queimar lixo','Desmatamento'],correta:1},
{pergunta:'O que economiza energia?',opcoes:['Luz ligada','Desligar aparelhos','TV ligada','Ar ligado'],correta:1},
{pergunta:'Qual prejudica o clima?',opcoes:['CO2','Oxigênio','Água','Vento'],correta:0},
{pergunta:'Qual ajuda o planeta?',opcoes:['Reciclar','Poluir','Desmatar','Desperdiçar'],correta:0}
];
let atual=0;
function carregarPergunta(){
document.getElementById('pergunta').innerText=perguntas[atual].pergunta;
for(let i=0;i<4;i++)document.getElementById('op'+i).innerText=perguntas[atual].opcoes[i];
}
function responder(opcao){
document.getElementById('resultado').innerText=opcao===perguntas[atual].correta?'✅ Acertou!':'❌ Errou!';
atual++;
if(atual<perguntas.length)setTimeout(()=>{document.getElementById('resultado').innerText='';carregarPergunta()},800);
else document.getElementById('pergunta').innerText='🎉 Quiz finalizado!';
}
function calcularAgua(){
const minutos=Number(document.getElementById('banho').value);
const litros=minutos*12;
const res=document.getElementById('economiaResultado');
if(minutos===67)res.innerText='🔥 Você farmou aura';
else if(minutos===0)res.innerText='💀 Você fede';
else res.innerText=`🚿 Você gastou aproximadamente ${litros} litros de água.`;
}
const emojis=['♻️','♻️','💧','💧','🌳','🌳','⚡','⚡','☀️','☀️','🌎','🌎'];
emojis.sort(()=>Math.random()-0.5);
const game=document.getElementById('memory-game');
let primeira=null,segunda=null;
emojis.forEach(e=>{
const card=document.createElement('div');
card.className='memory-card';
card.dataset.emoji=e;
card.innerText=e;
card.onclick=()=>{
if(card.classList.contains('flipped'))return;
card.classList.add('flipped');
if(!primeira)primeira=card;
else{
segunda=card;
if(primeira.dataset.emoji!==segunda.dataset.emoji){
setTimeout(()=>{primeira.classList.remove('flipped');segunda.classList.remove('flipped');primeira=null;segunda=null},700);
}else{primeira=null;segunda=null}
}
};
game.appendChild(card);
});
carregarPergunta();