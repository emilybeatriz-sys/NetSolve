// let — pode mudar de valor (perfeito para o contador)
let contador = 0;
const btn = document.getElementById("btn-interativo");
const msg = document.getElementById("mensagem");
btn.onclick = function() {
  const nome = prompt('Qual é o seu nome?');
  contador = contador + 1;  // incrementa o contador
  // Number (contador) + String (nome) na mesma mensagem
  msg.innerHTML = "Ola, " + nome + "! Voce clicou " + contador + " vez(es).";
};






