// Index serve para localizar a posição do array
let a = [1,2,3];
a.forEach(function(item,index){
console.log(`${item} na posição ${index}`);
});

// sem index
console.log("\n/-/\n")
let numeros = [10, 20, 30, 40];

// Exibindo cada número multiplicado por 2, sem precisar do índice ou do array
numeros.forEach(function(numero) {
    console.log(numero * 2);
});