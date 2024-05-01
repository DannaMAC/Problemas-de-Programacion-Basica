//38.-Ordenar una matriz de M filas y N columnas por la primera columna utilizando el método
//SHELL (por inserción).

function ordenarMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    let gap = Math.floor(filas / 2);
    while (gap > 0) {
      for (let i = gap; i < filas; i++) {
        const temp = matriz[i];
        let j = i;
        while (j >= gap && matriz[j - gap][0] > temp[0]) {
          matriz[j] = matriz[j - gap];
          j -= gap;
        }
        matriz[j] = temp;
      }
      gap === 2 ? gap = 1 : gap = Math.floor(gap / 2.2);
    }
  }
  
  const matriz = [
    [5, 6, 3],
    [2, 1, 4],
    [9, 8, 7]
  ];
  
  console.log("Matriz antes de ordenar:");
  console.log(matriz);
  
  ordenarMatriz(matriz);
  
  console.log("\nMatriz después de ordenar:");
  console.log(matriz);
  