const frutas = ['Maçã', 'Banana', 'Uva'];

frutas.push("Abacate", "Abacaxi", "Morango"); //push para adicionar ao final do array, caso eu queira adicionar no começo uso o unshift.
console.log(frutas)

console.log("Processando...\n")
//-----------------------------
let remover = frutas.splice(-2) // splice para remover as duas ultimas frutas do array
console.log(frutas)