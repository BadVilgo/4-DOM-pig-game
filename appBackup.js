/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice, gamePlaying;

init();

//Roll the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

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
            nextPlayer();
        }
    }
});

//Add round score to scores if HOLD clicked
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        
        //Check if the player won the game
        if (scores[activePlayer]>=20){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        }
        else{
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = "none";
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //Don't show dice
    document.querySelector('.dice').style.display = 'none';

    //Set results to 0
    document.getElementById('score-0').innerHTML = "0";
    document.getElementById('score-1').innerHTML = "0";
    document.getElementById('current-0').innerHTML = "0";
    document.getElementById('current-1').innerHTML = "0";
    document.getElementById('name-0').innerHTML = "Player 1";
    document.getElementById('name-1').innerHTML = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active'); 
    document.querySelector('.player-0-panel').classList.add('active'); 
}

/*
dice = Math.floor(Math.random()*6)+1;

document.querySelector('#current-'+ activePlayer).innetHTML = dice;

let x = document.querySelector('#score-0').innerHTML;
console.log(x);
*/
