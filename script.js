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
 let humanScore = 0; 
 let computerScore = 0; 

//Step 5 
function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
     console.log(`Draw!`)
    } else if ((humanChoice === 'rock' && computerChoice === 'paper')
        || (humanChoice === 'paper' && computerChoice === 'scissors') 
        || (humanChoice === 'scissors' && computerChoice === 'rock')) {
            console.log('You Lose!'); 
            computerScore++;
    } else {
            console.log('You Win!'); 
            humanScore++;
    }
}
  
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);

(playRound(humanChoice, computerChoice));
