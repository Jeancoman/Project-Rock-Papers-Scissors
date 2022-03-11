const handPlay = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return handPlay[Math.floor(Math.random() * handPlay.length)];
}

function playRound(evt) {
  const computerSelection = computerPlay();

  if (playerScore == 0 || computerScore == 0) {
    const playerWin = document.getElementById("result");
    playerWin.classList.remove("winner");
    const computerWin = document.getElementById("result");
    computerWin.classList.remove("loser");
  }

  if (evt.textContent == "Rock") {
    switch (true) {
      case computerSelection == "Rock":
        const rockRock = document.getElementById("result");
        rockRock.textContent = "Draw! Rock doesn't beat Rock!";
        break;
      case computerSelection == "Paper":
        computerScore++;
        const rockPaper = document.getElementById("result");
        rockPaper.textContent = "You lose! Rock doesn't beats Paper!";
        break;
      case computerSelection == "Scissors":
        playerScore++;
        const rockScissors = document.getElementById("result");
        rockScissors.textContent = "You win! Rock beats Scissors!";
        break;
    }
  } else if (evt.textContent == "Paper") {
    switch (true) {
      case computerSelection == "Rock":
        playerScore++;
        const paperRock = document.getElementById("result");
        paperRock.textContent = "You win! Paper beats Rock!";
        break;
      case computerSelection == "Paper":
        const paperPaper = document.getElementById("result");
        paperPaper.textContent = "Draw! Paper doesn't beats Paper!";
        break;
      case computerSelection == "Scissors":
        computerScore++;
        const paperScissors = document.getElementById("result");
        paperScissors.textContent = "You lose! Scissors beat Paper!";
        break;
    }
  } else if (evt.textContent == "Scissors") {
    switch (true) {
      case computerSelection == "Rock":
        computerScore++;
        const scissorsRock = document.getElementById("result");
        scissorsRock.textContent = "You lose! Rock beats Scissors!";
        break;
      case computerSelection == "Paper":
        playerScore++;
        const scissorsPaper = document.getElementById("result");
        scissorsPaper.textContent = "You win! Scissors beat Paper!";
        break;
      case computerSelection == "Scissors":
        const scissorsScissors = document.getElementById("result");
        scissorsScissors.textContent = "Draw! Scissors doesn't beat Scissors!";
        break;
    }
  }

  const playerScoreText = document.getElementById("player-score");
  playerScoreText.textContent = `${playerScore}`;
  const computerScoreText = document.getElementById("computer-score");
  computerScoreText.textContent = `${computerScore}`;

  if (playerScore >= 5) {
    const playerWin = document.getElementById("result");
    playerWin.classList.toggle("winner");
    playerWin.textContent = "Congratulations! You win!";
    return (
      (playerScore = 0),
      (computerScore = 0)
    );
  } else if (computerScore >= 5) {
    const computerWin = document.getElementById("result");
    computerWin.classList.toggle("loser");
    computerWin.textContent = "Bad news! You lost!";
    return (
      (playerScore = 0),
      (computerScore = 0)
      );
  }
}
