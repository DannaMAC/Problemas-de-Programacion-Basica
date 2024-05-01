//Autor: Danna Maribel Corral Salcedo
//15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
//números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
//Calcular la suma de los impares.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function imprimirNaturalesContarParesImpares() {
    rl.question("Introduce el primer número: ", function(numero1) {
        rl.question("Introduce el segundo número: ", function(numero2) {
            numero1 = parseInt(numero1);
            numero2 = parseInt(numero2);

            let contadorPares = 0;
            let sumaImpares = 0;

            for (let i = numero1; i <= numero2; i++) {
                console.log(i);
                if (i % 2 === 0) {
                    contadorPares++;
                } else {
                    sumaImpares += i;
                }
            }

            console.log(`Total de números pares: ${contadorPares}`);
            console.log(`Suma de números impares: ${sumaImpares}`);

            rl.close();
        });
    });
}

imprimirNaturalesContarParesImpares();
