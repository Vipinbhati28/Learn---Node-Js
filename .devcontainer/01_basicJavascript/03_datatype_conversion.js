let score = true

console.log(typeof score);
console.log(typeof(score));

//converting type of datatype from string to number
let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// finding type of "33abc" 
console.log(valueInNumber);

//"33" => 33
// "33abc" => NaN(not a number)
// true => 1; false => 0

let isLoggedIn = "Vipin";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => flase
// " "(empty) => false
// " any value " => true