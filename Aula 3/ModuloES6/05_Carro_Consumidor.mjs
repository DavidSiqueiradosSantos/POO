import readline from 'readline';
import { Carro } from './05_Carro.mjs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para adicionar combustível ao carro
function AdicionaCombustivel(carro) {
    rl.question("Deseja adicionar mais combustível? (S/N): ", (resposta) => {
        if (resposta.toUpperCase() === 'S') {
            rl.question("Quantos litros deseja abastecer? ", (carroTanque) => {
                carroTanque = parseFloat(carroTanque);

                // Verifica se o valor é válido
                if (isNaN(carroTanque)) {
                    console.log("Por favor, digite um valor numérico válido.");
                    AdicionaCombustivel(carro); // Repete a pergunta se o valor não for válido
                } else {
                    // Verifica se o combustível não ultrapassa a capacidade
                    if (carro.tanque + carroTanque > carro.capacidade) {
                        console.log("A capacidade máxima do tanque foi atingida. Não é possível abastecer com essa quantidade.");
                    } else {
                        carro.tanque = carroTanque; // Seta o valor de combustível corretamente
                        console.log(`Novo nível de combustível: ${carro.tanque} litros`);
                    }
                    console.log(`Capacidade total do tanque: ${carro.capacidade} litros`);
                    AdicionaCombustivel(carro); // Pergunta novamente se deseja adicionar mais combustível
                }
            });
        } else {
            console.log("Processo finalizado.");
            rl.close(); // Fecha a interface de leitura quando o processo é finalizado
        }
    });
}

// Pergunta ao usuário a quantidade de combustível inicial
rl.question("Digite a quantidade do combustível: ", (valorCombustivel) => {
    valorCombustivel = parseFloat(valorCombustivel);

    // Verifica se o valor é válido
    if (isNaN(valorCombustivel)) {
        console.log("Por favor, digite um valor numérico válido.");
        rl.close(); // Fecha a interface de leitura caso o valor não seja válido
        return;
    }

    // Cria um novo carro com o valor de combustível fornecido
    let carro = new Carro(valorCombustivel);

    // Exibe a capacidade do tanque e a quantidade de combustível
    console.log(`Capacidade total do tanque: ${carro.capacidade} litros`);
    console.log(`Combustível no tanque: ${carro.tanque} litros`);

    // Chama a função para adicionar mais combustível
    AdicionaCombustivel(carro);
});
