// //ROCK PAPER SCISSORS

const readline = require('readline');

const readlinePackage = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const message = 'Type 0 for Rock. 1 for Paper. 2 for Scissors?'

const choices = ['rock', 'paper', 'scissors']


// //Call the readline package take 2 arguments 1. string 2. function


  function ourFunction(){
  readlinePackage.question(message, (playerInput) => {
    if (playerInput > 2){
    checkRange(playerInput)
    }


  readlinePackage.close()
})
  }

ourFunction()


function checkRange(x){
  if(x > 2 || x < 0){
  console.log("Value out of range!! Try again idiot")
      ourFunction()
  }
}


  //let computerchoice = choices[randomNumber]
  // returns computerChoice
  
  // Random number gernerator
function randomNumber() {
  return Math.floor(Math.random() * Math.floor(choices.length))
}

const computerChoice = choices[randomNumber()]

// function checksWinner(playerInput, computerInput){}

function checksWinner(playerInput, computerInput) {
  if (playerInput === 'rock' && computerInput === 'paper') {
    return 'You Got Covered!!' 
    }
  if (playerInput === 'rock' && computerInput === 'scissors') {
    return 'You Rock Bottomed His Ass!'
  } 
  if (playerInput === 'paper' && computerInput === 'rock') {
    return 'You Covered Him for the 1, 2, 3!'
  } 
  if (playerInput === 'paper' && computerInput === 'scissors') {
    return 'You Got Cut Up!'
  } 
  if (playerInput === 'scissors' && computerInput === 'rock') {
    return 'You Lost to Dwayne Johnson!'
  } 
    if (playerInput === 'scissors' && computerInput === 'paper') {
    return 'You Win, Edward Scissor Hands!'
  } else {
    return 'Cats Game'
  }
}




// looping through an array
// for (let index = 0; index < choices.length; index ++){
//    console.log(choices[index])
// }