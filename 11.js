//11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por
//teclado.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarMultiplosDeTres(numero) {
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0) {
            console.log(i);
            contador++;
        }
    }
    console.log(`Total de múltiplos de 3: ${contador}`);
}

rl.question("Introduce un número: ", function(numeroIntroducido) {
  numeroIntroducido = parseInt(numeroIntroducido);
  contarMultiplosDeTres(numeroIntroducido);
  rl.close();
});
