let buttonsDiv = document.getElementById("selection");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let roundResults = document.getElementById("round-results");
let gameResults = document.getElementById("game-results");
let compScore = 0;
let userScore = 0;

buttonsDiv.addEventListener('click',game);

function getComputerChoice(){
    let random = parseInt((Math.random()*10)%3); //Generates random int from 0-3
    switch(random){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function singleRound(e){
    if(e.target.id != 'selection'){
        rockButton.classList = '';
        paperButton.classList = '';
        scissorsButton.classList = '';
        let computerSelection = getComputerChoice();
        let playerSelection = e.target.id;
        let message = "Lose!";
        let condition;
        if(computerSelection == playerSelection){
           roundResults.textContent = ("Draw!");
           e.target.classList.add('draw');
        }
        else{
            switch(playerSelection){
                case "rock":{
                    if(computerSelection == "scissors"){
                        message = "Win!";
                        condition = "Rock beats Scissors";
                    }
                    else condition = "Paper beats Rock";
                    break;
                }
                case "paper":{
                    if(computerSelection == "rock"){
                        message = "Win!";
                        condition = "Paper beats Rock";
                    }
                    else condition = "Scissors beats Paper";
                    break;
                }
                case "scissors":{
                    if(computerSelection == "paper"){
                        message = "Win!";
                        condition = "Scissors beats Paper";
                    }
                    else condition = "Rock beats Scissors";
                    break;
                }
                default: return "invalid input";
            }
            if(message == "Win!"){
                e.target.classList.add("win");
                document.getElementById(computerSelection).classList.add("lose");
            }
            else{
                e.target.classList.add('lose');
                document.getElementById(computerSelection).classList.add('win');
            }
            roundResults.textContent = (`You ${message} ${condition}`);
        }
    }
}
function game(e){
    let input = e;
    let tempGame = singleRound(input);
    console.log(tempGame);
    if(roundResults.textContent.includes("Win")){
        userScore++;
    }
    else if(roundResults.textContent.includes("Lose")){
        compScore++;
    }
    gameResults.textContent = (`Score: Computer: ${compScore} User: ${userScore} \n`);

    if(compScore == 3 || userScore == 3){
        if (compScore == 3) {
            gameResults.textContent = (`You Lose best of 5. Final Score: ${compScore} - ${userScore}`);
        }
        else {
            gameResults.textContent = (`You Win best of 5. Final Score: ${userScore} - ${compScore}`);
        }
        compScore = 0;
        userScore = 0;
    }
}