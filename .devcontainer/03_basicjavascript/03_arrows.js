const user = {
    username: "vipin",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);  // will tell about current context i.e environment of user
    }
}

// user.welcomeMessage()
// user.username = "aman";
// user.welcomeMessage();

// console.log(this)     // will tell about current context i.e empty environmment


// function chai(){
//     let username = "vipin"
//     console.log(this)
// }
// chai()


// function chai1(){
//     let username = "vipin"
//     console.log(this.username)    // here username can't be accessed in this function
// }
// chai1()


// ++++++++   below is how to declare a arrow function  () => {}  ++++++++++

const chai2 = () => {
    let username = "vipin"
    console.log(this)
}
chai2()

// Below is EXPLICIT return 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// below os implicit return of arrow function

// const addTwo = (num1, num2) => num1 + num2  // IMPLICIT RETURN 
// const addTwo = (num1, num2) => (num1 + num2)   // if use {} then we must use return keyword, but we can use () without return keyword

// console.log(addTwo(3,4)); 

const abc = (num1, num2) => ({username: "vipin"})   // for rteurning object we must use () inside {}
console.log(abc());
