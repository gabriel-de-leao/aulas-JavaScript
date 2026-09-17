const nomeItem = ['Armadura de titânio', 'Poção de cura', 'Elixir da vida', 'Anel da invisibilidade']
const precoItem = [300, 400, 500, 200]
let raridade = []
let estoque = []
const prompt = require(`prompt-sync`)()
const escolha = []
let id = []
// Mostra os itens que estão disponíveis no catálogo da loja
const catalogo_itens = ['Espada de fogo rasga céus', 'Armadura de titânio', 'Poção de cura', 'Elixir da vida', 'Anel da invisibilidade']

function Vazio () {
    let espacoVazio = -1;


}

function telaInicial () {
    console.clear

    console.log (`|----------------------------------------------------|`)
    console.log (`|                  Menu Principal                    |`)
    console.log (`|   1 - Cadastro                                     |`)
    console.log (`|   2 - Listagem                                     |`)
    console.log (`|   3 - Apagar                                       |`)
    console.log (`|   4 - Sair                                         |`)
    console.log (`|----------------------------------------------------|`)
     }
     
     let proximaTela = prompt(`para onde você deseja ir? `)

if (escolha === 1) {
    telaCadastro();
}

else if (escolha === 2) {
    telaInicial();
}
else if (escolha === 3) {
    telaApagar();
}
else if (escolha === 4) {
    telaApagar();
}
else {
    console.log("Opção errada! Digite novamente");
}

telaInicial()

/* for (let i = 0; i < 4; i++) {  // Pede para o usuário digitar o preço e a quantidade em estoque de cada item
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
    const valoritem = precoItem > 500 ? true : false
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
    let valoritem = precoItem[i] > 500 ? true : false
    // Verifica se o item possui estoque e preço válido
    let disponibilidade = estoque[i] > 0 && precoItem[i] > 0 ? `Está disponível` : `Não está disponível`

    console.log(`|--------------FICHA DE ITENS-----------------|\n`)
    console.log(`Nome do item:  ${catalogo_itens[i + 1]}`)
    console.log(`Preço do item: ${precoItem[i]}`)
    console.log(`Item de alto valor (acima de 500)? ${valoritem}`)
    console.log(`Raridade do item: ${raridade[i]}`)
    console.log(`Quantidade em estoque: ${estoque[i]}\n`)
    console.log(`Disponibilidade do item: ${disponibilidade}\n`)
    console.log(`ID: ${i + 1}`)
    }
}

FichaDeItens()

console.log (`|--------------REGRISTRO DE ITENS-----------------|\n`)

for (let i = 1; i < 5; i++) { // Cadastra os 5 itens do catálogo; itens de índice par recebem uma mensagem extra de promoção
    if (i % 2 === 0) {
        console.log(`O item ${catalogo_itens[i]} esta  em promoçao nessa semana!.`)
    }
    else {
        console.log (`O item ${catalogo_itens[i]} foi cadastrado.`)
    
    }
}    

console.log(`\n|--------------CONTROLE DE ESTOQUE-----------------|\n`)
let quantidadeEstoque = 12 // Simula a venda de um item específico, partindo de 12 unidades
console.log(`Estoque inicial do item Espada de fogo rasga céus: ${quantidadeEstoque} unidades\n`)
while (quantidadeEstoque > 0) { // Decrementa o estoque a cada venda até chegar a 0
    quantidadeEstoque -= 1
    console.log(`O estoque foi atualizado para ${quantidadeEstoque}.\n`)
    if (quantidadeEstoque === 0) {
        console.log(`Item esgotado!\n`)
    }
}

console.log(`\n|-------------- Itens da loja ---------------|\n`)
// Exibe os itens do catálogo
for (const item of catalogo_itens) {
    console.log(`Item: ${item}`);
} */
