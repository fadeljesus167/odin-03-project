function getComputerChoice() {
    generator = Math.floor(Math.random()*10);
    choice = generator == 0 ? `rock` : generator%2 == 0 ? `paper` :`scissors`;
    return choice;
}

function getHumanChoice() {
    choice = prompt("rock, scissors, paper");

    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice().toLowerCase();
        
        if(humanChoice == "paper" && computerChoice == "rock"){
            humanScore++;
        }else if(humanChoice == "paper" && computerChoice == "scissors"){
            computerScore++;
        }
    
        if(humanChoice == "scissors" && computerChoice == "paper"){
            humanScore++;
        }else if(humanChoice == "scissors" && computerChoice == "rock"){
            computerScore++;
        }
    
        if(humanChoice == "rock" && computerChoice == "scissors"){
            humanScore++;
        }else if(humanChoice == "rock" && computerChoice == "paper"){
            computerScore++;
        }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
    console.log(humanScore > computerScore ? `Draw!: Human Score:${humanScore} > Computer Score:${computerScore}` : humanScore > computerScore ? `Human wins! Human Score:${humanScore} > Computer Score:${computerScore}` : `Computer wins! Computer Score:${computerScore} > Human Score:${humanScore}`);
}

playGame();