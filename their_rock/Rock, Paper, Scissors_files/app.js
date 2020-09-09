// const random = random.Math();

const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScn = document.querySelector (".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScn.classList.add("fadeOut");
    });
  };




  // call all the inner functions
startGame();

};

// start the game function
game();













/*
    const rock = () => {
      let rock = a;
      if (a > b || a < c) {
        return 'Rock Wins!'
         } else {
           console.log('cats game')
         }
      }
    
    const paper = () => {
      let paper = b;
      if (b > a || b < c) {
        return 'Paper Wins!'
         } else {
           console.log('cats game')
         }
      }
    

    const scissors = () => {
      let scissors = c;
      if (c > a || c < b) {
          return 'Scissors Wins!'
         } else {
           console.log('cats game')
         }
      }
      
    
  console.log(scissors)

  */