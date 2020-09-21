// // //ROCK PAPER SCISSORS

// const readline = require('readline');

// const readlinePackage = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout

// });

const message = 'Type 0 for Rock. 1 for Paper. 2 for Scissors?'

const choices = ['rock', 'paper', 'scissors']

const computerChoice = choices[randomNumber()]

const playerClickRock = document.querySelector('.rock') 
playerClickRock.addEventListener('click', myRock)

function myRock() {return checksWinner('rock', computerChoice) }
function myPaper() {return checksWinner('paper', computerChoice) }
function myScissors() {return checksWinner('scissors', computerChoice) }



function randomNumber() {
return Math.floor(Math.random() * Math.floor(choices.length))}

// function ourFunction(input){
//     readlinePackage.question(message, (input) => {
//     let playerChoice = choices[input]
//         if (input > 2){checkRange(input) 
//     } else {
//       console.log(checksWinner(playerChoice, computerChoice))
//       ourFunction()
//       }
//     });

  function checkRange(x){
    if(x > 2 || x < 0 || x === ""){
      console.log("Value out of range!! Try again\n")
      ourFunction()
    }  
  } 

  function checksWinner(playerInput, computerInput) {

    if (playerInput === 'rock' && computerInput === 'paper') {
    return "Player = Rock. \nComputer = Paper. \nYou Got Covered!!\n"

    } if (playerInput === 'rock' && computerInput === 'scissors') {
    return "Player = Rock. \nComputer = Scissors. \nYou Rock Bottomed His Ass!\n",
    console.log('Test')

    } if (playerInput === 'rock' && computerInput === 'rock') {
    return "Player = Rock. \nComputer = Rock. \nCats Game. Try Again!\n",
    console.log('Test')

    } if (playerInput === 'paper' && computerInput === 'rock') {
    return "Player = Paper. \nComputer = Rock. \nYou Covered Him for the 1, 2, 3!\n",
    console.log('Test')

    } if (playerInput === 'paper' && computerInput === 'scissors') {
    return "Player = Paper. \nComputer = Scissors. \nYou Got Cut Up!\n",
    console.log('Test')

    } if (playerInput === 'paper' && computerInput === 'paper') {
    return "Player = Paper. \nComputer = Paper. \nPaper...paper...boring!\n",
    console.log('Test')

    } if (playerInput === 'scissors' && computerInput === 'rock') {
    return "Player = Scissors. \nComputer = Rock. \nYou got banged!\n",
    console.log('Test')

    } if (playerInput === 'scissors' && computerInput === 'paper') {
    return "Player = Scissors. \nComputer = Paper. \nYou Win, Edward Scissor Hands!\n",
    console.log('Test')

    } if (playerInput === 'scissors' && computerInput === 'scissors') {
    return "Player = Scissors. \nComputer = Scissors. \nScissor me timbers, it\'s a tie\n",
    console.log('Test')

    } if (playerInput === computerInput) {
    return "Same result!! Try Again, Jonathan Againigains!\n",
    console.log('Test')
    

    } else {
    return "Error! Try Again!\n",
    console.log('Test')}
  }
// }

// const playAgainQuest = ("Play Again? Y/N?" + playAgain())

// console.log("Play Again? Y/N?" + playAgain('y'))

// function playAgain(xPlayAgain) {
//     if (xPlayAgain === 'y') {
//     console.log('y')
//     } if (xPlayAgain === 'n') {
//     return "Thanks for Playing!"
// } }





// ourFunction()

// do {
//   ourFunction()
// }
// while (myNewFunction(true))

// // looping through an array
// // for (let index = 0; index < choices.length; index ++){
// //    console.log(choices[index])
// // }