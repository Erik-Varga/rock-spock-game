// Variables
const roundNumberElement = document.getElementById('roundNumber');

const playerScoreElement = document.getElementById('playerScore');
const playerChoiceElement = document.getElementById('playerChoice');

const playerRockNumberElement = document.getElementById('playerRockNumber');
const playerPaperNumberElement = document.getElementById('playerPaperNumber');
const playerScissorsNumberElement = document.getElementById('playerScissorsNumber');
const playerLizardNumberElement = document.getElementById('playerLizardNumber');
const playerSpockNumberElement = document.getElementById('playerSpockNumber');

const randomSelectBtn = document.getElementById('randomSelect');

const computerScoreElement = document.getElementById('computerScore');
const computerChoiceElement = document.getElementById('computerChoice');

const computerRockNumberElement = document.getElementById('computerRockNumber');
const computerPaperNumberElement = document.getElementById('computerPaperNumber');
const computerScissorsNumberElement = document.getElementById('computerScissorsNumber');
const computerLizardNumberElement = document.getElementById('computerLizardNumber');
const computerSpockNumberElement = document.getElementById('computerSpockNumber');

const resultText = document.getElementById('resultText');
const summaryText = document.getElementById('summaryText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let roundNumber = 0;
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

let playerChoices = [];

let playerRockNumber = 0;
let playerPaperNumber = 0;
let playerScissorsNumber = 0;
let playerLizardNumber = 0;
let playerSpockNumber = 0;

let computerRockNumber = 0;
let computerPaperNumber = 0;
let computerScissorsNumber = 0;
let computerLizardNumber = 0;
let computerSpockNumber = 0;

// Functions

// reset selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

function resetCounts() {
  playerRockNumber = 0;
  playerRockNumberElement.textContent = '0';
  
  playerPaperNumber = 0;
  playerPaperNumberElement.textContent = '0';
  
  playerScissorsNumber = 0;
  playerScissorsNumberElement.textContent = '0';

  playerLizardNumber = 0;
  playerLizardNumberElement.textContent = '0';

  playerSpockNumber = 0;
  playerSpockNumberElement.textContent = '0';

  computerRockNumber = 0;
  computerRockNumberElement.textContent = '0';
  
  computerPaperNumber = 0;
  computerPaperNumberElement.textContent = '0';
  
  computerScissorsNumber = 0;
  computerScissorsNumberElement.textContent = '0';

  computerLizardNumber = 0;
  computerLizardNumberElement.textContent = '0';

  computerSpockNumber = 0;
  computerSpockNumberElement.textContent = '0';

}

// reset game
function resetAll() {
  roundNumber = 0;
  roundNumberElement.textContent = roundNumber;

  resultText.textContent = "Make a selection";
  summaryText.textContent = "...";

  playerScoreNumber = 0;
  playerScoreElement.textContent = playerScoreNumber;
  playerChoiceElement.textContent = '';
  
  computerScoreNumber = 0;
  computerScoreElement.textContent = computerScoreNumber;
  computerChoiceElement.textContent = '';

  resetSelected();
  resetCounts();
}

// random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

// updates score
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
    summaryText.textContent = 'No score.';
  } else {
    const choice = choices[playerChoice];
    
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      if (playerChoice != 'scissors') {
        summaryText.textContent = `${playerChoice} defeats ${computerChoice}`;
      } else {
        summaryText.textContent = `${playerChoice} defeat ${computerChoice}`;
      }
      playerScoreNumber++;
      playerScoreElement.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      if (computerChoice != 'scissors') {
        summaryText.textContent = `${computerChoice} defeats ${playerChoice}`;
      } else {
        summaryText.textContent = `${computerChoice} defeat ${playerChoice}`;
      }
      computerScoreNumber++;
      computerScoreElement.textContent = computerScoreNumber;
    }
  }
}

// increase round number
function increaseRoundNumber() {
  roundNumber++;
  roundNumberElement.textContent = roundNumber;
}

// call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
  increaseRoundNumber();
}

// pass player selection value to icon
function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceElement.textContent = ' - Rock ';
      playerRockNumber++;
      playerRockNumberElement.textContent = playerRockNumber;
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceElement.textContent = ' - Paper ';
      playerPaperNumber++;
      playerPaperNumberElement.textContent = playerPaperNumber;
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceElement.textContent = ' - Scissors ';
      playerScissorsNumber++;
      playerScissorsNumberElement.textContent = playerScissorsNumber;
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceElement.textContent = ' - Lizard ';
      playerLizardNumber++;
      playerLizardNumberElement.textContent = playerLizardNumber;
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceElement.textContent = ' - Spock ';
      playerSpockNumber++;
      playerSpockNumberElement.textContent = playerSpockNumber;
      break;
    default:
      break;  
  }
}

// pass computer selection value to icon
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceElement.textContent = ' - Rock ';
      computerRockNumber++;
      computerRockNumberElement.textContent = computerRockNumber;
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceElement.textContent = ' - Paper ';
      computerPaperNumber++;
      computerPaperNumberElement.textContent = computerPaperNumber;
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceElement.textContent = ' - Scissors ';
      computerScissorsNumber++;
      computerScissorsNumberElement.textContent = computerScissorsNumber;
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceElement.textContent = ' - Lizard ';
      computerLizardNumber++;
      computerLizardNumberElement.textContent = computerLizardNumber;
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceElement.textContent = ' - Spock ';
      computerSpockNumber++;
      computerSpockNumberElement.textContent = computerSpockNumber;
      break;
    default:
      break;  
  }
}



// Event Listeners
randomSelectBtn.addEventListener('click', )

// Onload
// startConfetti();