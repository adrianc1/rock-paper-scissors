let computerScore = 0;
let humanScore = 0;
let total = computerScore + humanScore;

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

function getHumanChoice() {
	const humanChoice = prompt(
		'select a goddam rock, paper or scissors'
	).toUpperCase();

	return humanChoice;
}

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

while (total < 5) {
	const computerSelection = getComputerChoice();
	const humanSelection = getHumanChoice();

	playRound(humanSelection, computerSelection);
	total = computerScore + humanScore;
}
