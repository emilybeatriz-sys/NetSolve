let contador = 0;
const btn = document.getElementById("btn-interativo");
const msg = document.getElementById("mensagem");
btn.onclick = function() {
  const nome = prompt('Qual é o seu nome?');
  contador = contador + 1;  
  if (contador < 5) {
    msg.innerHTML = "Olá, " + nome + "! Você clicou " + contador + " vez(es). Continue!";
  }else if (contador < 10) {
    msg.innerHTML = "Olá, " + nome + "! Você clicou " + contador + " vez(es). Quase lá!";
  }else {
    msg.innerHTML = "Limite de 10 cliques atingido, " + nome + "!";
  }
};
function zerar() {
  contador = 0;
  msg.innerHTML = "Contador zerado! Clique novamente para recomeçar.";
}

document.getElementById("btn-zerar")
  .addEventListener("click", zerar);







