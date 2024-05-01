//26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function imprimirCentrado(frase) {
  const espacio = Math.floor((process.stdout.columns - frase.length) / 2);
  console.log(" ".repeat(espacio) + frase);
}

rl.question("Introduce una frase: ", function(frase) {
  imprimirCentrado(frase);
  rl.close();
});
