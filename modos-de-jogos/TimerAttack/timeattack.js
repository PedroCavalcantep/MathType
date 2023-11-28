let tempoInicial = 60;
let display = document.querySelector("#timer-js");
let conta = document.querySelector("#pergunta");
let resultado;
let acertos = 0;
let erros = 0;

function timerInicial(segundos) {
  checarPlacar();
  let contador = setInterval(function () {
    display.textContent = segundos;
    if (segundos <= 0) {
      clearInterval(contador);
      gerarPergunta();
      iniciarTimer(30);
    } else {
      segundos--;
    }
  }, 1000);
}

function iniciarTimer(segundos) {
  document.getElementById("input-js").innerHTML = mostrarInput();
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
  if (num1 == 0 || num1 == 1) {
    num1 += 3;
  } else if (num2 == 0 || num2 == 1) {
    num2 += 3;
  }
  let Pergunta = num1 + " X " + num2;
  conta.textContent = Pergunta;
  resultado = num1 * num2;
}

function checarResposta() {
  let resposta = document.querySelector("#resposta").value;
  if (resultado == resposta) {
    document.querySelector("#resposta").value = "";
    acertos++;
    checarPlacar();

    gerarPergunta();
  } else {
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
  <div class="container1">

    <div class="box">

      <div class="text-content">
        <p class="text">Resultado</p>
      </div>

        <div class="txt-content">
          <p id="acertos" class="txt1">acertos  <span class="badge bg-primary rounded-pill">${acertos}</span></p>
          <p id="erros" class="txt1">Erros  <span class="badge bg-primary rounded-pill">${erros}</span></p>
        </div>


        <div class="btn-content">
          <a href="/modos-de-jogos/TimerAttack/timerattack.html" class="btn btn-outline-primary" id="btn2" style="width: 200px;">Reiniciar<a>
          <a href="/views/home.html" class="btn btn-outline-primary" id="btn3" style="width: 200px;">Sair</a>
    
    </div>


  </div>
  `;
}
function mostrarInput() {
  return `
  <input
          type="number"
          id="resposta"
          autofocus
          autocomplete="off"
          suggestions="off"
          onkeydown="keyPressCheck()"
          class="text-center fw-bold pedroxd"
          placeholder="Digite o resultado..."
          style="background-color: #1e1e1e; height: 60px; width: 300px" />
          `;
}
