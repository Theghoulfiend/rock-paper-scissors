
function getComputerChoice(num){
    let number = Math.random(); 
    
    if (number <= 0.33) {
        return ("Rock")
    } else if ( number <= 0.66) {
        return ("Paper")
    } else {
        return("Scissors")
    }   
}
    //Generate a random number that will return either rock,paper, or scissors
    // specify that <0.33, >0.33 && <0.66, >0.66
    // Issue is that it is re-running math.random 
console.log(getComputerChoice());

