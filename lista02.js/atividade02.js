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

        for (const cor in elementosFake) 
            if (elementosFake[cor].style.color === 'blue') {
                console.log (`O elemento ${elementosFake[cor].tagName} é azul`)   
            
        }   