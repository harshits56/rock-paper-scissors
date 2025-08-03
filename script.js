function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice() {
    const humanChoice = prompt("Enter rock, paper or scissors").toLowerCase();
    return humanChoice;
  }

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();

    if (human === computerChoice) {
      console.log(`It's a tie! Both chose ${human}.`);
      return;
    } else if (
      (human === "rock" && computerChoice === "scissors") ||
      (human === "paper" && computerChoice === "rock") ||
      (human === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(
        `You Win! ${
          human.charAt(0).toUpperCase() + human.slice(1)
        } beats ${computerChoice}.`
      );
    } else {
      computerScore++;
      console.log(
        `You Lose! ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${human}.`
      );
    }
  }
  for (let round = 1; round <= 5; round++) {
    console.log(`------Round ${round}-----`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score => Human : ${humanScore}, Computer : ${computerScore}`);
  }

  console.log("---Final Result---");
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry You lost the game.");
  } else {
    console.log("It is a tie game");
  }
}

playGame();
