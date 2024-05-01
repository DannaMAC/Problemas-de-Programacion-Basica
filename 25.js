//25.- Introducir un número menor de 5000 y pasarlo a numero romano.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numeroARomano(num) {
  const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let resultado = '';
  for (let i = 0; i < valores.length; i++) {
    while (num >= valores[i]) {
      resultado += romanos[i];
      num -= valores[i];
    }
  }
  return resultado;
}

rl.question("Introduce un número menor de 5000: ", function(num) {
  if (!isNaN(num) && parseInt(num) < 5000 && parseInt(num) > 0) {
    console.log(numeroARomano(parseInt(num)));
  } else {
    console.log("Debes introducir un número válido menor de 5000 y mayor que 0.");
  }
  rl.close();
});



