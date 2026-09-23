const calcularTotal = function(precos) {
let total = 0

  for (const preco of precos) {
    total += preco
}

return total
}

const listaPrecos = [10, 5, 10 , 10]
console.log (`Resultado: ${calcularTotal(listaPrecos)}`)