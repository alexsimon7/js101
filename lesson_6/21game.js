const readline = require('readline-sync');

const FULL_DECK = [
  2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7,
  8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'J', 'J', 'J', 'J', 'Q', 'Q',
  'Q', 'Q', 'K', 'K', 'K', 'K', 'A', 'A', 'A', 'A'];

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

function displayPlayerHand (hand) {
  let displayHand = 'Player Hand: ';
  for (index = 0; index < hand.length; index++) {
    displayHand += `[${[hand[index]]}] `;
  }
  return displayHand;
}

function displayDealerHand (hand) {
  let displayHand = 'Dealer Hand: ';
  if (hand.length === 2) { //Bug - need to fix display of dealer hand after first hand
    return displayHand += `[${[hand[0]]}] [?]`
  } else {
    for (index = 0; index < hand.length; index++) {
      displayHand += `[${[hand[index]]}] `;
    }
    return displayHand;
  }
}

function totalHand (hand) {
  let copyHand = hand.slice();
  
 //Numeralizes Hand 
  copyHand = copyHand.map(card => {
    if (typeof(card) !== 'number') { //filter?
      return (card === 'A' ? card = 11 : card = 10);
    } else {
      return card = card;
    }
  });
 
//1. If hand includes Aces(11)
  if (copyHand.includes(11)) {
    while (copyHand.reduce((sum, value) => sum + value) > 21) {
      let locationInHand = copyHand.indexOf(11);
      copyHand[locationInHand] = 1;
      if (!(copyHand.includes(11))) break;
    }
    return copyHand.reduce((sum, value) => sum + value);

  } else {
//2. If hand does not includes Aces(11)     
    return copyHand.reduce((sum, value) => sum + value);
  }
}

function playRound () {

  prompt('Welcome to 21! Good Luck!');

  //1.Initialize Deck
  let gameDeck = initializeDeck(FULL_DECK);

  //2. Deal cards to player and dealer
  let playerHand  = [];
  let dealerHand = [];

  //2a. Select cards from game deck and put in players hand, update game deck
  dealCard(gameDeck, playerHand);  
  dealCard(gameDeck, dealerHand);
  dealCard(gameDeck, playerHand);
  dealCard(gameDeck, dealerHand);

  //2b. Display cards to player
  prompt(displayPlayerHand(playerHand));
  prompt(displayDealerHand(dealerHand));

  //3. Player turn: hit or stay (repeat until bust or stay)

  while (true) {

  //3a. Prompt player to hit or stay
    prompt('Hit or Stay? (h/s)');

  //3b. Take input from player (and check for valid)
    let choice = readline.question().trim().toLowerCase();
    while (choice !== 'h' && choice !== 's') {
      prompt('Invalid entry. Hit or Stay? (h/s)');
      choice = readline.question().trim().toLowerCase();
    }

  //3c. If hit add card, stay (nada)
    if(choice === 'h') {
      dealCard(gameDeck, playerHand);
    
      prompt(displayPlayerHand(playerHand));
      prompt(displayDealerHand(dealerHand));

  //3d. Check for bust/if player busts, dealer wins
      if (totalHand(playerHand) > 21) {
        prompt(`You bust!Your cards total ${totalHand(playerHand)}.`)
        break;
      }
    } else {
      prompt(`You hold at ${totalHand(playerHand)}.`);
      break;
    }
  }

  //5. Dealer turn: hit or stay (repeat until total >= 17)
  if (totalHand(playerHand) < 22) {
    while (totalHand(dealerHand) < 17) {
      prompt(`Dealer hits at ${totalHand(dealerHand)}!`);
      dealCard(gameDeck, dealerHand);

      prompt(displayDealerHand(dealerHand));
      prompt('---------------');

      if (totalHand(dealerHand) > 21) {
        prompt(`Dealer busts! Dealer's cards total ${totalHand(dealerHand)}.`)
        break;
      }
    }
    if (totalHand(dealerHand) <= 21) {
      prompt(`Dealer holds at ${totalHand(dealerHand)}.`);
      prompt('---------------');
      prompt(displayPlayerHand(playerHand));
      prompt(displayDealerHand(dealerHand));
    }  
  }  

  if (totalHand(playerHand) > 21) {
    prompt(`Dealer wins! Player is busted!`);
  } else if (totalHand(playerHand) < 22 && totalHand(dealerHand) > 21) {
    prompt('Dealer busted! Player wins!');
  } else if (totalHand(playerHand) === totalHand(dealerHand)) {
    prompt(`Player and Dealer push at ${totalHand(playerHand)}!`);
  } else {
    if (totalHand(playerHand) > totalHand(dealerHand)) {
      prompt(`Player wins with ${totalHand(playerHand)}!`);
    } else {
      prompt(`Dealer wins with ${totalHand(dealerHand)}!`);
    } 
  }





  //6. If dealer busts, player wins





  //7. Compare cards and declare winner
}

playRound();