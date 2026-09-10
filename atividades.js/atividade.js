const nomeItem = []
const precoItem = []
let raridade = []
let estoque = []
const prompt = require(`prompt-sync`)()
const escolha = []
let id = []
const finalVetor = 100
// Mostra os itens que estão disponíveis no catálogo da loja
const catalogo_itens = ['Espada de fogo rasga céus', 'Armadura de titânio', 'Poção de cura', 'Elixir da vida', 'Anel da invisibilidade']

function Vazio () {
    let espacoVazio = -1;
    for (let i = 0; i < nomeItem.length; i++) {
        if (!(i in nomeItem)){
            espacoVazio = i;
            break;
        }
    }
    if (espacoVazio === -1) {
        espacoVazio = nomeItem.length;


    }

    return espacoVazio;

}

function telaInicial () {
    console.clear()

    console.log (`|----------------------------------------------------|`)
    console.log (`|                  Menu Principal                    |`)
    console.log (`|   1 - Cadastro                                     |`)
    console.log (`|   2 - Listagem                                     |`)
    console.log (`|   3 - Apagar                                       |`)
    console.log (`|   4 - Sair                                         |`)
    console.log (`|----------------------------------------------------|`)
     
    }
     let proximaTela = 0



while (proximaTela !== 4) {
    telaInicial();
    proximaTela = parseInt(prompt(`Para onde você deseja ir? `));
  

    if (proximaTela === 1) {
    cadastroItem();
    }

    else if (proximaTela === 2) {
    listagem();
    }
    else if (proximaTela === 3) {
    apagarItem();
    }
    else if (proximaTela === 4)
        console.log (`Saindo do sistema`)
    
    else {
    console.log("Opção errada! ");
    prompt((`Digite Novamente`))
    }
}   




function cadastroItem () { 
    
    let i = Vazio();
    
    nomeItem[i] = prompt(`Digite o nome do novo item: `)
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
    prompt(`Pressione ENTER para continuar`)
}

function apagarItem (){

    let apagarID = parseInt(prompt(`Digite o ID que você deseja excluir: `))

    let indice = apagarID

    if (indice >= 0 && (indice in nomeItem)){
        console.log (`Deseja realmente apagar o item ${nomeItem[indice]} ? `)
        let confirmacao = prompt("Responda com S ou N").toUpperCase()
        
        
        if (confirmacao === `S`){
            delete nomeItem[indice]
            delete precoItem[indice]
            delete estoque[indice]
            delete raridade[indice]
            delete id[indice]

            console.log (`Item removido`)
        }

            
        else {
            console.log(`Operação cancelada`)
        }
    }    
    prompt(`Pressione ENTER para continuar`)
}

function listagem() {
    console.clear();
    console.log(`|===========================================================================|`);
    console.log(`|                ITENS NO ESTOQUE                                           |`);
    console.log(`|===========================================================================|`);
    
    if (estoque.length === 0) {
        console.log(`| O estoque está completamente vazio.                |`);
    } else {
        for (let i = 0; i < nomeItem.length; i++) {
            if (i in nomeItem) {
                console.log(`| ID: ${i + 1} | ${nomeItem[i]} | Preço: R$ ${precoItem[i]} | Estoque: ${estoque[i]} unidade | Raridade: ${raridade[i]}`);
        }
    }  
}
  
    console.log(`|===========================================================================|`);
    
    
    prompt('\nPressione ENTER para voltar ao Menu Principal');
} 
