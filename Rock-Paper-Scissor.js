let score = JSON.parse(localStorage.getItem('scores')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

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

  localStorage.setItem('scores', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `${result}.`;
  document.querySelector('.js-move').innerHTML 
  = `You
  <img src="${playMove}-emoji.png"  class="move-icon">
  <img src="${computerMove}-emoji.png" class="move-icon">
  Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = 
  `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

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
