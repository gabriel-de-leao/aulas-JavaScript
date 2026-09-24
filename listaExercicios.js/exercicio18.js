const mudar = function (booleanos = [true, false]){
    const mudando = []

    for (const Booleano of booleanos){
        mudando.push (Booleano === true ? console.log ('Concluído') : console.log('Pendente'))
    }
    
return mudando

}
mudar([true])