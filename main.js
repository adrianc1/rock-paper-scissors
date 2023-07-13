let computerChoice;
let userChoice;
let randomNumber;
let i = 0;
let userScore = 0;
let cpuScore = 0;
let gameNumber = 0;
let gameCounter = document.querySelector('.game-counter')
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score')
let playerDisplayChoice = document.querySelector('.player-choice')
let computerDisplayChoice = document.querySelector('.computer-choice')
let btnContainer = document.querySelectorAll('.btn-container');

function game(randomNumber, userChoice) {
  console.log('it wokrs')
    
    // Computer Choice. Get random number and assign to value.
    computerChoiceFunction(randomNumber);

    // Checks user vs computer choice and declares a winner
    checkChoices(userChoice, computerChoice);

    isWinner(userScore, cpuScore);
    
};

// Computer Choice Function 
function computerChoiceFunction(randomNumber) {
    if(randomNumber === 0) {
        return computerChoice = "rock"
    } else if (randomNumber === 1) {
        return computerChoice = "paper"
    } else if (randomNumber === 2) {
        return computerChoice = "scissors"
    } else {
        return computerChoice = "FUCK"
    }
};

// Checks the game choice
function checkChoices(userChoice, computerChoice) {
    gameNumber += 1
    const choices = ["rock", "paper", "scissors"];
    
    // Validate user and computer choices
    if (!choices.includes(userChoice) || !choices.includes(computerChoice)) {
      alert("Invalid choice. Please select rock, paper, or scissors.") ;
    };

    playerDisplayChoice.innerText = userChoice.toUpperCase()
    computerDisplayChoice.innerText = computerChoice.toUpperCase()
    
    // Determine the winner
    if (userChoice === computerChoice) {
      gameCounter.innerText = gameNumber
      playerScore.innerText = userScore
      computerScore.innerText = cpuScore
      
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore += 1;
        gameCounter.innerText = gameNumber
        playerScore.innerText = userScore
        computerScore.innerText = cpuScore
    } else {
        cpuScore += 1
        gameCounter.innerText = gameNumber
        playerScore.innerText = userScore
        computerScore.innerText = cpuScore
    }
};

function isWinner(userScore, cpuScore) {
  if (userScore === 5) {
    alert(`Game over! YOU win!`)
    setTimeout(() => {location.reload()
    }, 5000)
    ;
  } else if (cpuScore === 5) {
    alert(`Game over! You LOSE!!!`)
    setTimeout(() => {location.reload()
    }, 5000)
    ;
    
  }
}

  function userBtnChoice(button) {
    button.addEventListener('click', () =>{
      userChoice = button.innerText.toLowerCase();
      randomNumber = Math.floor(Math.random() * 3);
      game(randomNumber, userChoice);
    })
  }

  btnContainer.forEach(userBtnChoice)

