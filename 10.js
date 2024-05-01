//10.- Introducir un numero por teclado y que nos diga si es par o impar.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número:', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Error: Ingresa un número válido.");
  } else {
    if (numero % 2 === 0) {
      console.log("El número es par.");
    } else {
      console.log("El número es impar.");
    }
  }

  rl.close();
});
