//14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números que
//vamos introduciendo por teclado.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encontrarMayorMenor() {
    let mayor = Number.MIN_SAFE_INTEGER;
    let menor = Number.MAX_SAFE_INTEGER;

    let i = 0;
    const leerNumero = () => {
        rl.question(`Introduce el número ${i + 1}: `, function(numero) {
            numero = parseFloat(numero);
            mayor = Math.max(mayor, numero);
            menor = Math.min(menor, numero);
            i++;
            if (i < 5) {
                leerNumero();
            } else {
                console.log(`El número mayor es: ${mayor}`);
                console.log(`El número menor es: ${menor}`);
                rl.close();
            }
        });
    };
    
    leerNumero();
}

encontrarMayorMenor();

