let buttonsDiv = document.getElementById("selection");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let results = document.getElementById("results");

buttonsDiv.addEventListener('click',singleRound);

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
           results.textContent = ("Draw!");
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
            results.textContent = (`You ${message} ${condition}`);
        }
    }
}
function game(){
    let compScore = 0;
    let userScore = 0;
    while(compScore < 3 && userScore < 3){
        let input = prompt("Enter rock, paper, or scissors!");
        let tempGame = singleRound(input);
        console.log(tempGame);
        if(tempGame.includes("Win")){
            userScore++;
        }
        else if(tempGame.includes("Lose")){
            compScore++;
        }
        console.log(`Score: Computer: ${compScore} User: ${userScore} \n`);
    }
    return (compScore == 3) ? `You Lose best of 5. Final Score: ${compScore} - ${userScore}`:
        `You Win best of 5. Final Score: ${userScore} - ${compScore}`;
}