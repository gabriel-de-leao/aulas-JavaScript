const missoes = [
    {nome: "Derrotar chefe", pontos: 500},
    {nome: "Encontrar tesouro", pontos : 200},
    {nome: "Salvar personagem", pontos: 800},
    {nome: "Explorar mapa", pontos: 100}
];

function analisarMissoes (lista){


    
for (const { nome , pontos } of lista){

    let dificuldade

        if (pontos >= 500)
            dificuldade = "difícil"
        else if (pontos >= 200)
            dificuldade = "Médio"
        else
        dificuldade = "Fácil"

        console.log(`Missão: ${nome}, Nivel: ${dificuldade}`)
        
    }
    }


analisarMissoes(missoes)