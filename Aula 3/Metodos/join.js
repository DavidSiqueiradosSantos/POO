// join() – retorna uma string com os valores do array separados pelo símbolo fornecido

let a = ['Amendoim', 'Chocolate', 'Pão'];
let resultado = "";

// O loop deve começar de 0, pois o índice 1 não vai listar o primeiro item
for (let i = 0; i < a.length; i++) {
    // Adiciona o item atual ao resultado, com o número i como prefixo
    resultado += (i + 1) + "- " + a[i] + " ";

}

// Remove o espaço extra no final da string
resultado = resultado.trim();

// Exibe o resultado final (todos os itens com separador)
console.log(resultado);
console.log("\nNúmero")
// Join simples

const e = [2025, 4, 22];
console.log(e.join("/"));  // saída: "2025/4/22"
