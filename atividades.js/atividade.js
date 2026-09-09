const nomeItem = ['Armadura de titânio', 'Poção de cura', 'Elixir da vida', 'Anel da invisibilidade']
const precoItem = []
const raridade = []
const estoque = []
const prompt = require(`prompt-sync`)()
// Mostra os itens que estão disponíveis no catálogo da loja
const catalogo_itens = ['Armadura de titânio', 'Poção de cura', 'Elixir da vida', 'Anel da invisibilidade']

for (let i = 0; i < 4; i++) {  // Pede para o usuário digitar o preço e a quantidade em estoque de cada item
    precoItem[i] = parseFloat(prompt(`Digite o preço do item ${i + 1}: `))
    estoque[i] = parseInt(prompt(`Digite a quantidade em estoque do item ${i + 1}: `))
    console.clear()

if (precoItem[i] < 0) { // Não deixa que o usuário cadastre um preço negativo
    console.log(`O preço do item não pode ser negativo.`)
    while (precoItem[i] < 0) {
        precoItem[i] = parseFloat(prompt(`Digite o preço do item ${i + 1}: `))
    }
}

if (precoItem[i] < 100){  // Define a raridade apartir do preço
    raridade[i] = `Comum`
}
else if (precoItem[i] >= 100 && precoItem[i] < 500){
    raridade[i] = `Raro`
}
else {
    raridade[i] = `Lendário`
};
}

function EspadaDeFogo () { // Função com os dados fixos da espada
    const nomeItem = `Espada de fogo rasga céus`
    const precoItem = 400
    const valoritem = `False`
    const raridade = `Raro`
    const estoque = 5
    const disponibilidade = `Está disponível`
    


    console.log(`|--------------FICHA DE ITENS-----------------|\n`)
    console.log(`Nome do item:  ${nomeItem}`)
    console.log(`Preço do item: ${precoItem}`)
    console.log(`Item de alto valor (acima de 500)? ${valoritem}`)
    console.log(`Raridade do item: ${raridade}`)
    console.log(`Quantidade em estoque: ${estoque}\n`)
    console.log(`Disponibilidade do item: ${disponibilidade}\n`) 

}
// Mostra as informações dos itens
function FichaDeItens() {
  
    EspadaDeFogo()

    for (let i = 0; i < 4; i++){
    // Verifica se o item custa maior que 500
    let valoritem = precoItem[i] > 500 ? `True` : `False`
    // Verifica se o item possui estoque e preço válido
    let disponibilidade = estoque[i] > 0 && precoItem[i] > 0 ? `Está disponível` : `Não está disponível`

    console.log(`|--------------FICHA DE ITENS-----------------|\n`)
    console.log(`Nome do item:  ${catalogo_itens[i]}`)
    console.log(`Preço do item: ${precoItem[i]}`)
    console.log(`Item de alto valor (acima de 500)? ${valoritem}`)
    console.log(`Raridade do item: ${raridade[i]}`)
    console.log(`Quantidade em estoque: ${estoque[i]}\n`)
    console.log(`Disponibilidade do item: ${disponibilidade}\n`)
    }
}

FichaDeItens()

console.log (`|--------------REGRISTRO DE ITENS-----------------|\n`)


console.log (`O item Espada de fogo rasga céus foi cadastrado com sucesso!`)

for (let i = 0; i < 4; i++) { // Caso itens possua um índice par, ele estará em promoção, caso contrário, o item foi cadastrado com sucesso
    if (i % 2 === 0) {
        console.log(`O item ${nomeItem[i]} esta  em promoçao nessa semana!.`)
        
        }
        else {
            console.log(`O item ${nomeItem[i]} foi cadastrado com sucesso!`)
    }
}    

console.log(`\n|-------------- Itens da loja ---------------|\n`)
// Exibe os itens do catálogo
for (const item of catalogo_itens) {
    console.log(`Item: ${item}`);
}   