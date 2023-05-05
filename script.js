function getComputerChoice(){
    var words = ['rock', 'paper', 'scissors'];
    var word = words[Math.floor(Math.random() * words.length)];
    return word
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        console.log('Tie');
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            console.log("You Lose! Paper beats Rock")
        }
        else{
            console.log("You Win!")
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            console.log("You Lose! Rock beats Paper")
        }
        else{
            console.log("You Win!")
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            console.log("You Lose!  Scissors beats Paper")
        }else{
            console.log("You Win!")
        }
    }
}

function game() {
    console.log(playRound(prompt("Rock, Paper or Scissors").toLowerCase(), getComputerChoice()));
    console.log(playRound(prompt("Rock, Paper or Scissors").toLowerCase(), getComputerChoice()));
    console.log(playRound(prompt("Rock, Paper or Scissors").toLowerCase(), getComputerChoice()));
    console.log(playRound(prompt("Rock, Paper or Scissors").toLowerCase(), getComputerChoice()));
    console.log(playRound(prompt("Rock, Paper or Scissors").toLowerCase(), getComputerChoice()));

}

game()