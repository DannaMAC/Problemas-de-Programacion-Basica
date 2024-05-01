//18.- Hacer un programa que cuente las veces que aparece una determinada letra en una frase
//que introduciremos por teclado.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarLetra(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

rl.question("Introduce una frase: ", function(fraseUsuario) {
    rl.question("Introduce la letra que deseas contar: ", function(letraBuscada) {
        const cantidad = contarLetra(fraseUsuario, letraBuscada);
        console.log(`La letra "${letraBuscada}" aparece ${cantidad} veces en la frase.`);
        rl.close();
    });
});

