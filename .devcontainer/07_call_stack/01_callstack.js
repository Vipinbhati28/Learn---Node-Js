// call satck is a LIFO type function
// call stack is data structure that track the function call

// function hello() {
//     console.log("Hello");
// }

// function demo() {
//     hello();
// }

// demo();



// ******visualising the call stack*******

// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// } 
// three();


// ******** JS is single threaded ********
// JS is a single threaded language 
// which means ki js ke code ki ek chhez hi ek baar mein run ho paayegi
// let a = 25;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a + b);
// above code is in synchronous nature means ek line ke baad ek line execute hona


// -----++++++-------+++++++-------+++++++
// Js ek baar ya to wait kar skta hai ya fir aur kuch kaam 
// but kuch time hum dekhte jaise ki code below
setTimeout(() => {
    console.log("Vipin Bhati");
},2000);
setTimeout(() => {
    console.log("Hello Vipin");
},2000);

console.log("Hey...");
// above is asynchromous nature of JS jha jruri nhi ki ek baad ek ho , may be beech mein wait ke time kuch aur execute ho jaye
// is code mein wait krne ka kaam hua but vo Js ne nhi kiya vo browser ne kiya hai 
// Aur brower ka code genrally c++ mein likha hota hai joki multithreaded hai
