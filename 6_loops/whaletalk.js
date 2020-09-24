const input = 'Hello my whale freind.'
const vowels = ['a', 'e', 'i', 'o', 'u']
const resultArray = [];

for(let i=0; i < input.length; i++ ) {
  for(let j=0; j < vowels.length; j++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      resultArray.push(input[i]);
     }
    }
  }


   
console.log(resultArray.join(''))

