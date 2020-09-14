// RACE DAY

let raceNumber = Math.floor(Math.random() * 1000);

// function earlyReg(x) {
//   if (x < 930) {
//   return true
//   }
// }

// function runnersAge(x){
//   return x + 0
// }

function checkNumber(earlyReg, runnersAge) {

  if (earlyReg === true && runnersAge > '18') {
  console.log(raceNumber + 1000)
} else if (earlyReg === false && runnersAge > '18'){
    console.log('Late adults run at 11:00am \n' + raceNumber)
} else if ((earlyReg === true || earlyReg === false) && runnersAge < '18') {
    console.log('Youth registrants run at 12:30pm (regardless of registration \n' + raceNumber)
} 
    
  else {
    console.log(raceNumber)
  }
}
 
checkNumber(false, 18)

// OTHER WAY

// let earlyRaceNumber = Math.floor(Math.random() * 1000);
// let lateRaceNumber = Math.floor(Math.random() * 1000 + 1000);

// function earlyReg(x) {
//   if (x < 930) {
//   return earlyRaceNumber
//   }
// }