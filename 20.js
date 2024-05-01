//20.- Calcular el factorial de un número, mediante funciones.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

rl.question("Introduce un número para calcular su factorial: ", function(numeroFactorial) {
    numeroFactorial = parseInt(numeroFactorial);
    const resultadoFactorial = calcularFactorial(numeroFactorial);
    console.log(`El factorial de ${numeroFactorial} es ${resultadoFactorial}.`);
    rl.close();
});

