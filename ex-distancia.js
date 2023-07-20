let x1 = 1;
let x2 = 1;
let y1 = 1;
let y2 = 4;

let subtracao1 = x2 - x1;
let subtracao2 = y2 - y1;

let potencia1 = Math.pow(subtracao1, 2);
let potencia2 = Math.pow(subtracao2, 2);

let somaD = potencia1 + potencia2;
let raizQuadrada = Math.sqrt(somaD);

console.log(`A distância entre esses 2 pontos é ${raizQuadrada}.`)
