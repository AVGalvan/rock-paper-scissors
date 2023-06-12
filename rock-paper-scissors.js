//creating references to document elements
const rockButton = document.querySelector('#rock-button')
const paperButton = document.querySelector('#paper-button')
const scissorsButton = document.querySelector('#scissors-button')
const roundResults = document.querySelector('#round-results')
const gameResults = document.querySelector('#game-results')
 

//function gets a random computer choice
const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  let randomInt = Math.floor(Math.random() * 3)

  return(choices[randomInt])
}

//function plays a round of rock paper scissors
const playRound = (playerSelection) => {
  let computerSelection = getComputerChoice()
  
  if(playerSelection === computerSelection){
    playerScore++;
    computerScore++;
    return 'Tie! You both played the same option.'
  } else if (playerSelection === 'rock'){
    if (computerSelection === 'scissors'){
      playerScore++;
      return 'You win! Computer chose scissors.'
    } else {
      computerScore++;
      return 'You lose! Computer chose paper.'
    }
  } else if (playerSelection === 'paper'){
    if(computerSelection === 'rock'){
      playerScore++
      return 'You win! Computer chose rock.'
    } else {
      computerScore++
      return 'You lose! Computer chose scissors.'
    }
  } else if (playerSelection === 'scissors'){
    if(computerSelection === 'paper'){
      playerScore++;
      return 'You win! Computer chose paper.'
    } else {
      computerScore++;
      return 'You lose! Computer chose rock.'
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

let playerScore = 0;
let computerScore = 0;

//updates html elements to current scores
const updateScore = () => {
  document.getElementById('player-score').textContent = `Player Score: ${playerScore}`;
  document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
}

//takes a message argument (returned from the playRound function) & displays it
const displayRoundResults = (resultMessage) =>{
  document.getElementById('round-results').textContent = resultMessage;
}

//checks if the game is over 
const checkForGameOver = () =>{
  if(playerScore < 5 && computerScore < 5) {
    return false;
  } else if (playerScore === 5 && computerScore === 5) {
    gameResults.textContent = `Game is a tie.\nYou scored: ${playerScore} points \nComputer scored: ${computerScore} points`
  } else if (playerScore === 5 && computerScore < 5) {
    gameResults.textContent = `You won!\nYou scored: ${playerScore} points \nComputer scored: ${computerScore}`
  } else if (playerScore < 5 && computerScore === 5) {
    gameResults.textContent = `You lost!\nYou scored: ${playerScore} points \nComputer scored: ${computerScore}`
  }
}


rockButton.addEventListener('click', () => {
  if(checkForGameOver() === false){
    let result = playRound('rock');
    updateScore();
    displayRoundResults(result);
  }
  checkForGameOver();
})

paperButton.addEventListener('click', () => {
  if(checkForGameOver() === false){
    let result = playRound('paper');
    updateScore();
    displayRoundResults(result);
  }
  checkForGameOver();
})
scissorsButton.addEventListener('click', () => {
  if(checkForGameOver() === false){
    let result = playRound('scissors');
    updateScore();
    displayRoundResults(result);
  }
  checkForGameOver();
})
