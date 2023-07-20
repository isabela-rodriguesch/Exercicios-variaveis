let populacao = 1000;
let transmissao = 4;
let tempo = 100;

let potenciaTempo = tempo / 7;
let transmissaoTempo = Math.pow(transmissao, potenciaTempo);

let totalInfectados = populacao * transmissaoTempo;
console.log(`O total de pessoas infectadas será de ${totalInfectados}`);
