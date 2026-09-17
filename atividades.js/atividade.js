const nomeItem = []
const precoItem = []
let raridade = []
let estoqueItem = []
const prompt = require(`prompt-sync`)() // Recebe os dados digitados pelo usuário
let id = []
const finalVetor = 100



function excluir() { // Function para excluir um item seleciado pelo usuário

        let i = 0
        // Recebe o ID digitado pelo usuário para excluir o item
        itemExclusao = parseInt(prompt(`Digite o ID do item que deseja excluir: `))

        // Procura o iten no vetor com o ID digitado pelo usuário
    for (i = 0; i < finalVetor; i++) { 

        if (nomeItem[i] === undefined) {
            break
        }

        if (id[i] === itemExclusao){

        delete nomeItem[i] // Exclui os dados do item
        delete precoItem[i]
        delete estoqueItem[i]
        delete id[i]
        delete raridade[i]
        
        break
        
        }

    }
          // Confirmação que o item foi excluído corretamente
        console.log(`Item Excluído com sucesso!`)

    prompt(`Digite ENTER para voltar ao menu principal: `)
}



function registrar () { // Registra novos itens para o catálogo

    console.clear()

    let i = 0
    for (i = 0; i < finalVetor; i++) { 
        if (nomeItem[i] === undefined) {
            break
// Procura a primeira posição vazia no vetor para registrar o item
        }
    }

    console.log(`================================================`)
    console.log(`|                                              |`)
    console.log(`|               REGISTRAR ITEM                 |`)
    console.log(`|                                              |`)
    console.log(`================================================`)
    // Recebe o nome do item digitado pelo usuário
    nomeItem[i] = prompt(`Digite o nome do item: `) 
    
    precoItem[i] = parseFloat(prompt(`Digite o preço do item: `))
    // Recebe o preço do item digitado pelo usuário e transforma em número com virgula
        while (precoItem[i] < 0) {  // Verifica se o preço digitado é valido, se não for manda digitar novamente
            console.log(`Preço inválido, Digite um valor válido (maior que 0): `)
            precoItem[i] = parseFloat(prompt(`Digite o preço do item: `))
        }
        // Recebe quantos itens estão em estoque e transforma em número inteiro
    estoqueItem[i] = parseInt(prompt(`Digite a quantidade em estoque: `))
    id[i] = i + 1
    
}

function raridades (){  // Define a raridade de acordo com o preço do item
    if (precoItem >= 500) { 
        return `Lendário` // Se o preço for maior ou igual a 500, o item é lendário
    }
    else if (precoItem > 100 && precoItem < 500){
        return `Raro` // Se o preço for maior ou igual e menor que 500, o item é raro
    }
    else{
        return `Comum` // Se o item não entrar em nenhuma das condições, ele é comum
    }
        
}


function listagem() { // Lista de todos os itens cadastrados no catálogo

    console.clear()

    let i = 0  

    for (i = 0; i < finalVetor; i++) { 
        // Percorre os itens cadastrados, se encontrar uma posição vazia ele para

        if (nomeItem[i] === undefined) {
            break
        }
    
        // Mostra a ficha de cada item cadastrado no catálogo
        console.log(`\n|=============================================|`)
        console.log(`|                                             |`)
        console.log(`|               FICHA DE ITENS                |`)
        console.log(`|                                             |`)
        console.log(`|=============================================|\n`)
       
        console.log(`Nome do Item: ${nomeItem[i]}`)
        console.log(`Preço do Item R$: ${precoItem[i]}`)
        console.log(`Estoque: ${estoqueItem[i]}`)
        console.log(`Raridade: ${raridades(precoItem[i])}`)
        console.log(`ID do Item: ${id[i]}`)
        // Verifica se o item está disponível no estoque e se o preço é maior que 0
        const disponibilidade = estoqueItem[i] > 0 && precoItem[i] > 0 ? 'Disponível' : 'Indisponível'
        console.log(`Disponibilidade: ${disponibilidade}`)
        }

    prompt (`Digite ENTER para voltar ao menu principal: `)

}

function catalogo_Itens(){ // Mostra os itens na loja

    console.clear()

    console.log(`|==============================================|`)
    console.log(`|                ITENS DA LOJA                 |`)
    console.log(`|==============================================|\n`)

    for (const item of nomeItem){ // percorre os nomes dos itens cadastrados
        if (item === undefined) continue
             console.log(`Item ${item}`)
             console.log(`|=================================|\n`)
            
    }

    prompt (`Digite ENTER para voltar ao menu principal: `)

}




function telaInicial () { // Mostra o menu principal da loja

    console.clear()
    
    console.log(`|==============================================|`) 
    console.log(`|                                              |`)
    console.log(`|               MENU PRINCIPAL                 |`)
    console.log(`|                                              |`)
    console.log(`|    1 Registrar                               |`)
    console.log(`|    2 Listar                                  |`)
    console.log(`|    3 Excluir                                 |`)
    console.log(`|    4 Catalogo de Itens                       |`)
    console.log(`|    5 Sair                                    |`)
    console.log(`|                                              |`)
    console.log(`|                                              |`)
    console.log(`|==============================================|`)
    }

  
    
    let opcaoEscolhida = 0 // Recebe a opção escolhida no menu


    while (opcaoEscolhida !== 5) { 
    // Enquanto a opçao do menu for diferente de 5, ele continua mostrando o menu

        telaInicial(); // Mostra o menu principal
        opcaoEscolhida = parseInt(prompt(`O que deseja fazer?: `)) // Recebe a opção escolhida pelo usuário
    
    
        // De acordo com a opção escolhida, ele chama a função correspondente ao número escolhido
        if (opcaoEscolhida === 1) {
            registrar()
        }
        else if (opcaoEscolhida === 2) {
            listagem()
        }
        else if (opcaoEscolhida === 3) {
            excluir()
        }
        else if (opcaoEscolhida === 4) {
            catalogo_Itens()
        }

}
