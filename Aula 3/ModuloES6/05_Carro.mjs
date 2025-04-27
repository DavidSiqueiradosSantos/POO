export class Carro {
    #_tanque;
    #_capacidadeDoTanque;

    constructor(valor) {
        this.#_tanque = 0;
        this.#_capacidadeDoTanque = valor;
    }

    // Getter para o tanque (quantidade de combustível atual)
    get tanque() {
        return this.#_tanque;
    }

    // Getter para a capacidade do tanque
    get capacidade() {
        return this.#_capacidadeDoTanque;
    }

    // Setter para adicionar combustível
    set tanque(qtde) {
        if (qtde < 0) {
            console.log("Quantidade de combustível não pode ser negativa.");
            return; // Não permite valores negativos
        }

        // Se a quantidade de combustível somada à quantidade atual ultrapassar a capacidade, limita ao máximo
        const novoNivelTanque = this.#_tanque + qtde;
        if (novoNivelTanque > this.#_capacidadeDoTanque) {
            this.#_tanque = this.#_capacidadeDoTanque; // Limita ao valor máximo do tanque
        } else {
            this.#_tanque = novoNivelTanque; // Soma o combustível ao nível atual
        }
    }
}
