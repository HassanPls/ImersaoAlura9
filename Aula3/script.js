rodada = 1;
while (rodada <= 3) {
    

    escolhaJogador = prompt(`Nível ${rodada} - Escolha o vidro (1, 2 ou 3): `);
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (pisoQuebrado == escolhaJogador) {
        alert("Você caiu e quebrou o vidro! Você perdeu!");
        rodada = 10;
    } else {
        alert(`Você escolheu o vidro ${escolhaJogador} e não caiu! Vidro quebrado: ${pisoQuebrado}`);
    }
    rodada++;

} 

if (rodada != 10) {
    alert("Você venceu! Parabéns!");
}
