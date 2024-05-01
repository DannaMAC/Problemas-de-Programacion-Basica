//Autor: Danna Maribel Corral Salcedo
//34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la lista.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function buscarNota() {
  const calificaciones = [];
  rl.question("Ingrese las calificaciones del alumno en 10 asignaturas (separadas por espacios): ", function(input) {
    const notas = input.split(' ').map(parseFloat);
    if (notas.length !== 10 || notas.some(isNaN)) {
      console.log("Debe ingresar 10 calificaciones válidas.");
      rl.close();
      return;
    }
    rl.question("Ingrese la nota que desea buscar: ", function(nota) {
      const notaBuscada = parseFloat(nota);
      if (isNaN(notaBuscada)) {
        console.log("Debe ingresar una nota válida.");
        rl.close();
        return;
      }
      const encontrado = notas.includes(notaBuscada);
      if (encontrado) {
        console.log(`La nota ${notaBuscada} fue encontrada en las calificaciones del alumno.`);
      } else {
        console.log(`La nota ${notaBuscada} no fue encontrada en las calificaciones del alumno.`);
      }
      rl.close();
    });
  });
}

buscarNota();
