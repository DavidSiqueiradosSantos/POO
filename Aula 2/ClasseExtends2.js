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

class Estudante extends Pessoa {
    constructor(nome, AnoDeNascimento, matricula) {
        super(nome, AnoDeNascimento, "Estudante", matricula)
        this.matricula = matricula;
    };
    // Polimorfismo
    ola(){
        super.ola();
        console.log("colegas!");
    }

    
};

const aluno1 = new Estudante("Ellen", 2001, 123456);
console.log(aluno1);

class Professor extends Pessoa {
    constructor(nome, AnoDeNascimento, titulacao) {
        super(nome, AnoDeNascimento, "Professor", titulacao)
        this.titulacao = titulacao;

    };
    // Polimorfismo
    ola(){
        super.ola();
        console.log("Alunos!")
    }
};

const professor1 = new Professor("Fábio", 1988, "Mestre");
console.log(professor1)