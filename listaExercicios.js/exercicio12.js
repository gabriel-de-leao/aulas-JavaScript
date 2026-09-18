const notas = (notasAlunos=[10,6,7,9,2,0]) => {

    for (const notas of notasAlunos)
        if (notas >=7)
            console.log (`Aprovado ${notas}`)

}
notas()