const elementosFake = [
    {
      tagName: 'DIV',
      style: { color: 'blue', display: 'flex' },
      classList: ['container', 'active']
    },
    {
      tagName: 'H1',
      style: { color: 'red', display: 'block' },
      classList: ['title']
    },
    {
      tagName: 'BUTTON',
      style: { color: 'white', display: 'inline-block' },
      classList: ['btn', 'btn-primary']
    }
  ];

    let quantidade = 0
    
    for (const quant_classes in elementosFake)
        quantidade += elementosFake [quant_classes].classList.length
    elementosFake.forEach(elemento => console.log(`Tag: ${elemento.tagName} possui as classes: ${elemento.classList.join(',')}`))
    console.log (`No total, possui ${quantidade} classes`)
    
   