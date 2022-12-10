let playerScore = 0;
let computerScore = 0;

// computer choise
const computerPlay = () => {
  let myArray = ["paper", "rock", "scissors"];
  let randomWord = Math.floor(Math.random() * 3);
  document.getElementById("computer-selection").innerHTML = myArray[randomWord];
  return myArray[randomWord];
};

// player choise
const playerSelection = (str) => {
  return str;
};

// play board
const playRound = (playerSelection, computerPlay) => {
  let computer = computerPlay;
  console.log(playerSelection, computerPlay);
  if (playerSelection == "rock" && computer == "paper") {
    return `You Lose`;
  }
  if (playerSelection == "paper" && computer == "rock") {
    return `You win`;
  }
  if (playerSelection == "rock" && computer == "scissors") {
    return `You win`;
  }
  if (playerSelection == "scissors" && computer == "paper") {
    return `You win`;
  }
  if (playerSelection == "paper" && computer == "scissors") {
    return `You Lose`;
  }
  if (playerSelection == "scissors" && computer == "rock") {
    return `You Lose`;
  } else {
    return "Draw";
  }
};

//  show winner and reset the game
const winner = () => {
  if (playerScore + computerScore == 5) {
    document.getElementById("winner").innerHTML =
      playerScore >= 3 ? `You win` : `Computer wins`;
    document.getElementById(
      "total-score"
    ).innerHTML = `Your Sceore: ${playerScore} Computer Score: ${computerScore}`;
  }
  if (playerScore + computerScore > 5) {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("status").innerHTML = null;
    document.getElementById("winner").innerHTML = null;
    document.getElementById("total-score").innerHTML = null;
  }
};

// score the player and update status for each game
const game = (str) => {
  let computer = computerPlay();
  let playround = playRound(str, computer);
  if (playround == "You win") {
    playerScore++;
    document.getElementById("status").innerHTML = "You win";
  }
  if (playround == "You Lose") {
    computerScore++;
    document.getElementById("status").innerHTML = "You Lose";
  }
  if (playround == ("Draw")) {
    document.getElementById("status").innerHTML = "It's a Draw try again";
  }
  winner();
};

// get player action
let paper = document
  .querySelector(".paper")
  .addEventListener("click", () => game("paper"));
let rock = document
  .querySelector(".rock")
  .addEventListener("click", () => game("rock"));
let scissors = document
  .querySelector(".scissors")
  .addEventListener("click", () => game("scissors"));
