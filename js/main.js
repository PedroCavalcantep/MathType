let tempoInicial = 60;
let display = document.querySelector("#timer-js");
let conta = document.querySelector("#pergunta");
let resultado;
let acertos = 0;
let erros = 0;

function timerInicial(segundos) {
  let contador = setInterval(function () {
    display.textContent = segundos;
    if (segundos <= 0) {
      clearInterval(contador);
      gerarPergunta();
      iniciarTimer(29);
    } else {
      segundos--;
    }
  }, 1000);
}

function iniciarTimer(segundos) {
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
  <div>
      <ul class="list-group check">
        <li id="acertosfinal" class="list-group-item lista" style="width: 300px">
          <label class="form-check-label txt" for="firstCheckbox">Acertos</label>
          <span id="acertos" class="badge bg-primary rounded-pill">6</span>
        </li>
        <br />
        <li id="errosfinal" class="list-group-item lista" style="width: 200px">
          <label class="form-check-label txt" for="secondCheckbox">Erros</label>
          <span id="erros" class="badge bg-primary rounded-pill">2</span>
        </li>
      </ul>
      <div class="btns">
        <button id="btnhome" class="btn btn-secondary">teste</button>
        <button id="btnreset" class="btn btn-secondary">teste</button>
      </div>
    </div>`;
}
