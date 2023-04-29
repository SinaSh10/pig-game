let playerName0=prompt('first player name')
let playerName1=prompt('second player name')
document.querySelector('#playerName0').innerHTML=playerName0
document.querySelector('#playerName1').innerHTML=playerName1

let current0=document.querySelector('#current0')
let total0=document.querySelector('#total0')
let current1=document.querySelector('#current1')
let total1=document.querySelector('#total1')
let images=document.querySelectorAll('img')
let activePlayer=0
let score=[0,0]
let total=[0,0]
function change(){
    document.querySelector('.player-0').classList.toggle('currentPlayer')
    document.querySelector('.player-1').classList.toggle('currentPlayer')
    activePlayer===0? activePlayer=1:activePlayer=0
}
function victory(){
    if(total[activePlayer]>=100){
        alert(`${activePlayer} win the game`)
        total=[0,0]
    score=[0,0]
    total0.innerHTML=0
    total1.innerHTML=0
    score0.innerHTML=0
    score1.innerHTML=0
    images[ranNumber-1].classList.add('hidden')
    }
    
}
document.querySelector('#dice').addEventListener('click',()=>{
    let ranNumber=Math.ceil(Math.random()*6)
    for(let i=0;i<=5;i++){
        if(i==ranNumber-1){
            images[i].classList.remove('hidden')
        }
        else{ images[i].classList.add('hidden')}
    }
    
        if(ranNumber!==1){
            score[activePlayer]+=ranNumber
            document.querySelector(`#current${activePlayer}`).innerHTML=score[activePlayer]
           }
           else{
            score[activePlayer]=0
            document.querySelector(`#current${activePlayer}`).innerHTML=score[activePlayer]
            change()
        }
    
    
  
  
  
})
document.querySelector('#save').addEventListener('click',()=>{
    total[activePlayer]+=score[activePlayer]
    document.querySelector(`#total${activePlayer}`).innerHTML=total[activePlayer]
    score[activePlayer]=0
    document.querySelector(`#current${activePlayer
    }`).innerHTML=score[activePlayer]
   
    victory()
    change() 
   
   
   
   
})   

