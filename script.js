const form      = document.querySelector('#formCadastro');
const inputNome = document.querySelector('#inputNome');
const erroNome  = document.querySelector('#erroNome');
const lista     = document.querySelector('#lista');

inputNome.setAttribute('autocomplete', 'off');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  cadastrar();
});

function cadastrar() {
  const nome = inputNome.value.trim();
  const card = document.createElement('div');
  card.classList.add('card');

  const texto = document.createElement('span');
  texto.textContent = nome;

  const btn = document.createElement('button');
  btn.textContent = 'Excluir';
  btn.classList.add('btn-excluir');

  card.appendChild(texto);
  card.appendChild(btn);
  lista.appendChild(card);

  inputNome.value = '';
  inputNome.focus();

  btn.addEventListener('click', function() {
    // parentElement navega do botão para o card pai
    btn.parentElement.remove();
  });

 if (nome === '') {
    erroNome.classList.remove('oculto'); 
    return;
  }
  erroNome.classList.add('oculto');
}





