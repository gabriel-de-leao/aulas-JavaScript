import { saudacao, dobro } from '../utils.js';

console.log(saudacao('maria'))
console.log(dobro(9))

import { moeda, validarMail, dataFormatada } from '../utils.js';

console.log(`R$: ${moeda(20)}`)

console.log(validarMail('gabriel@gmail.com'))

console.log(dataFormatada(new Date()))