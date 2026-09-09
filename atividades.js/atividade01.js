// Informações dos itens 
const nomeItem = `Espada de fogo rasga céus`
const precoItem = 500
let raridade = `Lendário`
let estoque = 12

// Mostra uma lista com os itens disponíveis no catálogo
const catalogo_itens = ['Espada de fogo rasga céus', 'Armadura de titânio', 'Poção de cura', 'Elixir da vida', 'Anel da invisibilidade']

// Verifica se o preço informado é negativo
if (precoItem < 0) {
    console.log(`O preço do item não pode ser negativo.`)
}
// Verifica se o preço informado menor que 100, caso seja o iten receberá a raridade comum
if (precoItem < 100){
    raridade = `Comum`
}
// Verifica se o preço informado maior ou igual a 100, caso seja o iten receberá a raridade rara
else if (precoItem >= 100 && precoItem < 500){
    raridade = `Raro`
}
// Caso  o item não entre em nenhum dos dois acima ele vai receber a raridade lendária
else {
    raridade = `Lendário`
};     
// Verifica se o preço é maior que 500 para colocar o item em destaque
const emDestaque = precoItem > 500 ? true : false
// Verifica se o item possui estoque e preço válido
const disponibilidade = estoque > 0 && precoItem > 0 ? `Está disponível` : `Não está disponível`


// Mostra as fichas dos itens
function FichaDeItens() { 
    console.log(`|--------------FICHA DE ITENS-----------------|\n`)
    console.log(`Nome do item:  ${nomeItem}`)
    console.log(`Preço do item: R$ ${precoItem}`)
    console.log(`Raridade do item: ${raridade}`)
    console.log(`Quantidade em estoque: ${estoque}`)
    console.log (`Disponibilidade: ${disponibilidade}`)
    console.log(`Esse item custa mais que 500? ${emDestaque}`)

    return (`\n|--------------FICHA DE ITENS-----------------|\n`)
}
// Retorna a função FichaDeItens para mostrar o resultado
console.log(FichaDeItens())

// Mostra os itens que estão em promoção, apenas itens com o índice par
for (let i = 1; i <= 5; i++) {
    
    if (i % 2 === 0) {
        console.log(`O item ${i} está cadastrado e está em promoção`)
    }
    else {
        console.log(`O item ${i} foi cadastrado`)
    }
}

console.log (`|--------------ESTOQUE-----------------|\n`)
// Exibe a quantidade inicial disponível no estoque
console.log (`Estoque inicial do item ${nomeItem} : ${estoque} unidades disponiveis\n`)
// Continua enquanto ainda houver itens no estoque
while (estoque > 0) {
    // Retira uma unidade do estoque a cada compra
    estoque -= 1
    console.log(` O estoque foi atualizado para ${estoque}.\n`) // Mostra a quantidade atualizada depois da compra
    console.log (`|--------------------------------------------|`)
    if (estoque === 0) { // Verifica se o estoque chegou a zero, se for true ele mostra que o itens está esgotado
        console.log(`O item ${nomeItem} está esgotado.\n`)
    }
}
// Percorre todos os itens armazenados no catálogo
console.log(`|-------------- Itens da loja ---------------|\n`)
for (const item of catalogo_itens) {
    console.log(`Item: ${item}`);
}   