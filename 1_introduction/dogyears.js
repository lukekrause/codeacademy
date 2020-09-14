// Intro: DOG YEARS

const myAge = 2020 - 1988

function earlyYears(x) { 
 return x * 10.5
}

function laterYears(y) {
  return ((y - 2) * 4)
}


const myAgeInDogYears = laterYears(32)

// STRING METHOD

// My name to lowercase
const name = 'Luke'
const myName = name.toLowerCase()

console.log(myName + "\n" + myAgeInDogYears)


const statement = 'My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.'

const replacer1 = statement.replace('NAME', myName).replace('HUMAN AGE', myAge).replace('DOG AGE', myAgeInDogYears)

console.log(replacer1)





// console.log(p.replace(regex, 'ferret'));
// // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

// console.log(p.replace('dog', 'monkey'));
// // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
