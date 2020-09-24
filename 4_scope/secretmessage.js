let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop() 

console.log(secretMessage.length)

secretMessage.push('to', 'Program')

console.log(secretMessage.length)

secretMessage.splice(7, 1, 'right')
// secretMessage[7] = 'right'

console.log(secretMessage.length)

secretMessage.shift()

console.log(secretMessage.length)

secretMessage.unshift('Programming')

console.log(secretMessage.length)

secretMessage.splice(6, 5, 'know')

console.log(secretMessage.join(' '))