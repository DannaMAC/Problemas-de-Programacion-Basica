//Autor: Danna Maribel Corral Salcedo
//36.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su
//matriz transpuesta.

function generarMatriz(filas, columnas) {
    const matriz = [];
    for (let i = 0; i < filas; i++) {
      const fila = [];
      for (let j = 0; j < columnas; j++) {
        fila.push(Math.floor(Math.random() * 100) + 1);
      }
      matriz.push(fila);
    }
    return matriz;
  }
  
  function transponerMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    const matrizTranspuesta = [];
    for (let j = 0; j < columnas; j++) {
      const fila = [];
      for (let i = 0; i < filas; i++) {
        fila.push(matriz[i][j]);
      }
      matrizTranspuesta.push(fila);
    }
    return matrizTranspuesta;
  }
  
  function imprimirMatriz(matriz) {
    matriz.forEach(fila => console.log(fila.join("\t")));
  }
  
  const matriz = generarMatriz(4, 5);
  console.log("Matriz generada:");
  imprimirMatriz(matriz);
  
  const matrizTranspuesta = transponerMatriz(matriz);
  console.log("\nMatriz transpuesta:");
  imprimirMatriz(matrizTranspuesta);
  