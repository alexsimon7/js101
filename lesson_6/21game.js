const readline = require('readline-sync');

const FULL_DECK = [
  2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7,
  8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'J', 'J', 'J', 'J', 'Q', 'Q',
  'Q', 'Q', 'K', 'K', 'K', 'K', 'A', 'A', 'A', 'A'];

const GAME_TO_AMOUNT = 21;
const DEALER_HOLD_AMOUNT = 17;

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
    displayHand += `[${[hand[index]]}] `;
  }
  return displayHand;
}

function displayDealerHand (hand) {
  let displayHand = "Dealer's Hand: ";
  displayHand += `[${[hand[0]]}] [?]`;
  return displayHand;
}

function totalHand (hand) {
  let copyHand = hand.slice();

  copyHand = copyHand.map(card => {
    if (typeof (card) !== 'number') {
      card = card === 'A' ? 11 : 10;
      return card;
    } else {
      return card;
    }
  });

  if (copyHand.includes(11)) {
    while (copyHand.reduce((sum, value) => sum + value) > GAME_TO_AMOUNT) {
      let locationInHand = copyHand.indexOf(11);
      copyHand[locationInHand] = 1;
      if (!(copyHand.includes(11))) break;
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

      if (playerTotal > GAME_TO_AMOUNT) {
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
  while (dealerTotal < DEALER_HOLD_AMOUNT) {
    prompt(`Dealer hits with ${dealerTotal}!`);
    dealCard(gameDeck, dealerHand);
    dealerTotal = totalHand(dealerHand);

    prompt(displayHand(dealerHand, 'Dealer'));
    prompt('---------------');
  }
  if (dealerTotal <= GAME_TO_AMOUNT) {
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
  if (playerTotal > GAME_TO_AMOUNT) {
    prompt(`Dealer wins! Player busted with ${playerTotal}!`);
    tallyMatch('Dealer');
  } else if (playerTotal < 22 && dealerTotal > GAME_TO_AMOUNT) {
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

  if (answer === 'n') break;
}
