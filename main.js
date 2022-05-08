
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
} else {
  console.log('Oops! Please choose rock, paper, or scissors!');
};
}
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
     }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
}
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Paper beats rock!';
  } else {
      return 'You won!';
  }
} 
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Scissors beat paper!';
  } else {
      return 'You won!';
  }
}
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Rock beats scissors!';
  } else {
      return 'You won!';
  }
}
  if (userChoice === 'bomb') {
    return 'That\'s not fair but you Win!';
    }
  }  

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The Computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};


playGame();
