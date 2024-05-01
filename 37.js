//Autor: Danna Maribel Corral Salcedo
//37.-Cargar las notas de los alumnos de un colegio en función del número de cursos y del número
//de alumnos por curso.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cargarNotas(numCursos, numAlumnosPorCurso, cursoIndex = 0, alumnoIndex = 0, notas = []) {
  if (cursoIndex === numCursos) {
    console.log("Notas cargadas correctamente:");
    console.log(notas);
    rl.close();
    return;
  }

  if (alumnoIndex === 0) {
    console.log(`Curso ${cursoIndex + 1}:`);
  }

  rl.question(`Ingrese la nota del alumno ${alumnoIndex + 1} del curso ${cursoIndex + 1}: `, function(nota) {
    if (!isNaN(nota)) {
      if (!notas[cursoIndex]) {
        notas[cursoIndex] = [];
      }
      notas[cursoIndex].push(parseFloat(nota));
      if (alumnoIndex === numAlumnosPorCurso - 1) {
        cargarNotas(numCursos, numAlumnosPorCurso, cursoIndex + 1, 0, notas);
      } else {
        cargarNotas(numCursos, numAlumnosPorCurso, cursoIndex, alumnoIndex + 1, notas);
      }
    } else {
      console.log("Debes ingresar una nota válida.");
      cargarNotas(numCursos, numAlumnosPorCurso, cursoIndex, alumnoIndex, notas);
    }
  });
}

rl.question("Ingrese el número de cursos: ", function(numCursos) {
  rl.question("Ingrese el número de alumnos por curso: ", function(numAlumnosPorCurso) {
    cargarNotas(parseInt(numCursos), parseInt(numAlumnosPorCurso));
  });
});
