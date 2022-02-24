const handPlay = ["Rock", "Paper", "Scissors"];
let playerScore = 1; 
let computerScore = 1; 

function computerPlay() {
  return handPlay[Math.floor(Math.random() * handPlay.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Your play is: ");
  computerSelection = computerPlay();
  let rock = /rock/i;
  let paper = /paper/i;
  let scissors = /scissors/i;

  if (rock.test(playerSelection)) {
    switch (true) {
      case computerSelection == "Rock":
        alert("Draw! Rock doesn't beat Rock!");
        break;
      case computerSelection == "Paper":
        computerScore++
        alert("You lose! Rock doesn't beats Paper!");
        break;
      case computerSelection == "Scissors":
        playerScore++
        alert("You win! Rock beats Scissors!");
        break;
    }
  } else if (paper.test(playerSelection)) {
    switch (true) {
      case computerSelection == "Rock":
        playerScore++
        alert("You win! Paper beats Rock!");
        break;
      case computerSelection == "Paper":
        alert("Draw! Paper doesn't beats Paper!");
        break;
      case computerSelection == "Scissors":
        computerScore++
        alert("You lose! Scissors beat Paper!");
        break;
    }
  } else if (scissors.test(playerSelection)) {
    switch (true) {
      case computerSelection == "Rock":
        computerScore++
        alert("You lose! Rock beats Scissors!");
        break;
      case computerSelection == "Paper":
        playerScore++
        alert("You win! Scissors beat Paper!");
        break;
      case computerSelection == "Scissors":
        alert("Draw! Scissors doesn't beat sSissors!");
        break;
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (playerScore > computerScore) {
    alert("Congratulations! You have winned!");
  }
  else if (playerScore < computerScore) {
    alert("Bad news! You have lost!");
  }
  else alert("It's draw!");
}
