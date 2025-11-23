let score = JSON.parse(localStorage.getItem('scores')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let isAutoPlaying = false;
let intervalId;

document.querySelector('.js-auto-play')
  .addEventListener('click', autoPlay);

function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playGame = pickComputerMove();
      playerMove(playGame);
    },1000);
  isAutoPlaying = true;
  } else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playerMove('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playerMove('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playerMove('scissors');
  });

updateScoreElement();

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playerMove('rock');
  } else if(event.key === 'p') {
    playerMove('paper');
  } else if(event.key === 's') {
    playerMove('scissors');
  }
});

function playerMove(playMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if(playMove === 'scissors') {
    if(computerMove === 'rock') {
      result = 'You lose!';
    } else if(computerMove === 'paper') {
      result = 'You Won!';
    } else if(computerMove === 'scissors') {
      result = 'Tie!';
    }
  } else if(playMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie!';
    } else if(computerMove === 'paper') {
      result = 'You lose!';
    } else if(computerMove === 'scissors') {
      result = 'You Won!';
    }
  } else if(playMove === 'paper') {
    if(computerMove === 'rock') {
      result = 'You Won!';
    } else if(computerMove === 'paper') {
      result = 'Tie!';
    } else if(computerMove === 'scissors') {
      result = 'You lose!';
    }
  }

  if(result === 'You Won!'){
    score.wins += 1;
  }else if(result === 'You lose!') {
    score.losses += 1;
  } else if(result === 'Tie!') {
    score.ties += 1;
  }

  document.querySelector('.js-result').innerHTML = `${result}.`;
  document.querySelector('.js-move').innerHTML 
  = `You
  <img src="${playMove}-emoji.png"  class="move-icon">
  <img src="${computerMove}-emoji.png" class="move-icon">
  Computer`;

  updateScoreElement();

  localStorage.setItem('scores', JSON.stringify(score));

}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = 
  `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

}

document.querySelector('.js-clear')
  .addEventListener('click', resetScore);

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
  updateScoreElement();
  localStorage.removeItem('scores');
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}