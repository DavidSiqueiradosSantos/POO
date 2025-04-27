import { UmaClasse } from "./02_UmaClasse.mjs";

// Cria uma instância da classe com o valor para o primeiro atributo
let umaClasse = new UmaClasse("Primeiro atributo");

// Chama o método para capturar o valor do atributo privado
let umAtributo = umaClasse.capturaPrimeiroAtributo();

// Desestruturação para acessar o atributo público
let { outroAtributo } = umaClasse;

// Exibe os valores
console.log("Um Atributo: " + umAtributo);
console.log("Outro Atributo: " + outroAtributo);
