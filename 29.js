//Autor: Danna Maribel Corral Salcedo
//29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10.

function tiradasDados() {
    let sumanDiez = 0;
    for (let i = 0; i < 100; i++) {
      const dado1 = Math.floor(Math.random() * 6) + 1;
      const dado2 = Math.floor(Math.random() * 6) + 1;
      if (dado1 + dado2 === 10) {
        sumanDiez++;
      }
    }
    console.log(`Se sumaron 10 en ${sumanDiez} de 100 tiradas.`);
  }
  
  tiradasDados();
  