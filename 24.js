//24.- Comprobar si un número mayor o igual que la unidad es primo.

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

rl.question("Introduce un número mayor o igual que la unidad: ", function(num) {
  if (!isNaN(num)) {
    if (esPrimo(parseInt(num))) {
      console.log(`${num} es primo`);
    } else {
      console.log(`${num} no es primo`);
    }
  } else {
    console.log("Debes introducir un número válido.");
  }
  rl.close();
});

  
