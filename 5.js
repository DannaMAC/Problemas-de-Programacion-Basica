//5.-Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos
//impares hay.

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    count++;
  }
}
console.log("Cantidad de números impares hasta el 100:", count);
