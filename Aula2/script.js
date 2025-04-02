idade = prompt("Digite sua idade");
if (idade < 18) {
  alert("Você NÃO pode jogar jokenpo!");
} else {
  escolhaJogador = prompt("Digite 1-pedra, 2-papel ou 3-tesoura: ");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  function textChoice(escolha) {
    if (escolha == 1) {
        return "Pedra";
    } else if (escolha == 2) {
        return "Papel";
    } else if (escolha == 3) {
        return "Tesoura";
    } else {
        return null;
    }
  }

  if (escolhaJogador == escolhaComputador) {
    alert("Empate! " + textChoice(escolhaJogador) + " contra " + textChoice(escolhaComputador));
  } else if (
    (escolhaJogador == 1 && escolhaComputador == 3) ||
    (escolhaJogador == 2 && escolhaComputador == 1) ||
    (escolhaJogador == 3 && escolhaComputador == 2)
  ) {
    alert("Você ganhou! " + textChoice(escolhaJogador) + " contra " + textChoice(escolhaComputador));
  } else {
    alert("Você perdeu! "+ textChoice(escolhaJogador) + " contra " + textChoice(escolhaComputador));
  }
}

// comentário: alert("Vamos começar a jogar!")
