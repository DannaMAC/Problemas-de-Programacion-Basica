//Autor: Danna Maribel Corral Salcedo 
//8.- Hacer un programa que solo nos permita introducir S o N.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarRespuesta() {
  rl.question('Introduzca "S" o "N":', (respuesta) => {
    if (respuesta.toUpperCase() === 'S' || respuesta.toUpperCase() === 'N') {
      console.log("Respuesta válida:", respuesta.toUpperCase());
      rl.close();
    } else {
      console.log("Respuesta inválida. Intente de nuevo.");
      validarRespuesta();
    }
  });
}

validarRespuesta();
