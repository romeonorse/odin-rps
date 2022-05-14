// COMPUTER SELECTION
const computerPlay = () => {

  // Generate random number from 0-2
  let randomNumber = Math.floor(Math.random() * 3);
  // Use switch to return value
  switch(randomNumber) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Paper';
      break;
    case 2:
      return 'Scissors';
      break;
  }
}

// PLAYER SELECTION
const playerPrompt = () => {
  // Take player's input and make it lowercase
  let playerInput = prompt('Choose wisely between rock, paper, and scissors').toLowerCase();

  if (playerInput === 'rock') {
    return 'Rock';
  } else if (playerInput === 'paper') {
    return 'Paper';
  } else if (playerInput === 'scissors') {
    return 'Scissors'
  } else {
    console.log('Reload the page and try to choose correct answer');
  }
};

// PLAYING A GAME
const playRound = (playerPrompt, computerPlay) => {
  let result;
  let computerSelection = computerPlay();
  let playerSelection = playerPrompt();

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      result = 'You lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      result = 'You won! Rock beats scissors';
    } else {
      result = "It's a draw";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      result = 'You lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      result = 'You won! Paper beats Rock';
    } else {
      result = "It's a draw";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      result = 'You lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      result = 'You won! Scissors beats Paper';
    } else {
      result = "It's a draw";
    }
  }

  console.log(result);
  return result;
};

// playRound(playerPrompt, computerPlay);

// PLAYING 5 ROUNDS

let playerTotal = 0;
let computerTotal = 0;

for (let i = 0; i < 5; i++) {
  let gameResult = playRound(playerPrompt, computerPlay);

  if (gameResult.includes('You won')) {
    playerTotal++;
    console.log('One point to humans');
  } else if (gameResult.includes('You lose')) {
    compTotal++;
    console.log('One point to machines');
  }
}

console.log(`Player: ${playerTotal} - Computer: ${computerTotal}`);