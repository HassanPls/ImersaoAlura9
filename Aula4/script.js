personagens = ["", "", ""];
viloes = ["", "", ""];
viloesPossiveis = [
    "Thanos",
    "Darth Vader",
    "Coringa",
    "Loki",
    "Ultron",
    "Venom",
    "Magneto",
    "Lex Luthor",
    "Ghostface",
    "Penny Wise",
];
forcaPersonagem = 0;
forcaViloes = 0;

for (let i = 0; i < 3; i++) {
  personagens[i] = prompt("Digite o nome do personagem " + (i + 1) + ": ");
  forcaPersonagem += Math.floor(Math.random() * 10) + 1;
  viloes[i] = viloesPossiveis[Math.floor(Math.random() * 10)];
  forcaViloes += Math.floor(Math.random() * 10) + 1;
}

if (forcaPersonagem > forcaViloes) {
    alert("Os personagens venceram os vilões! Sua força foi "+ forcaPersonagem);
} else if (forcaPersonagem < forcaViloes) {
    alert("Os vilões venceram os personagens! Sua força foi "+ forcaViloes);
} else {
    alert("Empate! Ambos os lados têm a mesma força de " + forcaPersonagem);
}