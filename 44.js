//Autor: Danna Maribel Corral Salcedo 
//44.- Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que
//introduciremos por teclado.

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function listarRegistrosPorEstado() {
  rl.question("Ingrese el estado a buscar: ", function(estado) {
    fs.readFile('DATOS.DAT', 'utf8', function(err, data) {
      if (err) throw err;
      const lineas = data.split('\n');
      const registros = lineas.filter(linea => {
        const campos = linea.split(',');
        return campos[4] === estado;
      });
      console.log(`Registros con estado "${estado}":`);
      console.log(registros.join('\n'));
      rl.close();
    });
  });
}

listarRegistrosPorEstado();
