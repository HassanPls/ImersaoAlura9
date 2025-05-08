ganhou = true

for (let index = 1; index <= 4; index++) {
    

    escolhaJogador = prompt(`Nível ${index} - Escolha o vidro (1, 2 ou 3): `);
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (pisoQuebrado == escolhaJogador || escolhaJogador == null) {
        alert("Você caiu e quebrou o vidro! Você perdeu!");
        index = 10;
        ganhou = false
    } else {
        alert(`Você escolheu o vidro ${escolhaJogador} e não caiu! Vidro quebrado: ${pisoQuebrado}`);
    }
} 

if (ganhou == true) {
    alert("Você venceu! Parabéns!");
}
