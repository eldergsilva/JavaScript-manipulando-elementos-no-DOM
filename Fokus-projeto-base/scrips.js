const html =document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

 
const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title')

const botaoIniciar = document.querySelector('.app__card-primary-button');
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

const botoes = document.querySelectorAll('.app__card-button')


focoBt.addEventListener('click',()=>{
   alterarContexto('foco')
   focoBt.classList.add('active')
})
curtoBt.addEventListener('click',()=>{
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click',()=>{''
    alterarContexto('descanso-longo')  
    longoBt.classList.add('active')  
})


function  alterarContexto (contexto){
    botoes.forEach(
        function (contexto){
            contexto.classList.remove('active')
        }
    )
   html.setAttribute('data-contexto',contexto)
   banner.setAttribute('src',`./imagens/${contexto}.png`)
   switch (contexto) {
    case "foco":
        titulo.innerHTML = `Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`   
        break;
    case "descanso-curto" : 
        titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;
    case "descanso-longo" :
        titulo.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong">
        Faça uma pausa longa.</strong>`

    default:
        break;
   }


}
document.querySelector('html');
document.querySelector('.app__card-primary-button');
document.querySelector('#timer');
document.querySelector('.app__image');
document.querySelector('.app__title'); 

