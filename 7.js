//Autor: Danna Maribel Corral Salcedo 
//7.- Introducir tantas frases como queramos y contarlas.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let frases = [];

function ingresarFrase() {
  rl.question('Introduzca una frase (o presione Enter para terminar):', (input) => {
    if (input !== '') {
      frases.push(input);
      ingresarFrase();
    } else {
      console.log("Cantidad de frases introducidas:", frases.length);
      rl.close();
    }
  });
}

ingresarFrase();
