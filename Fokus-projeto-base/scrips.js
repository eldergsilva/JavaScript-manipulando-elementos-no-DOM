const html =document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt =document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo')

focoBt.addEventListener('click',()=>{
    html.setAttribute('data-contexto','foco')
})
curtoBt.addEventListener('click',()=>{
   html.setAttribute('data-contexto','descanso-curto')
})

longoBt.addEventListener('click',()=>{''
    html.setAttribute('data-contexto','descanso-longo')
    
})

// O documento HTML, onde serão manipulados os elementos; DOM 
// O elemento HTML, em que irá aparecer o temporizador; CARD
// O elemento HTML, no qual as imagens de cada contexto irão trocar de posição;
// O elemento HTML, onde as frases de cada contexto irão trocar de posição.Vamos lá? H1