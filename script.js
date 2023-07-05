let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let gameOver = false;

function checkChute() {
  if (gameOver) return;

  const chuteInput = document.getElementById('chuteInput');
  const chute = parseInt(chuteInput.value);

  if (isNaN(chute) || chute < 1 || chute > 100) {
    validaChute('Por favor, insira um número válido entre 1 e 100.', 'linear-gradient(rgb(243, 156, 18), transparent)');
    return;
  }
  tentativas++;

  if (chute === numeroSecreto) {
    gameOver = true;
    validaChute(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`, 'linear-gradient(rgb(0, 128, 0), transparent)');
  } else if (chute < numeroSecreto) {
    validaChute('Tente um número maior.', 'linear-gradient(rgb(178, 34, 34), transparent)');
  } else {
    validaChute('Tente um número menor.', 'linear-gradient(rgb(178, 34, 34), transparent)');
  }

  chuteInput.value = '';
}

function validaChute(mensagem, gradiente) {
  const container = document.querySelector('.container');
  if(container.style.background != gradiente){
    container.style.background = gradiente;
    container.classList.add('animate-background'); 
    setTimeout(() => {
      container.classList.remove('animate-background'); 
    }, 1000);
  } 
  const mensagemElement = document.getElementById('mensagem');
  mensagemElement.textContent = mensagem;
}

function resetGame() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  gameOver = false;
  validaChute('');
  document.getElementById('chuteInput').value = '';
  const container = document.querySelector('.container');
  container.style.background = 'linear-gradient(rgba(30, 140, 153,0.9), transparent)';
}