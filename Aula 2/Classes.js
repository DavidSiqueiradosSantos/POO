class Pessoa {
    constructor(nome, AnoDeNascimento, profissao) {
        this.nome = nome;
        this.AnoDeNascimento = AnoDeNascimento;
        this.profissao = profissao;
    };

    ola() {
        console.log("Olá, " + this.nome);
    };

    calcularidade() {
        return new Date().getFullYear() - this.AnoDeNascimento;
    };
};

const pessoa1 = new Pessoa("David", 2002, "Ti");
console.log(pessoa1);