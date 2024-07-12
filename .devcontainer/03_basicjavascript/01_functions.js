function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("P");
    console.log("I");
    console.log("N");
}

// sayMyName()     // this is how we execute functions

// function addtwonumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addtwonumbers(3, 5);
// addtwonumbers(3, "5");  // it will consider "5" as string and then return 35

// above 3 and 5 are argumnets 
// number1 and number2 are parmeters

// function addtwonumbers(number1, number2){
        
//         let result = number1 + number2
//         console.log("Vipin");
//         return result;
// }

// const result = addtwonumbers(3,5)
// // console.log("Result: ", result);

// function loginUserMesssage(Username){
//     return `${Username} just logged in`
// }

// console.log(loginUserMesssage("Vipin"));
// console.log(loginUserMesssage(" "));  // when we pass empty string it will return just logged in
// console.log(loginUserMesssage());  // when we don't pass value it will return undefined

// function loginUserMesssage(Username){
//     if(Username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${Username} just logged in`
// }

// console.log(loginUserMesssage())


// function calculateCartPrice(num1){    //by tis we can only retrun one value
   // return num1
// }

// console.log(calculateCartPrice(100))     


// function calculateCartPrice(...num1){     // by this we can add access all value but in array type
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 600, 700))


function calculateCartPrice(val1, val2, ...num1){     // by this 200 and 400 store in val1 and val2 and rest are store in ...num1 that we have returned
      return num1
     }
console.log(calculateCartPrice(200, 400, 500, 600, 700))


const user = {
    username: "vipin",
    age: 21
}

function handleObject(anyobject){    // we write anyobject instead of object name i.e user because by this can pass any object not only user  
     console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);  
}
handleObject(user);


// we also can pass directly 
handleObject({
    username: "Aman",
    age:20
})


const myNewArray = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600]));