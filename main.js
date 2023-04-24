function getComputerChoice(){
    let random = parseInt((Math.random()*10)%3); //Generates random int from 0-3
    switch(random){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function singleRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    let message = "Lose!";
    let condition;
    if(computerSelection == playerSelection){
        return "Draw!";
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
        return `You ${message} ${condition}`;
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