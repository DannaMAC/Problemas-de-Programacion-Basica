//Autor: Danna Maribel Corral Salcedo 
//9.- Introducir un número por teclado y que nos diga si es positivo o negativo.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número:', (input) => {
  const numero = parseFloat(input);

  if (isNaN(numero)) {
    console.log("Error: Ingrese un número válido.");
  } else {
    if (numero > 0) {
      console.log("El número es positivo.");
    } else if (numero < 0) {
      console.log("El número es negativo.");
    } else {
      console.log("El número es cero.");
    }
  }

  rl.close();
});

