const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
const FULL_CHOICES = ['(r)ock', '(p)aper', '(s)cissors', '(l)izard', '(S)pock'];
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'Spock'],
  scissors: ['paper', 'lizard'],
  Spock: ['scissors', 'rock'],
  lizard: ['paper', 'Spock'],
};

let playerScore = 0;
let computerScore = 0;

function prompt (message) {
  console.log(`=> ${message}`);
}

function isValidChoice(choice) {
  while (!(VALID_CHOICES.includes(choice))) {
    prompt("That's not a valid choice");
    choice = readline.question();

    choice = convertUserInput(choice);
  }
  return choice;
}

function computerSelection() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function displayWinner (choice, computerChoice) {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}`);

  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    prompt('You won this round!');
    return 'p';
  } else if (choice === computerChoice) {
    prompt('You tied this round!');
    return 't';
  } else {
    prompt('You lost this round!');
    return 'c';
  }
}

function convertUserInput (choice) {
  switch (choice) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 's':
      return 'scissors';
    case 'l':
      return 'lizard';
    case 'S':
      return 'Spock';
    default:
      return choice;
  }
}

function trackGrandWinner (match) {
  if (match === 'p') {
    playerScore += 1;
  } else if (match === 'c') {
    computerScore += 1;
  }
  if (playerScore === 5) {
    prompt(`Player is the Grand Winner!!! Player won ${playerScore} to ${computerScore}`);
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    prompt(`Computer is the Grand Winner!!! The Computer won ${computerScore} to ${playerScore}`);
    playerScore = 0;
    computerScore = 0;
  } else {
    prompt(`The score is Player: ${playerScore}, Computer: ${computerScore}`);
  }
}

prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
prompt("------------------------------------------------");
prompt("The Grand Winner is the first to 5 wins!");
prompt("------------------------------------------------");

while (true) {
  prompt(`Choose one: ${FULL_CHOICES.join(', ')}`);
  let choice = readline.question();

  choice = isValidChoice(convertUserInput(choice));

  let computerChoice = computerSelection();

  trackGrandWinner(displayWinner(choice, computerChoice));

  prompt('Play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'n') break;
}

if (playerScore > 0 || computerScore > 0) {
  prompt(`The score was Player: ${playerScore}, Computer: ${computerScore}`);
}

prompt('Goodbye!');