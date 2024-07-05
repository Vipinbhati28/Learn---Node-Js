//stack(Primitive)

let myIgname = "vipinbhati"

let anothername = myIgname
anothername = "vipin"

console.log(myIgname);
console.log(anothername);

//heap(Non-primitve)
//whenever we took anything in heap it gives us reference of that thing that means if made any change it will change the original one also.

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "vipin@google.com"

console.log(userOne.email);
console.log(userTwo.email);