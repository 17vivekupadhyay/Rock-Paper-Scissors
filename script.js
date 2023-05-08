function getComputerChoice(){
    var words = ['Rock', 'Paper', 'Scissors'];
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
}

let playerscore = 0;
let computerscore = 0;
let message = "";

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        console.log('Tie');
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            message = "You Lose! Paper beats Rock";
            computerscore++;

        }
        else{
            message ="You Win!";
            playerscore++;
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            message ="You Lose! Rock beats Scissors";
            computerscore++;
        }
        else{
            message ="You Win!";
            playerscore++;
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            message ="You Lose! Scissors beats Paper";
            computerscore++;
        }else{
            message ="You Win!";
            playerscore++;
        }
    }
    updateScore();
}

const actions = ["Rock", "Paper", "Scissors"]

actions.forEach(action => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = `<img src="images/${action}.png">`;
    btn.value = action;
   
    btn.addEventListener("click", (event) => {
        console.log(playRound(btn.value, getComputerChoice()));
        console.log(playerscore);
        console.log(computerscore);
    })

    document.getElementById('boxes').append(btn);
})

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${playerscore} - ${computerscore}`;

    const messageElement = document.getElementById('message');
    messageElement.textContent = `${message}`;
  }

updateScore();