//6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un
//número que introducimos por teclado.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un número:', (input) => {
  const limite = parseInt(input);

  if (isNaN(limite)) {
    console.log("Error: Ingrese un número válido.");
  } else {
    for (let i = 1; i <= limite; i++) {
      console.log(i);
    }
  }

  rl.close();
});
