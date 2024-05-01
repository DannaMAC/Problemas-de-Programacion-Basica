//42.- Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function darBaja() {
  rl.question("Ingrese el ID del registro a eliminar: ", function(id) {
    fs.readFile('DATOS.DAT', 'utf8', function(err, data) {
      if (err) throw err;
      const lineas = data.split('\n');
      const nuevoArchivo = lineas.filter(linea => {
        const campos = linea.split(',');
        return campos[0] !== id;
      }).join('\n');
      fs.writeFile('DATOS.DAT', nuevoArchivo, function(err) {
        if (err) throw err;
        console.log("Registro eliminado correctamente.");
        rl.close();
      });
    });
  });
}

darBaja();
