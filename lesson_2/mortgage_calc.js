const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function converNum(stringNumber) {
  stringNumber = stringNumber.trim().replace('$', '').replace('%', '').replace('years', '');
  return Number(stringNumber);
}

prompt('Welcome to the Mortgage Calculator!');

let answer = 'y';

while (answer === 'y') {
  prompt('--------------------------------------');

  prompt('What is your loan amount? (provide the number without commas; eg. $25000.00)');
  let loanAmount = readline.question();
  loanAmount = converNum(loanAmount);

  while (!loanAmount) {
    prompt('Please re-enter a valid loan amount above 0 and without commas.');
    loanAmount = readline.question();
    loanAmount = converNum(loanAmount);
  }

  prompt('What is your annual percentage rate(APR)? (eg. 5%)');
  let annualPercentageRate = readline.question();
  let monthlyInterestRate = ((converNum(annualPercentageRate) / 100) / 12);

  while (!monthlyInterestRate) {
    prompt('Please re-enter a valid annual interest rate above 0.');
    annualPercentageRate = readline.question();
    monthlyInterestRate = ((converNum(annualPercentageRate) / 100) / 12);
  }

  prompt('What is your loan durations in years? (eg. 2.5)');
  let monthLoanDuration = readline.question();
  monthLoanDuration = (converNum(monthLoanDuration)) * 12;

  while (!monthLoanDuration) {
    prompt('Please re-enter a valid loan duration in years above 0.');
    monthLoanDuration = readline.question();
    monthLoanDuration = (converNum(monthLoanDuration)) * 12;
  }

  let monthlyPayment =
    loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-monthLoanDuration))));
  monthlyPayment = (Math.round(monthlyPayment * 100) / 100);

  prompt('Your monthly payment is: $' + String(monthlyPayment) + '.');

  prompt('Need another calculation?');
  prompt('Please enter "y" or "n".');
  answer = readline.question().toLowerCase();
  answer = answer[0];
}