const perguntas = [
  {
    pergunta: "Qual é o nome dos irmãos protagonistas em Supernatural?",
    resposta: ["Sam e Dean", "Michael e Lucifer", "John e Bobby"],
    correta: 0,
  },
  {
    pergunta: "Qual é o carro que os irmãos Winchester dirigem?",
    resposta: ["Camaro", "Impala", "Mustang"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do anjo que se torna um personagem recorrente na série?",
    resposta: ["Gabriel", "Castiel", "Uriel"],
    correta: 1,
  },
  {
    pergunta: "O que aconteceu com a mãe dos irmãos Winchester no episódio piloto?",
    resposta: ["Morreu de velhice", "Foi possuída por um demônio", "Virou vampira"],
    correta: 1,
  },
  {
    pergunta: "Qual é o nome do reino do inferno em Supernatural?",
    resposta: ["Abyss", "Hades", "Hell"],
    correta: 2,
  },
  {
    pergunta: "Qual é o apelido de Crowley, o Rei do Inferno?",
    resposta: ["Moloch", "Baal", "Fergus"],
    correta: 2,
  },
  {
    pergunta: "O que são os Cavaleiros do Apocalipse em Supernatural?",
    resposta: ["Anjos", "Demônios", "Entidades sobrenaturais"],
    correta: 2,
  },
  {
    pergunta: "Quem é o caçador que se torna um mentor para os irmãos Winchester?",
    resposta: ["Bobby Singer", "Rufus Turner", "Ellen Harvelle"],
    correta: 0,
  },
  {
    pergunta: "Qual é o nome da arma capaz de matar quase qualquer ser sobrenatural?",
    resposta: ["Espada de Miguel", "Foice de Death", "Colt"],
    correta: 2,
  },
  {
    pergunta: "Qual é a cidade natal dos irmãos Winchester?",
    resposta: ["Lawrence", "Lebanon", "Lancaster"],
    correta: 0,
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let resposta of item.resposta) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.resposta.indexOf(resposta)
        
        dt.querySelector('input').onchange = (event) => {
           const estaCorreta = event.target.value == item.correta
           
           corretas.delete(item);
           
           if(estaCorreta){
            corretas.add(item)
           }
           mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
          }

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem);
}
