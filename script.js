let currentOne=document.querySelector('#currentOne')
let totalOne=document.querySelector('#totalOne')
let images=document.querySelectorAll('img')
let score=0
let total=0
document.querySelector('#dice').addEventListener('click',()=>{
    let ranNumber=Math.ceil(Math.random()*6)
    for(let i=0;i<=5;i++){
        if(i==ranNumber-1){
            images[i].classList.remove('hidden')
        }
        else{ images[i].classList.add('hidden')}
    }
   if(ranNumber!==1){
    score+=ranNumber
   }
   else{
    score=0
  
}
   currentOne.innerHTML=score
  
})
document.querySelector('#save').addEventListener('click',()=>{
   total+=score
   totalOne.innerHTML=total
   score=0
   currentOne.innerHTML=score
   for(let j=0;j<=5;j++){
    images[j].classList.add('hidden')
   } 
})   
