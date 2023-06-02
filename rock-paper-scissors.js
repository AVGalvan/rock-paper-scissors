const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let randomInt = Math.floor(Math.random() * 3)

  return(choices[randomInt])
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection = toLowerCase(playerSelection);

  if(playerSelection === computerSelection){
    return 'Tie! You both played the same option'
  } else if (playerSelection === 'rock'){
    if (computerSelection === 'scissors'){
      return 'You win! Computer chose scissors.';
    } else {
      return 'You lose! Computer chose paper.';
    }
  } else if (playerSelection === 'paper'){
    if(computerSelection === 'rock'){
      return 'You win! Computer chose rock.'
    } else {
      return 'You lose! Computer chose scissors.'
    }
  } else if (playerSelection === 'scissors'){
    if(computerSelection === 'paper'){
      return 'You win! Computer chose paper.'
    } else {
      return 'You lose! Computer chose rock.'
    }
  }

}

