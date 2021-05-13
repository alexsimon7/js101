const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WIN_MATCH = 5;
const FIRST_PLAYER = chooseFirstPlayer();

const winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function chooseFirstPlayer () {
  prompt('Who should be first player? (player, computer, choose(random))');
  let firstPlayer = readline.question().trim();

  while (firstPlayer !== 'player' && firstPlayer !== 'computer' && firstPlayer !== 'choose') {
    prompt('Invalid entry. Who should be first player? (player, computer, choose(random)');
    firstPlayer = readline.question().trim();
  }

  if (firstPlayer === 'choose') {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      firstPlayer = 'player';
    } else {
      firstPlayer = 'computer';
    }
  }
  return firstPlayer;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initializedBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr (array, seperators = ', ', joinWord = 'or') {
  if (array.length <= 1) {
    return array.join();
  } else if (array.length === 2) {
    return array.join(` ${[joinWord]} `);
  } else {
    let copyArray = array.slice();
    let lastElement = copyArray.pop();
    lastElement = joinWord.concat(' ', lastElement);
    copyArray.push(lastElement);
    return copyArray.join(`${seperators}`);
  }
}

function playerChosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerAI (board, marker) {
  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (board[sq1] === marker && board[sq2] === marker &&
      board[sq3] === INITIAL_MARKER) {

      return winningLines[line][2];

    } else if (board[sq1] === INITIAL_MARKER && board[sq2] === marker &&
      board[sq3] === marker) {

      return winningLines[line][0];

    } else if (board[sq1] === marker && board[sq2] === INITIAL_MARKER &&
      board[sq3] === marker) {

      return winningLines[line][1];
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  if (computerAI(board, COMPUTER_MARKER)) {
    let square = computerAI(board, COMPUTER_MARKER);
    board[square] = COMPUTER_MARKER;
  } else if (computerAI(board, HUMAN_MARKER)) {
    let square = computerAI(board, HUMAN_MARKER);
    board[square] = COMPUTER_MARKER;
  } else if (emptySquares(board).includes('5')) {
    board['5'] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function chooseSquare (board, currentPlayer) {
  displayBoard(board);
  if (currentPlayer === 'player') {
    playerChosesSquare(board);
  } else if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  currentPlayer = (currentPlayer === 'player') ? currentPlayer = 'computer' : currentPlayer = 'player';
  return currentPlayer;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function roundResult(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
}

function matchScore (playerScore, computerScore) {
  if (playerScore === WIN_MATCH) {
    prompt(`The match is over! Player won ${playerScore} to ${computerScore}!`);
  } else if (computerScore === WIN_MATCH) {
    prompt(`The match is over! Computer won ${computerScore} to ${playerScore}!`);
  } else {
    prompt(`The score is Player: ${playerScore}, Computer: ${computerScore}.`);
  }
}

function playAgain() {
  prompt('Play again? (y or n)');
  let response = readline.question().toLowerCase();

  while (response !== 'y' && response !== 'n') {
    prompt('Invalid response. Play again? (y or n)');
    response = readline.question().toLowerCase();
  }
  return response;
}

function playTurn(board, currentPlayer) {
  while (true) {

    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
}

function startMatch () {
  let playerScore = 0;
  let computerScore = 0;
  playRound(playerScore, computerScore);
  prompt('Thanks for playing Tic Tac Toe!');
}

function playRound(playerScore, computerScore) {
  while (true) {
    let board = initializedBoard();
    let currentPlayer = FIRST_PLAYER;

    playTurn(board, currentPlayer);

    displayBoard(board);

    playerScore = (detectWinner(board) === 'Player') ? playerScore += 1 : playerScore;
    computerScore = (detectWinner(board) === 'Computer') ? computerScore += 1 : computerScore;

    roundResult(board);
    matchScore(playerScore, computerScore);

    if (playerScore === WIN_MATCH || computerScore === WIN_MATCH) {
      computerScore = 0;
      playerScore = 0;
    }

    let response = playAgain();
    if (response !== 'y') break;
  }
}

startMatch();