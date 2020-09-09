function userName(name) {
    if (name === undefined) {
      console.log('Ask me your question')
    } else {
      let userQuestion = "Hello, " + name + ". " + "Please, ask me your question"
      console.log(userQuestion)
    }
}

let eightBall = []

let randomNumber = Math.floor(Math.random() * 8)

function eightBallAnswer(num) {
    if (num === 0) {
      console.log('It is certain')
  } if (num === 1) {
      console.log('It is decidedly so')
  } if (num === 2) {
      console.log('Reply hazy try again')
  } if (num === 3) {
      console.log('Cannot predict now')
  } if (num === 4) {
      console.log('My sources say no')
  } if (num === 5) {
       console.log('It is decidedly so')
  } if (num === 6) {
      console.log('Outlook not so good')
  } if (num === 7) {
      console.log('Signs point to yes')
  } if (num > 7) {
    console.log('Cannot predict now')
  }
}

userName('Luke')



