
let cards=[]
let sum=0
let hasBJ=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let cardsEl =document.getElementById("cards-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")

let player ={
   name:"Ryan",
   credits:215

}
let playerEl =document.getElementById("player-el")
playerEl.textContent=player.name +": $"+player.credits
function getrandomCard(){
    let RandomNum = Math.floor(Math.random()*13)+1
    if(RandomNum>10){
        return 10
    }
    else if(RandomNum===1){
        return 11
    }
    else{
        return RandomNum
    }
}

function renderGame()
{
    cardsEl.textContent= "Cards : "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent="Sum : "+ sum
if(sum<=20){
    message="Do you want to draw a new card? :) "
}
else if(sum===21){
    message="Wohoo! You've got Blackjack! <3 "
    hasBJ=true
}
else{
    message="You're out of the game! :( "
    isAlive=false
}

messageEl.textContent=message
}
function startGame(){
    let firstCard=getrandomCard()
    let secondCard=getrandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    isAlive=true

renderGame()
}

function newCard(){
    if(isAlive===true && hasBJ==false){
    console.log("Drawing a new card from the deck!")
    let card3=getrandomCard()
    sum+=card3
    cards.push(card3)
    renderGame()
    }
    }

