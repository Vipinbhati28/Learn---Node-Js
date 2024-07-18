const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNumber = myNumber.map( (num) => num + 10)
console.log(newNumber);

// if we open scope in it , this will return undefined. For scope we have to use return with it to get return value
// const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const newNumber = myNumber.map( (num) => { return num + 10})
// console.log(newNumber);

