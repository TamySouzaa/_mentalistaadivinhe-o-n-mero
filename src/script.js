var numeroSecreto = Math.floor(Math.random() * 50) + 1;
var tentativas = 0;
var chute;

while (chute !== numeroSecreto && tentativas <= 9) {
  chute = parseInt(prompt('Digite um número de 1 a 50. Você tem apenas 10 tentativas.'));

  if (chute >= 1 && chute <= 50) {
    tentativas++;
    if (chute === numeroSecreto) {
      alert('🟢 Parabéns, você acertou após ' + tentativas + ' tentativas! ');
    } else if (chute > numeroSecreto){
      alert('❌ O número é menor que ' + chute + ', tente novamente!');
    } else {
      alert('❌ O número é maior que ' + chute + ', tente novamente!');
    }
  } else {
    alert('Por favor, digite um número válido de 1 a 50.');
  }
}

if (tentativas >= 10) {
  alert('Fim do jogo. Limite de tentativas excedido! O número secreto era ' + numeroSecreto + '.');
}



