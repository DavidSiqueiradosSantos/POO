const empregado = {
    salariofixo: 3400,
    valorHorasExtra: 100,
    HorasExtras: 30,
    calcularSalario: function() {
        return this.salariofixo +
        (this.valorHorasExtra + this.HorasExtras);

    }
};

const empregado2 = {
    salariofixo: 1000,
    valorHorasExtra: 100,
    HorasExtras: 15,
    calcularSalario: function() {
        return this.salariofixo +
        (this.valorHorasExtra + this.HorasExtras);

    }
};