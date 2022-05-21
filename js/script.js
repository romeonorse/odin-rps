// COMPUTER SELECTION
let computerSelection;

const computerPlay = () => {

  // Generate random number from 0-2
  let randomNumber = Math.floor(Math.random() * 3);
  // Use switch to return value
  switch(randomNumber) {
    case 0:
      computerSelection = 'rock';
      break;
    case 1:
      computerSelection = 'paper';
      break;
    case 2:
      computerSelection = 'scissors';
      break;
  }
  // console.log(computerSelection);
  return computerSelection;
}

computerPlay();

// PLAYER SELECTION
// const playerPrompt = () => {
  //   // Take player's input and make it lowercase
  //   let playerInput = prompt('Choose wisely between rock, paper, and scissors').toLowerCase();
  
//   if (playerInput === 'rock') {
//     return 'Rock';
//   } else if (playerInput === 'paper') {
//     return 'Paper';
//   } else if (playerInput === 'scissors') {
//     return 'Scissors'
//   } else {
//     console.log('Reload the page and try to choose correct answer');
//   }
// };

let playerSelection;

const images = document.querySelectorAll('img');
const borderRemover = () => {
  images[0].classList.remove('selected');
  images[1].classList.remove('selected');
  images[2].classList.remove('selected');
};

images.forEach(image => {
  image.addEventListener('click', function(e) {
    playerSelection = e.target.className;
    borderRemover();
    image.classList.add('selected');
    // console.log(playerSelection, computerSelection);
    // return playerSelection;
  })
})


let result;

// PLAYING A GAME
const playRound = (playerSelection, computerSelection) => {

  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      result = 'You lose! Paper beats Rock';
    } else if (computerSelection === 'scissors') {
      result = 'You won! Rock beats Scissors';
    } else {
      result = "It's a draw";
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      result = 'You lose! Scissors beats Paper';
    } else if (computerSelection === 'rock') {
      result = 'You won! Paper beats Rock';
    } else {
      result = "It's a draw";
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      result = 'You lose! Rock beats Scissors';
    } else if (computerSelection === 'paper') {
      result = 'You won! Scissors beats Paper';
    } else {
      result = "It's a draw";
    }
  }

  console.log(result);
  return result;
};



// DISPLAYING RESULTS
const button = document.querySelector('button');
const message = document.getElementById('message');
const endgame = document.getElementById('endgame');
const inner = document.querySelector('.inner-container');

let playerTotal = 0;
let computerTotal = 0;

// PLAYING 5 ROUNDS
button.addEventListener('click', function() {
  computerPlay();
  playRound(playerSelection, computerSelection);
  message.textContent = result;

  if (message.textContent.includes('You won')) {
    playerTotal++;
    message.classList.add('won');
    console.log('One point to humans');
  } else if (message.textContent.includes('You lose')) {
    computerTotal++;
    message.classList.add('lost');
    console.log('One point to machines');
  } else {
    message.classList.remove('won');
    message.classList.remove('lost');
  }
  
  endgame.textContent = `Player: ${playerTotal} - Computer: ${computerTotal}`;

  
  if (playerTotal === 5) {
    endgame.textContent = `Humanity won with 5 points against ${computerTotal}`;
    inner.style.display = 'none';
  } else if (computerTotal === 5) {
    endgame.textContent = `Machines won with 5 points against ${playerTotal}`;
    inner.style.display = 'none';
  }
});




