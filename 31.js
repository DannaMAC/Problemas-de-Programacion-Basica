//31.- Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
//las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
//multiplicar.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPrimo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

rl.question("Introduce un número: ", function(num) {
  if (!isNaN(num)) {
    console.log(`¿Es primo?: ${esPrimo(parseInt(num))}`);
    console.log(`Factorial: ${factorial(parseInt(num))}`);
    console.log("Tabla de multiplicar:");
    tablaMultiplicar(parseInt(num));
  } else {
    console.log("Debes introducir un número válido.");
  }
  rl.close();
});

