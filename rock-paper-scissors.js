const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let randomInt = Math.floor(Math.random() * 3)

  return(choices[randomInt])
}

// const getPlayerChoice = () =>{
//   let playerChoice = prompt('Enter "rock", "paper", or "scissors".').toLowerCase();

//   while(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors'){
//     playerChoice = prompt('Please input either "rock", "paper", or "scissors".').toLowerCase()
//   }

//   return playerChoice;
// }

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


// const game = () =>{
//   let playerScore = 0;
//   let compScore = 0;

//   // for(i=0;i<5; i++){
//   //   let outcome = playRound()
//   //   if(outcome === 0){
//   //     continue;
//   //   } else if (outcome === 1){
//   //     playerScore++;
//   //   } else if (outcome === 2){
//   //     compScore++;
//   //   } else {
//   //     console.log('Something has gone really wrong')
//   //   }
//   // }

//   // if(playerScore === compScore){
//   //   console.log(`Game is a tie.\nYou scored: ${playerScore} points \nComputer scored: ${compScore} points`)
//   // } else if(playerScore > compScore){
//   //   console.log(`You won!\nYou scored: ${playerScore} points \nComputer scored: ${compScore}`)
//   // } else {
//   //   console.log(`You lost.\nYou scored: ${playerScore} points \nComputer scored: ${compScore}`)
//   // }

// }

const rockButton = document.querySelector('#rock-button')
const paperButton = document.querySelector('#paper-button')
const scissorsButton = document.querySelector('#scissors-button')
const roundResults = document.querySelector('#round-results')
const gameResults = document.querySelector('#game-results')