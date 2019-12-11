/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//Don't show dice
document.querySelector('.dice').style.display = 'none';

//Set results to 0
document.getElementById('score-0').innerHTML = "0";
document.getElementById('score-1').innerHTML = "0";
document.getElementById('current-0').innerHTML = "0";
document.getElementById('current-1').innerHTML = "0";

//Roll the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //1. Random number
    let dice = Math.floor(Math.random()*6)+1;

    //2. Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = "block";
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3.Update the round score IF the rolled number was NOT a 1
    if (dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = "0";
        document.getElementById('current-1').textContent = "0";

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = "none";
   
    }
});

//Add round score to scores if HOLD clicked
document.querySelector('.btn-hold').addEventListener('click', function(){
    scores += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores;
});









/*
dice = Math.floor(Math.random()*6)+1;

document.querySelector('#current-'+ activePlayer).innetHTML = dice;

let x = document.querySelector('#score-0').innerHTML;
console.log(x);
*/
