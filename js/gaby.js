const screenGame = document.querySelector("#visor")
const spanScreenGame = screenGame.querySelectorAll("span")

const input = document.querySelector("#digitar");
const btn = document.querySelector("#btn");


const hit = []; //quando clicar adicionar um hit , e ela vai ficando mais puta (3) medio (5) max.
const asked = []; //para perguntas ja feitas

// const defaultAnswers = {
//   normal: [
//     `Essa ai é facil${response}, manda uma mais dificil.`,
//     `Essa não existe você que inventou!`,
//     `uee essa nem eu sabia vivendo e aprendendo.`,
//     `Essa eu sei é ${response} né?`,
//   ],

//   mid: [
//     `tá me zoando? porque se você estiver!!`,
//     `Essa eu seii, mas não vou te dizer!`,
//   ],

//   angry: [
//     `Essa dai eu não vou nem responder de tão idiota que é.`,
//     `Hmm...Sei lá.`,
//     `Seii naumm ... e nem quero saber!!`,
//     `destruidor-kun?`,
//   ],

//   glass: [
//     `Ohh Ohh não toca no meu vidro porfavor que é importado!`,
//     `Ohh Ohh tira a patinha vaii`,
//     `Tua mãe não te deu modos?`,
//     `Eu juro que se quebrar eu vou ficar muito puta contigo!!`,
//   ],

//   extra: [`Não sei`, `Você que sabe`, `Tanto faz`, `Qualquer coisa`], //modo namorada!
// };

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

for(let i = 0; i< spanScreenGame.length; i++){
    spanScreenGame[i].addEventListener('click', ()=>{
        spanScreenGame[i].style.display = "none"
    })
}