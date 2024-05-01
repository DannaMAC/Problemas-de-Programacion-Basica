//41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
//ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function darAlta() {
  rl.question("Ingrese el ID: ", function(id) {
    rl.question("Ingrese el nombre: ", function(nombre) {
      rl.question("Ingrese los apellidos: ", function(apellidos) {
        rl.question("Ingrese la dirección: ", function(direccion) {
          rl.question("Ingrese el estado: ", function(estado) {
            const registro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;
            fs.appendFile('DATOS.DAT', registro, function(err) {
              if (err) throw err;
              console.log("Registro agregado correctamente.");
              rl.close();
            });
          });
        });
      });
    });
  });
}

darAlta();

