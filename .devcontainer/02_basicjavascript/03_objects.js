// singleton
// object.create

// object literals
// below we create an object of name JsUser

const mySym = Symbol("key1")

const JsUser = {
    name: "Vipin",     //In javascript object take them as strings here name, age are taken as strings by default
    "full name": "Vipin Bhati",  // here we declared it as string by ourselves and we have to use same syntax for it for getting return value
    [mySym]: "mykey1",  //correct syntax for symbol ************ Important for Interview *********** , if remove [ ] then it will not a Symbol key anymore it acts as Strings
    age: 21,
    location: "Haryana",
    email: "vipin@gmail.com",
    isloggeedIn: false,
    lastLoginDays:["Monday","Thursday"]
}
// we have to use " " to get return value of object

console.log(JsUser.email) // this syntax works for return but not a good so we use niche wala
console.log(JsUser["email"]) //this is a good synatx , In we have also use " " with [ ]
console.log(JsUser[mySym])  // correct way to access Symbol ******IMPORTANT*******

JsUser.email = "Vipin@google.com"  // we can change object values by this simple way
console.log(JsUser)

//Object.freeze(JsUser) // By this we can freeze object values after this can't change values of objects
JsUser.email= "vipinbahti@123"
console.log(JsUser)
   
JsUser.greeting = function(){
    console.log("Ram Ram Js Users");
}
JsUser.greeting1 = function(){
    console.log(`Ram Ram Js Users, ${this.name}`); // this way we can reference to any thing in the object
}

console.log(JsUser.greeting());
console.log(JsUser.greeting1());