//45.- Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el
//campo ID. Crear un programa que nos permita consultar un registro siempre que queramos.

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function consultarRegistroPorID() {
  rl.question("Ingrese el ID del registro a consultar: ", function(id) {
    fs.readFile('DATOS.DAT', 'utf8', function(err, data) {
      if (err) throw err;
      const lineas = data.split('\n');
      const registro = lineas.find(linea => {
        const campos = linea.split(',');
        return campos[0] === id;
      });
      if (registro) {
        console.log("Registro encontrado:");
        console.log(registro);
      } else {
        console.log("No se encontró ningún registro con ese ID.");
      }
      rl.close();
    });
  });
}

consultarRegistroPorID();
