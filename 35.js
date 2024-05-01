//35.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e
//imprimirla.

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
  
  function imprimirMatriz(matriz) {
    matriz.forEach(fila => console.log(fila.join("\t")));
  }
  
  const matriz = generarMatriz(4, 5);
  console.log("Matriz generada:");
  imprimirMatriz(matriz);
  