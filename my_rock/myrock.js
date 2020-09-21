// // //ROCK PAPER SCISSORS

// const readline = require('readline');

// const readlinePackage = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout

// });

const message = 'Type 0 for Rock. 1 for Paper. 2 for Scissors?'

const choices = ['rock', 'paper', 'scissors']

const computerChoice = choices[randomNumber()]

const myRock = checksWinner('rock', computerChoice) 
const myPaper = checksWinner('paper,', computerChoice)
const myScissor = checksWinner('rock', computerChoice) 
const printHello = () => {
  return console.log('Hello')
}

// document.querySelector(choice).addEventListener('MOUSEEVENT', playerChoice(choice))



document.querySelector('click-buttons').addEventListener('click', printHello)



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
    return "Player = Rock. \nComputer = Scissors. \nYou Rock Bottomed His Ass!\n"


    } if (playerInput === 'rock' && computerInput === 'rock') {
    return "Player = Rock. \nComputer = Rock. \nCats Game. Try Again!\n"
    

    } if (playerInput === 'paper' && computerInput === 'rock') {
    return "Player = Paper. \nComputer = Rock. \nYou Covered Him for the 1, 2, 3!\n"
    

    } if (playerInput === 'paper' && computerInput === 'scissors') {
    return "Player = Paper. \nComputer = Scissors. \nYou Got Cut Up!\n"
    

    } if (playerInput === 'paper' && computerInput === 'paper') {
    return "Player = Paper. \nComputer = Paper. \nPaper...paper...boring!\n"
    

    } if (playerInput === 'scissors' && computerInput === 'rock') {
    return "Player = Scissors. \nComputer = Rock. \nYou got banged!\n"
    

    } if (playerInput === 'scissors' && computerInput === 'paper') {
    return "Player = Scissors. \nComputer = Paper. \nYou Win, Edward Scissor Hands!\n"
    

    } if (playerInput === 'scissors' && computerInput === 'scissors') {
    return "Player = Scissors. \nComputer = Scissors. \nScissor me timbers, it\'s a tie\n"
    

    } if (playerInput === computerInput) {
    return "Same result!! Try Again, Jonathan Againigains!\n"
    
    

    } else {
    return "Error! Try Again!\n"
    }
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