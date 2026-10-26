//Step 2
function getComputerChoice(num){
    let number = Math.random(); 
    
    if (number <= 0.33) {
        return ('rock');
    } else if ( number <= 0.66) {
        return ('paper');
    } else {
        return('scissors');
    }   
}

//Step 3
function getHumanChoice() {
    let choice = prompt("Choose Wisely").toLowerCase();
    return choice;
}

//Step 4
 //let humanScore = 0; 
 //let computerScore = 0; 

//Step 5 
function playGame() {

let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
     console.log(`It is a tie!`)
    } else if ((humanChoice === 'rock' && computerChoice === 'paper')
        || (humanChoice === 'paper' && computerChoice === 'scissors') 
        || (humanChoice === 'scissors' && computerChoice === 'rock')) {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`); 
            computerScore++;
    } else {
            console.log(`${humanChoice} beats ${computerChoice}. You Win!`); 
            humanScore++;
    }
}

for (let i = 0; i < 5; i++ ) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    (playRound(humanChoice, computerChoice));
}

if (humanScore > computerScore) {
    alert(`You win! Your Score: ${humanScore} Computer Score: ${computerScore}`);
} else if (humanScore < computerScore) {
    alert(`You lose. Your Score: ${humanScore} Computer Score: ${computerScore}`);
} else {
    alert(`It is a tie! Your Score: ${humanScore} Computer Score: ${computerScore}`);
}

}
playGame();