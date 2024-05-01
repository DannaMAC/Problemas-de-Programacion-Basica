//23.- Hacer un programa que imprima los números del 0 al 100, controlando las filas y las
//columnas.

function imprimirNumeros() {
    let count = 0;
    for (let i = 0; i <= 10; i++) {
      let row = "";
      for (let j = 0; j <= 10; j++) {
        row += count + "\t";
        count++;
      }
      console.log(row);
    }
  }
  
  imprimirNumeros();
  