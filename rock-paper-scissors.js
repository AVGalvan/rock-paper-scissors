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
    console.log( 'Tie! You both played the same option.')
    return 0;
  } else if (playerSelection === 'rock'){
    if (computerSelection === 'scissors'){
      console.log( 'You win! Computer chose scissors.')
      return 1;
    } else {
      console.log( 'You lose! Computer chose paper.')
      return 2;
    }
  } else if (playerSelection === 'paper'){
    if(computerSelection === 'rock'){
      console.log( 'You win! Computer chose rock.')
      return 1;
    } else {
      console.log( 'You lose! Computer chose scissors.')
      return 2;
    }
  } else if (playerSelection === 'scissors'){
    if(computerSelection === 'paper'){
      console.log( 'You win! Computer chose paper.')
      return 1;
    } else {
      console.log( 'You lose! Computer chose rock.')
      return 2;
    }
  }

}

