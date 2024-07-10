// Arrays

const myArr = [1,2,3,4,5,6];

//const heros = ["vipin", "aman"];
//const arr2 = new Array(2,4,6);

//onsole.log(heros[0]);

//arrays methods

//myArr.push(7)
//myArr.pop()

//myArr.unshift(0) //used to add value in starting by shifting all elements
//console.log(myArr)

//myArr.shift() //used to remove starting element
//console.log(myArr)

//console.log(myArr.includes(5)) //check weather any element exists or not , it is a boolean type
//console.log(myArr.indexOf(4))  //finds the index of any element in nan array
//console.log(myArr.indexOf(3))

//const newArr = myArr.join(); // join convert array type into string type
//console.log(myArr)
//console.log(newArr)

///************* slice and splice ********************

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)