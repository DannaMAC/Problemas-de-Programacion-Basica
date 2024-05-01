//Autor: Danna Maribel Corral Salcedo
//33.- Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
//en un arreglo y calcule e imprima su media.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
  function calcularMedia(calificaciones) {
    let suma = 0;
    calificaciones.forEach(calificacion => suma += calificacion);
    return suma / calificaciones.length;
  }
  
  const calificaciones = [];
  
  rl.question("Ingrese las calificaciones de 10 asignaturas (separadas por espacios): ", function(input) {
    const calificacionesArray = input.split(" ").map(parseFloat);
    if (calificacionesArray.length === 10 && calificacionesArray.every(calificacion => !isNaN(calificacion))) {
      console.log(`La media de calificaciones es: ${calcularMedia(calificacionesArray)}`);
    } else {
      console.log("Debes ingresar 10 calificaciones válidas.");
    }
    rl.close();
  });
  
