const screenGame = document.querySelector("#visor");
const spanScreenGame = screenGame.querySelectorAll("span");
const form = document.querySelector("form");
const input = document.getElementById("digitar");
const btn = document.getElementById("btn");

const hit = []; //quando clicar adicionar um hit , e ela vai ficando mais puta (3) medio (5) max.

const asked = []; //para perguntas ja feitas

let palavras = [];

const defaultAnswers = {
  creator: [
    "meu nome é gaby",
    "fui criada 08/03/2023, então minha idade é ... é ... não sei, faz as contas aê",
  ],
  normal: [
    // `Essa ai é facil${response}, manda uma mais dificil.`,
    `Essa não existe você que inventou!`,
    `uee essa nem eu sabia vivendo e aprendendo.`,
    // `Essa eu sei é ${response} né?`,
  ],

  mid: [
    `tá me zoando? porque se você estiver!!`,
    `Essa eu seii, mas não vou te dizer!`,
  ],

  angry: [
    `Essa dai eu não vou nem responder de tão idiota que é.`,
    `Hmm...Sei lá.`,
    `Seii naumm ... e nem quero saber!!`,
    `destruidor-kun?`,
  ],

  glass: [
    `Ohh Ohh não toca no meu vidro porfavor que é importado!`,
    `Ohh Ohh tira a patinha vaii`,
    `Tua mãe não te deu modos?`,
    `Eu juro que se quebrar eu vou ficar muito puta contigo!!`,
  ],

  extra: [`Não sei`, `Você que sabe`, `Tanto faz`, `Qualquer coisa`], //modo namorada!
};

const { creator, normal, mid, angry } = defaultAnswers;

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < spanScreenGame.length; i++) {
  spanScreenGame[i].addEventListener("click", () => {
    spanScreenGame[i].style.zIndex = 0;
  });
}

function limparPalavras() {
  palavras = [];
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("enviado");
  // ja sabe a resposta!!
  if (palavras.includes("seu") && palavras.includes("nome")) {
    tempoResposta(creator[0]);
    limparPalavras();
  }
  if (palavras.includes("sua") && palavras.includes("idade")) {
    tempoResposta(creator[1]);
    limparPalavras();
  }
  // ainda nao sabe a reposta!!
  if (palavras.includes(input.value)) {
    console.log("responder");
  } else {
    let responseNormal = random(0, defaultAnswers.normal.length);
    normal[responseNormal];
  }
});

function tempoResposta(valor) {
  setTimeout(() => {
    console.log(valor);
  }, 1000);
}

input.addEventListener("keydown", (event) => {
  if (event.code === "Space" && input.value.trim() !== "") {
    palavras.push(input.value.trim());
    input.value = ""; // Limpa a entrada
    removePalavrasRepetidas(palavras);
  }
});

function removePalavrasRepetidas(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      arr.splice(i, 1);
      i--;
    }
  }
}
