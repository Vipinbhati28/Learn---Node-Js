// const email = [];
// if(email) {
//     console.log("I have an email");
// }
// else{
//     console.log("I haven't an email");
// }

const email = "";
if(email) {
    console.log("I have an email");
}else{
    console.log("I haven't an email");
}


// "" -> empty string , " " -> this is not an empty string

// ************ Thruthy Value *************
// "0", 'false', " ", [], {}, functin(){}


// ************ Falsy Value **************
// false, 0, -0, "", BigInt, null, undefined, NaN

// Nullish Coaleasing Operator (??): null undefined

let val1;
// val1 = 12 ?? 10;
// val1 = null ?? 10;   // used for safe cases
// val1 = undefined ?? 9;
val1 = null ?? 10 ?? 15;  // Iss case mein first value i.e 10 assign hogi



console.log(val1);

