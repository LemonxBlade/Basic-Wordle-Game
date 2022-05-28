// grab a reference to the .grid element

const grid = document.querySelector('.grid')

let counter = 0

// creating an empty array which will later be populated with boxes
const boxes = []
// create word bank that will be used in the game
const wordList = ['SWORD','HOTEL', 'WATCH', 'TANGO', 'GREEN'];
//creating a random number between 0 and 4 to select a word from the wordbank at random
const randomNumber = Math.floor(Math.random() * 4);


// create one cell with a function
function createCell() {
  console.log('creating a cell')
  counter = counter + 1

// call createCell 30 times
const cell = document.createElement('div')
  // setting the class
  cell.className = 'cell'
  cell.id= "cell"

  // pushes cell to boxes array
  boxes.push(cell);

  grid.append(cell)
}

// listen for keyboard press
document.addEventListener('keydown', logKey);

// defining the number of entered letters
var lettercounter=0;
// empty array for user entered keys
var userInput = [];
// number of correct answers in a row
let greenCounter = 0

// function to enter the users input and compare it to the (random) answer
function logKey(e) {

  if ((/[a-zA-Z]/).test(e.key)){
    // enter user input into box
  boxes[lettercounter].textContent =  e.key.toUpperCase();
  // adding the user input to the array
  userInput.push(e.key.toUpperCase());
  // increments the lettercounter by 1
  lettercounter++;

  // checking to see if we have reached the end of the row
  if (lettercounter % 5 === 0) {
    // checking each row
    for (let i = 0; i < 5; i++) {

      // checking if keys are matching, if matches make background green, if contains but different position make yellow, if key doesnt exist make grey. 
      if (userInput[lettercounter - 5 + i]===wordList[randomNumber][i]) {
        
        boxes[lettercounter - 5 + i].style.backgroundColor = 'green';
        boxes[lettercounter - 5 + i].style.color = 'white';

        greenCounter++;
        console.log(greenCounter);
        if (greenCounter === 5) {

          const title = document.getElementById('title');
          title.textContent = "YOU WONNNNNNN!";

          const button = document.getElementById('button');
          button.style.display = 'block';
          
        }
        
      } else if (!wordList[randomNumber].includes(userInput[lettercounter - 5 + i])){
        boxes[lettercounter - 5 + i].style.backgroundColor = 'darkgrey';
        boxes[lettercounter - 5 + i].style.color = 'white';
      } else {
        
        boxes[lettercounter - 5 + i].style.backgroundColor = '#c9b458';
        boxes[lettercounter - 5 + i].style.color = 'white';
      }
} 

    if (lettercounter === 30 && greenCounter !== 5){
      const title = document.getElementById('title');
          title.textContent = "YOU LOSE! - The answer was " + wordList[randomNumber];
      const button = document.getElementById('button');
          button.style.display = 'block';
    }

    greenCounter = 0;
  }
  }

  
}

const button = document.getElementById('button');
button.addEventListener('click', gameReset)
function gameReset() {
  document.location.reload(true);
}

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()

createCell()
createCell()
createCell()
// when the user clicks the document 
// console.log a 'I've been clicked message'

