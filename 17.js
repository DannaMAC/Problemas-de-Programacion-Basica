//Autor: Danna Maribel Corral Salcedo
//17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el
//segundo sea mayor o igual que el primero.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarYSumarMultiplosDeDos(numero1, numero2) {
    let contador = 0;
    let suma = 0;

    for (let i = numero1; i <= numero2; i++) {
        if (i % 2 === 0) {
            console.log(i);
            contador++;
            suma += i;
        }
    }

    console.log(`Total de múltiplos de 2: ${contador}`);
    console.log(`Suma de múltiplos de 2: ${suma}`);
}

rl.question("Introduce el primer número: ", function(numero1) {
    rl.question("Introduce el segundo número: ", function(numero2) {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        
        contarYSumarMultiplosDeDos(numero1, numero2);
        rl.close();
    });
});
