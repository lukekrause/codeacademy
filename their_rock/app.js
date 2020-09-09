// const random = random.Math();

const game = () => {
  let pScore = 0;
  let cScore = 0;
 // start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScn = document.querySelector (".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScn.classList.add("fadeOut");
      match.classList.add("fadeIn");
       
    });
  };
// Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options-button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelector('.hands img')
    console.log(hands);;

    hands.forEach(hands => {
      hands.addEventListener('animationend', function(){
        this.style.animation = "";
      });
    });
// Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
        option.addEventListener("click", function() {
        // computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // Here is where we call compare hands
  
        setTimeout(() => {
          compareHands(this.textContent, computerChoice); 
          // Update Images
          playerHand.src = `./assets${this.textContent}.png`;
          computerHand.src =`./assets${computerChoice}.png`;
        }, 2000);
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
        }); 
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }

const compareHands = (playerChoice, computerChoice) => {
  const winner = document.querySelector(".winner")
  // checking for a tie
  if(playerChoice === computerChoice){
    winner.textContent = "Cats Game";
    return;
  }
  // check for rock
  if(playerChoice === "rock") {
    if(computerChoice === "scissors") {
        winner.textContent = "You Win!"
        pScore++;
        updateScore();
      return;
    }else{
      winner.textContent = "Go Home Loser!";
      cScore++;
      updateScore();
      return;
    }
  }
    // check for paper
    if(playerChoice === "paper") {
      if(computerChoice === "scissors") {
        winner.textContent = "Go Home Loser!"
        pScore++;
        updateScore();
        return;
      }else{ 
        winner.textContent = "You Win!";
        cScore++;
        updateScore();
        return;
      }
    }

    // check for scissors
    if(playerChoice === "scissors") {
      if(computerChoice === "rock") {
         winner.textContent = "Go Home Loser!";
         pScore++;
         updateScore();
         return;
       }else{
         winner.textContent = "You Win!";
         cScore++;
         updateScore();
         return;
            
   }}
};


  // call all the inner functions
startGame();
playMatch();
};



// start the game function
game();
