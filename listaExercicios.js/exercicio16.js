const listaVIP = (nomes=['Gabriel'], nomeBuscado='Gabriel') => {

  for (const nome of nomes) {
    if (nome === nomeBuscado) {
      return true
    }
  }
  return false
}

console.log(listaVIP(['Gabriel']))
 