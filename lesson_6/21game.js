const readline = require('readline-sync');

const SPADE = String.fromCharCode(9824);
const HEART = String.fromCharCode(9829);
const CLUB = String.fromCharCode(9827);
const DIAMOND = String.fromCharCode(9830);

const FULL_DECK = [
  [2, SPADE], [2, HEART], [2, CLUB], [2, DIAMOND], [3, SPADE],
  [3, HEART], [3, CLUB], [3, DIAMOND], [4, SPADE], [4, HEART],
  [4, CLUB], [4, DIAMOND], [5, SPADE], [5, HEART], [5, CLUB],
  [5, DIAMOND], [6, SPADE], [6, HEART], [6, CLUB], [6, DIAMOND],
  [7, SPADE], [7, HEART], [7, CLUB], [7, DIAMOND], [8, SPADE],
  [8, HEART], [8, CLUB], [8, DIAMOND], [9, SPADE], [9, HEART],
  [9, CLUB], [9, DIAMOND], [10, SPADE], [10, HEART], [10, CLUB],
  [10, DIAMOND], ['J', SPADE], ['J', HEART], ['J', CLUB],
  ['J', DIAMOND], ['Q', SPADE], ['Q', HEART], ['Q', CLUB],
  ['Q', DIAMOND], ['K', SPADE], ['K', HEART], ['K', CLUB],
  ['K', DIAMOND], ['A', SPADE], ['A', HEART], ['A', CLUB],
  ['A', DIAMOND]];

const TWENTY_ONE = 21;
const DEALER_LIMIT = 17;
const ACE_HIGH_VALUE = 11;
const FACE_VALUE = 10;

let playerTotal;
let dealerTotal;
let playerMatchScore = 0;
let dealerMatchScore = 0;

function prompt (message) {
  console.log(`=> ${message}`);
}

function initializeDeck (deck) {
  let copyDeck = deck.slice();
  return copyDeck;
}

function dealCard (deck, hand) {
  let currentCard = deck[Math.floor(Math.random() * (deck.length))];
  hand.push(currentCard);
  let locationInDeck = deck.indexOf(currentCard);
  deck.splice(locationInDeck, 1);
}

function displayHand (hand, player) {
  let displayHand = `${player}'s Hand: `;
  for (let index = 0; index < hand.length; index++) {
    displayHand += `[${[hand[index][0]]}${[hand[index][1]]}] `;
  }
  return displayHand;
}

function displayDealerHand (hand) {
  let displayHand = "Dealer's Hand: ";
  displayHand += `[${[hand[0][0]]}${[hand[0][1]]}] [?]`;
  return displayHand;
}

function totalHand (hand) {
  let copyHand = hand.slice();
  copyHand = copyHand.reduce((acc, val) => acc.concat(val), []).filter(card => typeof (card) === 'number' || card === 'J' || card === 'Q' || card === 'K' || card === 'A');

  copyHand = copyHand.map(card => {
    if (typeof (card) !== 'number') {
      card = card === 'A' ? ACE_HIGH_VALUE : FACE_VALUE;
      return card;
    } else {
      return card;
    }
  });

  if (copyHand.includes(ACE_HIGH_VALUE)) {
    while (copyHand.reduce((sum, value) => sum + value) > TWENTY_ONE) {
      let locationInHand = copyHand.indexOf(ACE_HIGH_VALUE);
      copyHand[locationInHand] = 1;
      if (!(copyHand.includes(ACE_HIGH_VALUE))) break;
    }
  }
  return copyHand.reduce((sum, value) => sum + value);
}

function playerInputCheck() {
  let choice = readline.question().trim().toLowerCase();
  while (choice !== 'h' && choice !== 's') {
    prompt('Invalid entry. Hit or Stay? (h/s)');
    choice = readline.question().trim().toLowerCase();
  }
  return choice;
}


function playerPlays (playerHand, gameDeck) {
  while (true) {
    playerTotal = totalHand(playerHand);
    prompt('Hit or Stay? (h/s)');

    let choice = playerInputCheck();

    if (choice === 'h') {
      dealCard(gameDeck, playerHand);
      playerTotal = totalHand(playerHand);

      prompt(displayHand(playerHand, 'Player'));

      if (playerTotal > TWENTY_ONE) {
        return playerTotal;
      }
    } else {
      prompt(`You hold at ${playerTotal}.`);
      prompt(displayHand(playerHand, 'Player'));
      return playerTotal;
    }
  }
}

function dealerPlays(playerHand, dealerHand, gameDeck) {
  dealerTotal = totalHand(dealerHand);
  while (dealerTotal < DEALER_LIMIT) {
    prompt(`Dealer hits with ${dealerTotal}!`);
    dealCard(gameDeck, dealerHand);
    dealerTotal = totalHand(dealerHand);

    prompt(displayHand(dealerHand, 'Dealer'));
    prompt('---------------');
  }
  if (dealerTotal <= TWENTY_ONE) {
    prompt(`Dealer holds at ${dealerTotal}.`);
    prompt('---------------');
    prompt(displayHand(playerHand, 'Player'));
    prompt(displayHand(dealerHand, 'Dealer'));
    return dealerTotal;
  } else {
    return dealerTotal;
  }
}


function displayResult(playerTotal, dealerTotal) {
  if (playerTotal > TWENTY_ONE) {
    prompt(`Dealer wins! Player busted with ${playerTotal}!`);
    tallyMatch('Dealer');
  } else if (playerTotal < 22 && dealerTotal > TWENTY_ONE) {
    prompt(`Dealer busted with ${dealerTotal}! Player wins!`);
    tallyMatch('Player');
  } else if (playerTotal === dealerTotal) {
    prompt(`Player and Dealer push at ${playerTotal}!`);
  } else if (playerTotal > dealerTotal) {
    prompt(`Player wins with ${playerTotal}!`);
    tallyMatch('Player');
  } else {
    prompt(`Dealer wins with ${dealerTotal}!`);
    tallyMatch('Dealer');
  }
  prompt('---------------');
}
function playAgain() {
  prompt('Play another hand? (y/n)');

  let answer = readline.question().trim().toLowerCase();

  while (answer !== 'n' && answer !== 'y') {
    prompt('Invalid entry. Play another hand? (y/n)');
    answer = readline.question().trim().toLowerCase();
  }
  return answer;
}

function tallyMatch(winner) {
  if (winner === 'Player') {
    playerMatchScore += 1;
  } else if (winner === 'Dealer') {
    dealerMatchScore += 1;
  }
}

function displayMatchResults() {
  if (playerMatchScore === 5) {
    prompt(`Player has won the match ${playerMatchScore} to ${dealerMatchScore}!`);
    playerMatchScore = 0;
    dealerMatchScore = 0;
  } else if (dealerMatchScore === 5) {
    prompt(`Dealer has won the match ${dealerMatchScore} to ${playerMatchScore}!`);
    playerMatchScore = 0;
    dealerMatchScore = 0;
  } else {
    prompt(`Current Match Score: Player ${playerMatchScore}, Dealer ${dealerMatchScore}!`);
  }
}

prompt('Welcome to 21! Good Luck!');

while (true) {
  let gameDeck = initializeDeck(FULL_DECK);

  let playerHand  = [];
  let dealerHand = [];

  dealCard(gameDeck, playerHand);
  dealCard(gameDeck, dealerHand);
  dealCard(gameDeck, playerHand);
  dealCard(gameDeck, dealerHand);

  prompt(displayHand(playerHand, 'Player'));
  prompt(displayDealerHand(dealerHand));

  playerTotal = playerPlays(playerHand, gameDeck);

  if (playerTotal < 22) {
    dealerTotal = dealerPlays(playerHand, dealerHand, gameDeck, playerTotal);
  }
  displayResult(playerTotal, dealerTotal);
  displayMatchResults();

  let answer = playAgain();
  console.clear();

  if (answer === 'n') break;
}
