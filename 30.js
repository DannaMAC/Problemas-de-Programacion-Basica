//30.- Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su
//multiplicación o su división.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function operaciones(a, b) {
  console.log("1. Suma");
  console.log("2. Resta");
  console.log("3. Multiplicación");
  console.log("4. División");

  rl.question("Seleccione una opción: ", function(opcion) {
    switch (parseInt(opcion)) {
      case 1:
        console.log(`La suma de ${a} y ${b} es ${a + b}`);
        break;
      case 2:
        console.log(`La resta de ${a} y ${b} es ${a - b}`);
        break;
      case 3:
        console.log(`La multiplicación de ${a} y ${b} es ${a * b}`);
        break;
      case 4:
        if (b !== 0) {
          console.log(`La división de ${a} y ${b} es ${a / b}`);
        } else {
          console.log("No se puede dividir por cero.");
        }
        break;
      default:
        console.log("Opción no válida.");
        break;
    }
    rl.close();
  });
}

rl.question("Ingrese el primer número: ", function(a) {
  rl.question("Ingrese el segundo número: ", function(b) {
    operaciones(parseInt(a), parseInt(b));
  });
});
