// SLEEP DEBT CALCULATOR

function getSleepHours(day) {
    if (day === 'monday') {
      return 8
  } else if (day === 'tuesday') {
    return 6
  } else if (day === 'wednesday') {
    return 7
  } else if (day === 'thursday') {
    return 6
  } else if (day === 'friday') {
    return 9
  } else if (day === 'saturday') {
    return 10
  } else if (day === 'sunday') {
    return 11
  }}
  
  function getActualSleepHours() {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  }
  
  function getIdealSleepHours() {
    let idealHours = 8
    return idealHours * 7
  }
  
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours) {
      console.log('User got the perfect amount of sleep.')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('User got more sleep than needed.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('User got less sleep than needed.')
  } console.log(actualSleepHours - idealSleepHours)
  }
  
  calculateSleepDebt()
  