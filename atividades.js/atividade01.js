const nomeItem = `Espada de fogo rasga céus`
const precoItem = 500
const raridade = `Lendário`
const estoque = 12
const catalogo_itens = ['Espada de fogo rasga céus', 'Armadura de titânio', 'Poção de cura', 'Elixir da vida', 'Anel da invisibilidade']





function FichaDeItens() {
    console.log(`|--------------FICHA DE ITENS-----------------|\n`)
    console.log(`Nome do item:  ${nomeItem}`)
    console.log(`Preço do item: R$ ${precoItem}`)
    console.log(`Raridade do item: ${raridade}`)
    console.log(`Quantidade em estoque: ${estoque}`)

    return (`\n|--------------FICHA DE ITENS-----------------|\n`)
}
console.log(FichaDeItens())

if (precoItem < 0) {
    console.log(`O preço do item não pode ser negativo.`)
}

if (precoItem < 100){
    raridade = `Comum`
}
else if (precoItem >= 100 && precoItem < 500){
    raridade = `Raro`
}
else {
    raridade = `Lendário`
};     

const emDestaque = precoItem > 500 ? `True` : `False`
const disponibilidade = estoque > 0 && precoItem > 0 ? `Está disponível` : `Não está disponível`

for (let i = 1; i < 6; i++) {
    if (i % 2 === 0) {
    console.log(`O item ${i} está em promoção nessa semana!\n`)}
    else {
        console.log (`O item ${i} foi cadastrado com sucesso!\n`)
    }
}
console.log (`Estoque inicial do item ${nomeItem} : ${estoque} unidades disponiveis\n`)
while (estoque > 0) {
    estoque -= 1
    console.log(` O estoque foi atualizado para ${estoque}.\n`)
    console.log (`|--------------------------------------------|`)
    if (estoque === 0) {
        console.log(`O item ${nomeItem} está esgotado.\n`)
    }
}

console.log(`|-------------- Itens da loja ---------------|\n`)
for (const item of catalogo_itens) {
    console.log(`Item: ${item}`);
}   
