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

const computerSelection = computerPlay();

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

const playerSelection = playerPrompt();

// PLAYING A GAME
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      return 'You lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      return 'You won! Rock beats scissors';
    } else {
      return "It's a draw";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      return 'You lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      return 'You won! Paper beats Rock';
    } else {
      return "It's a draw";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      return 'You lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      return 'You won! Scissors beats Paper';
    } else {
      return "It's a draw";
    }
  }
};

let result = playRound(playerSelection, computerSelection);
