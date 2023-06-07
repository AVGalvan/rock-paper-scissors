const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let randomInt = Math.floor(Math.random() * 3)

  return(choices[randomInt])
}

const getPlayerChoice = () =>{
  let playerChoice = prompt('Enter "rock", "paper", or "scissors".');
  console.log(playerChoice)
  
  playerChoice = playerChoice.toLowerCase();
  console.log(playerChoice)

  if(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors'){
    return 'Please input either "rock", "paper", or "scissors".'
  } else {
    return playerChoice;
  }
}

const playRound = () => {
  let playerSelection = getPlayerChoice()
  let computerSelection = getComputerChoice()
  
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

