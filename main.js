let computerScore = 0;
let humanScore = 0;
let total = computerScore + humanScore;
const btns = document.querySelectorAll('.btn');

function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);
	let computerChoice;

	switch (randomNumber) {
		case 0:
			computerChoice = 'ROCK';
			break;
		case 1:
			computerChoice = 'SCISSORS';
			break;
		case 2:
			computerChoice = 'PAPER';
			break;
	}

	return computerChoice;
}

// function getHumanChoice() {
// 	let humanChoice = null;
// 	return humanChoice;
// }

function playRound(human, computer) {
	console.log(human, computer);
	if (
		(human === 'ROCK' && computer === 'SCISSORS') ||
		(human === 'PAPER' && computer === 'ROCK') ||
		(human === 'SCISSORS' && computer === 'PAPER')
	) {
		humanScore += 1;
		console.log('HUMANITY WINS!');
	} else if (human === computer) {
		console.log('its a tie!');
	} else {
		computerScore += 1;
		console.log('sorry, AI just took over!');
	}
	console.log(
		`current score: human: ${humanScore}  computer : ${computerScore}`
	);
}

function updatingUI(humanChoice, computerSelection) {
	const TotalNumberOfGamesDiv = document.querySelector('.game-counter');
	const currentPlayerScoreDiv = document.querySelector('.player-score');
	const currentComputerScoreDiv = document.querySelector('.computer-score');
	const humanChoiceDiv = document.querySelector('.player-choice');
	const computerChoiceDiv = document.querySelector('.computer-choice');

	TotalNumberOfGamesDiv.textContent = total;
	currentPlayerScoreDiv.textContent = humanScore;
	currentComputerScoreDiv.textContent = computerScore;
	humanChoiceDiv.textContent = humanChoice;
	computerChoiceDiv.textContent = computerSelection;
}

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const computerSelection = getComputerChoice();
		console.log(btn.innerHTML);
		let humanChoice = btn.innerHTML.toUpperCase();
		playRound(humanChoice, computerSelection);
		updatingUI(humanChoice, computerSelection);
	});
});
