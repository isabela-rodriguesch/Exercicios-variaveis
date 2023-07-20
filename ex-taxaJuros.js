let montante = 90000;
let capital = 60000;
let numMeses = 24;
let divisaoMeses = 1 / numMeses;

let divisaoMontCapit = montante / capital;
let potenciaMontCapit = Math.pow(divisaoMontCapit, divisaoMeses);
let iTaxaJuros = (potenciaMontCapit - 1) * 100;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${iTaxaJuros} pois após ${numMeses} meses você teve que pagar ${montante} reais.`);