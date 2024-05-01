//27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

rl.question("Introduce un número entre 0 y 10: ", function(num) {
  if (!isNaN(num) && parseInt(num) >= 0 && parseInt(num) <= 10) {
    tablaMultiplicar(parseInt(num));
  } else {
    console.log("Debes introducir un número válido entre 0 y 10.");
  }
  rl.close();
});
