    // Juros Compostos
let capital = 1000;
let iJuros = 0.125;
let tempo = 5;

let potencia = 1 + iJuros;
let potencia1 = Math.pow(potencia, tempo);
let montante = capital * potencia1;

console.log(montante);