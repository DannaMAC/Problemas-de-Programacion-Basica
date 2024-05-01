//Autor: Danna Maribel Corral Salcedo
//39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el
//segundo 2, el tercero 3 y así sucesivamente.

function crearTabla(paginas, filas, columnas) {
    let numero = 1;
    for (let pagina = 1; pagina <= paginas; pagina++) {
      console.log(`Página ${pagina}:`);
      for (let fila = 1; fila <= filas; fila++) {
        const filaTabla = [];
        for (let columna = 1; columna <= columnas; columna++) {
          filaTabla.push(numero++);
        }
        console.log(filaTabla.join("\t"));
      }
      console.log("\n");
    }
  }
  
  crearTabla(3, 4, 5);
  