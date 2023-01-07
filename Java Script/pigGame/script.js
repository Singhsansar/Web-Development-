'use scrict';

let activeplayer = 0; 

//set initial score value to zero 
const scores = [0,0]
const score1 = document.getElementById("score--1");
const score0 = document.getElementById("score--0");
//score need to be changed again 
score0.textContent = 0;
score1.textContent = 0;
//hiding the dice initially 
let diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden')


const newGame = document.querySelector('.btn--new')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const player = document.querySelector('.player')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const currentScore = document.querySelector(".current-score")
const totalScore = document.querySelector(".total-score")

// const currentScore0 = document.getElementById("current--0")
// const currentScore1 = document.getElementById("current--1")
//need to change this to select the active playes
const playerActive = document.querySelector('.player--active')




//Rolling a Dice

let sum = 0 ;
roll.addEventListener('click', () => {
    //Generate a random dice 
    const dice = Math.trunc(Math.random() * (6)+1)
    console.log(dice)
    //display a dice 
    diceEl.classList.remove('hidden')
    diceEl.src =`dice-${dice}.png`;
    //if not one , current score , if one-swith to next player 
    if (dice!=1){
            sum = sum+dice  
            document.getElementById(`current--${activeplayer}`).textContent=sum
        }
        else{
            sum = 0 
            document.getElementById(`current--${activeplayer}`).textContent=0
            activeplayer = activeplayer===0?1:0;
            //player.classList.add('player--active')
            player1.classList.toggle('player--active')
            player0.classList.toggle('player--active') //add if not class is not there and remove it if the class is there 
           
            }})


hold.addEventListener('click',()=>
{
    player1.classList.toggle('player--active')
    player0.classList.toggle('player--active')
    let point = Number(document.getElementById(`score--${activeplayer}`).textContent)
    document.getElementById(`score--${activeplayer}`).textContent=sum+point
    document.getElementById(`current--${activeplayer}`).textContent=0
    sum = 0 
    activeplayer = activeplayer===0?1:0;

})



newGame.addEventListener('click',()=>{
    sum =0
    const score1 = document.getElementById("score--1");
    const score0 = document.getElementById("score--0");
//score need to be changed again 
    score0.textContent = 0;
    score1.textContent = 0;
    let diceEl = document.querySelector('.dice');
    diceEl.classList.add('hidden')

})

//switching active players ,keep track of current player
