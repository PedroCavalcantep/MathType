let tempoInicial = 60;
let display = document.querySelector("#timer-js");
let conta = document.querySelector("#pergunta");
let resultado;
let acertos = 0;
let erros = 0;

function teste() {
  display.textContent = "aaaaa";
}

function timerInicial(segundos) {
  checarPlacar();
  let contador = setInterval(function () {
    display.textContent = segundos;
    if (segundos <= 0) {
      clearInterval(contador);
      gerarPergunta();
      iniciarTimer(60);
    } else {
      segundos--;
    }
  }, 1000);
}

function iniciarTimer(segundos) {
  checarPlacar();
  let contador = setInterval(function () {
    display.textContent = segundos;
    if (segundos <= 0) {
      clearInterval(contador);
      document.getElementsByTagName("body")[0].innerHTML = getHTML();
    } else {
      segundos--;
    }
  }, 1000);
  checarPlacar();
}

function gerarPergunta() {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let num3 = Math.floor(Math.random() * 10);
  let num4 = Math.floor(Math.random() * 10);
  if (num1 == 0 || num1 == 1) {
    num1 += 3;
  } else if (num2 == 0 || num2 == 1) {
    num2 += 3;
  }
  let Pergunta = `${num1} X ${num2} + ${num3} X ${num4}`;
  conta.textContent = Pergunta;
  resultado = num1 * num2 + num3 * num4;
  console.log(resultado);
}

function checarResposta() {
  let resposta = document.querySelector("#resposta").value;
  if (resultado == resposta) {
    console.log("acertou");
    document.querySelector("#resposta").value = "";
    acertos++;
    checarPlacar();

    gerarPergunta();
  } else {
    console.log("errou");
    document.querySelector("#resposta").value = "";
    erros++;
    checarPlacar();
    gerarPergunta();
  }
}
function keyPressCheck() {
  if (event.key === "Enter" || event.key === " ") {
    checarResposta();
  }
}
function checarPlacar() {
  document.querySelector("#acertos").innerHTML = acertos;
  document.querySelector("#erros").innerHTML = erros;
}
function getHTML() {
  return `
  <h1>cabo</h1>
  `;
}
