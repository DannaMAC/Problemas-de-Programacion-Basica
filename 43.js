//43.- Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones
//cuantas veces deseemos.

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function realizarModificaciones() {
  rl.question("Ingrese el ID del registro a modificar: ", function(id) {
    rl.question("Ingrese el nuevo estado: ", function(nuevoEstado) {
      fs.readFile('DATOS.DAT', 'utf8', function(err, data) {
        if (err) throw err;
        const lineas = data.split('\n');
        for (let i = 0; i < lineas.length; i++) {
          const campos = lineas[i].split(',');
          if (campos[0] === id) {
            campos[4] = nuevoEstado;
            lineas[i] = campos.join(',');
            break;
          }
        }
        const nuevoArchivo = lineas.join('\n');
        fs.writeFile('DATOS.DAT', nuevoArchivo, function(err) {
          if (err) throw err;
          console.log("Registro modificado correctamente.");
          rl.close();
        });
      });
    });
  });
}

realizarModificaciones();
