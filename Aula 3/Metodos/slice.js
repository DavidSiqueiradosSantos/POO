// slice(indice, fim) – particiona um array e retorna um novo array com a partição, sem alterar o array original.

let a = ["A", "B", "C"];
let a3 = a.slice(1); //a[1], a[2]
let a4 = a.slice(0,2); //a[0], a[1]
let a5 = a.slice(0); //a[1], a[2], a[3]


console.log(a4);
console.log(a3);
console.log(a5);