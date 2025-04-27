// function Pessoa () {
//     this.nome = "David";
//     this.anoDeNascimento = 2002;
//     this.profissao = "Estudante";
//     this.calculaIdade = function() {
//     return new Date().getFullYear() - this.anoDeNascimento;
//     }

//     };
//     const pessoa = new Pessoa();

    function Pessoa (nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
        this.calculaIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
        }
    
        };
        const pessoa = new Pessoa("David",2002,"Ti");
