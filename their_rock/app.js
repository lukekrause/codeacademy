// // //ROCK PAPER SCISSORS

const readline = require('readline');

const readlinePackage = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

const message = 'Type 0 for Rock. 1 for Paper. 2 for Scissors?'

const choices = ['rock', 'paper', 'scissors']

const computerChoice = choices[randomNumber()]

function randomNumber() {
return Math.floor(Math.random() * Math.floor(choices.length))}

function ourFunction(input){
    readlinePackage.question(message, (input) => {
    let playerChoice = choices[input]
        if (input > 2){checkRange(input) 
    } else {
      console.log(checksWinner(playerChoice, computerChoice))
      ourFunction()
      }
    });

  function checkRange(x){
    if(x > 2 || x < 0 || x === ""){
      console.log("Value out of range!! Try again")
      ourFunction()
    }  
  } 

  function checksWinner(playerInput, computerInput) {

    if (playerInput === 'rock' && computerInput === 'paper') {
    return "Player = Rock. \nComputer = Paper. \nYou Got Covered!!"

    } if (playerInput === 'rock' && computerInput === 'scissors') {
    return "Player = Rock. \nComputer = Scissors. \nYou Rock Bottomed His Ass!"

    } if (playerInput === 'rock' && computerInput === 'rock') {
    return "Player = Rock. \nComputer = Rock. \nCats Game. Try Again!"

    } if (playerInput === 'paper' && computerInput === 'rock') {
    return "Player = Paper. \nComputer = Rock. \nYou Covered Him for the 1, 2, 3!"

    } if (playerInput === 'paper' && computerInput === 'scissors') {
    return "Player = Paper. \nComputer = Scissors. \nYou Got Cut Up!"

    } if (playerInput === 'paper' && computerInput === 'paper') {
    return "Player = Paper. \nComputer = Paper. \nPaper...paper...boring!"

    } if (playerInput === 'scissors' && computerInput === 'rock') {
    return "Player = Scissors. \nComputer = Rock. \nYou got banged!" 

    } if (playerInput === 'scissors' && computerInput === 'paper') {
    return "Player = Scissors. \nComputer = Paper. \nYou Win, Edward Scissor Hands!"

    } if (playerInput === 'scissors' && computerInput === 'scissors') {
    return "Player = Scissors. \nComputer = Scissors. \nScissor me timbers, it\'s a tie"

    } if (playerInput === computerInput) {
    return "Same result!! Try Again, Jonathan Againigains!"

    } else {
    return "Error! Try Again!" }
  } 
}




ourFunction()

// // const random = random.Math();

// const game = () => {
//   let pScore = 0;
//   let cScore = 0;
//  // start the game
//   const startGame = () => {
//     const playBtn = document.querySelector(".intro button");
//     const introScn = document.querySelector (".intro");
//     const match = document.querySelector(".match");

//     playBtn.addEventListener("click", () => {
//       introScn.classList.add("fadeOut");
//       match.classList.add("fadeIn");
       
//     });
//   };
// // Play Match
//   const playMatch = () => {
//     const options = document.querySelectorAll(".options-button");
//     const playerHand = document.querySelector(".player-hand");
//     const computerHand = document.querySelector(".computer-hand");
//     const hands = document.querySelector('.hands img')
//     console.log(hands);;

//     hands.forEach(hands => {
//       hands.addEventListener('animationend', function(){
//         this.style.animation = "";
//       });
//     });
// // Computer options
//     const computerOptions = ["rock", "paper", "scissors"];

//     options.forEach(option => {
//         option.addEventListener("click", function() {
//         // computer choice
//         const computerNumber = Math.floor(Math.random() * 3);
//         const computerChoice = computerOptions[computerNumber];
//         // Here is where we call compare hands
  
//         setTimeout(() => {
//           compareHands(this.textContent, computerChoice); 
//           // Update Images
//           playerHand.src = `./assets${this.textContent}.png`;
//           computerHand.src =`./assets${computerChoice}.png`;
//         }, 2000);
//         playerHand.style.animation = "shakePlayer 2s ease";
//         computerHand.style.animation = "shakeComputer 2s ease";
//         }); 
//     });
//   };

//   const updateScore = () => {
//     const playerScore = document.querySelector('.player-score p');
//     const computerScore = document.querySelector('.computer-score p');
//     playerScore.textContent = pScore;
//     computerScore.textContent = cScore;
//   }

// const compareHands = (playerChoice, computerChoice) => {
//   const winner = document.querySelector(".winner")
//   // checking for a tie
//   if(playerChoice === computerChoice){
//     winner.textContent = "Cats Game";
//     return;
//   }
//   // check for rock
//   if(playerChoice === "rock") {
//     if(computerChoice === "scissors") {
//         winner.textContent = "You Win!"
//         pScore++;
//         updateScore();
//       return;
//     }else{
//       winner.textContent = "Go Home Loser!";
//       cScore++;
//       updateScore();
//       return;
//     }
//   }
//     // check for paper
//     if(playerChoice === "paper") {
//       if(computerChoice === "scissors") {
//         winner.textContent = "Go Home Loser!"
//         pScore++;
//         updateScore();
//         return;
//       }else{ 
//         winner.textContent = "You Win!";
//         cScore++;
//         updateScore();
//         return;
//       }
//     }

//     // check for scissors
//     if(playerChoice === "scissors") {
//       if(computerChoice === "rock") {
//          winner.textContent = "Go Home Loser!";
//          pScore++;
//          updateScore();
//          return;
//        }else{
//          winner.textContent = "You Win!";
//          cScore++;
//          updateScore();
//          return;
            
//    }}
// };


//   // call all the inner functions
// startGame();
// playMatch();
// };



// // start the game function
// game();
