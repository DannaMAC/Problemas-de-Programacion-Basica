//22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada
//impresión ir desplazada cuatro columnas hacia la derecha.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa una frase: ', function(input) {
  for (let i = 0; i < 5; i++) {
    console.log(input.padStart(input.length + 4));
  }
  rl.close();
});