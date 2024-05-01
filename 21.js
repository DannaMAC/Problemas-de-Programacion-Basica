//Autor: Danna Maribel Corral Salcedo
//21.- Hacer un programa que calcule independientemente la suma de los pares y los impares de
//los números entre 1 y 1000.

let sumPar = 0;
let sumImp = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0) {
    sumPar += i;
  } else {
    sumImp += i;
  }
}

console.log(`Suma de los numeros pares: ${sumPar}`);
console.log(`Suma de los numeros impares: ${sumImp}`);
