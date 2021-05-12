const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WIN_MATCH = 5;

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

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

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

while (true) {
  let playerScore = 0;
  let computerScore = 0;

  while (true) {

    let board = initializedBoard();

    while (true) {
      displayBoard(board);

      playerChosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (detectWinner(board) === 'Player') {
      playerScore += 1;
    } else if (detectWinner(board) === 'Computer') {
      computerScore += 1;
    }

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    if (playerScore === WIN_MATCH) {
      prompt(`The match is over! Player won ${playerScore} to ${computerScore}!`);
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === WIN_MATCH) {
      prompt(`The match is over! Computer won ${computerScore} to ${playerScore}!`);
      playerScore = 0;
      computerScore = 0;
    } else {
      prompt(`The score is Player: ${playerScore}, Computer: ${computerScore}.`);
    }

    prompt('Play again? (y or n)');
    let response = readline.question().toLowerCase()[0];

    if (response !== 'y') break;
  }

  break;
}

prompt('Thanks for playing Tic Tac Toe!');


