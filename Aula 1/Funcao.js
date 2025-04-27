function CriaEmpregado (SalarioBase, ValorHorasExtras, qtHroasExtras) {
      return {
            SalarioBase,
            ValorHorasExtras,
            qtHroasExtras,
            calculaSalario : function() {
                  return this.SalarioBase + (this.ValorHorasExtras * this.qtHroasExtras);
            }
      };
};

const empregado1 = CriaEmpregado(5000, 150, 20);
const empregado2 = CriaEmpregado(8000, 100, 20);
