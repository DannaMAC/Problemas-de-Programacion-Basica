//Autor: Danna Maribel Corral Salcedo
//28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function lanzarMoneda() {
  return Math.random() < 0.5 ? 'Cara' : 'Cruz';
}

console.log("Lanzando la moneda...");

rl.question("Presiona Enter para lanzar la moneda...", function() {
  console.log(lanzarMoneda());
  rl.close();
});
