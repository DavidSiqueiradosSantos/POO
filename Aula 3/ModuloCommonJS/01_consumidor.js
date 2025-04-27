const circulo = require('./01_definicao.js');
console.log(`áre do circulo de raio 4 é ${circulo.area(4)}`);

//desestruturando o objeto e acesando a função diretamente:
const {area} = require('./01_definicao.js');
console.log(`Área do circulo de raio 2 é ${area(2)}`);