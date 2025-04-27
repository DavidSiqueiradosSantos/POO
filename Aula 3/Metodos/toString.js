// toString() – retorna uma string com os valores do array separados por vírgula

let a = ['Luis', 'Carlos', 'Dandara']

console.log(a.toString());

let frutas = ["Maçã", "Banana", "Laranja"];
let frutasString = frutas.toString();
console.log(frutasString);  // "Maçã,Banana,Laranja"
console.log(typeof frutasString);  // "string"


// Utilizando toString com objeto:

let pessoa = {
    nome: "João",
    idade: 30,
    time: "Corinthians",
    toString: function () {
        return `${this.nome}, ${this.idade} anos, time do coração: ${this.time}`;
    }
};

let pessoaString = pessoa.toString();
console.log("\n" + pessoaString);  // "João, 30 anos"
