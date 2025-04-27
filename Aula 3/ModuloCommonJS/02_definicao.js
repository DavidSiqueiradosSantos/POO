// Define uma classe chamada Circulo
class Circulo {

    // Construtor da classe, que recebe o raio do círculo como argumento
    constructor(r) {
        // Atribui o valor do raio recebido ao atributo 'raio' do objeto
        this.raio = r;
    }

    // Método que calcula e retorna a área do círculo
    area() {
        // Fórmula da área de um círculo: π * raio²
        return Math.PI * this.raio ** 2;
    }

    // Método que calcula e retorna a circunferência do círculo
    circunfrencia() {
        // Fórmula da circunferência: 2 * π * raio
        return 2 * Math.PI * this.raio;
    }
};

// Exporta a classe Circulo para que possa ser usada em outros arquivos
module.exports = Circulo
