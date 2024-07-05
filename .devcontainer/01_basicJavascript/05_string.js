const name = "vipin"
const repoCount = 20

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//we also can use 
//cosole.log(name + repoCount + "Value"); but this syntax is too old
//uper wala jayada shi rhta hai

const gameName = new String('vipin')

//console.log(gameName[0]); //for finding the element at 0
//console.log(gameName.__proto__); //for finding object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  vipin  "  //gap before and after vipin make a gap in output as well
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vipin.com/vipin%20bhati"

console.log(url.replace('%20','-'))
