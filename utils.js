export function saudacao(nome = 'visitante') {
    console.log (`Olá ${nome}`)
}
export const dobro = n => n * 2

export const moeda = valor => valor.toFixed(2).replace('.',',') 
    
export function validarMail (mail, validar){
    validar = mail.includes('@') && mail.includes('.') ? true : false
return validar
}

export function dataFormatada(){
   const hoje = new Date()

 const ano = hoje.getFullYear()
 const dia = hoje.getDate() 
 const mes = hoje.getMonth() + 1



return `${dia}/${mes}/${ano}`

}