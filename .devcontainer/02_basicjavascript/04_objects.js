// const tinderUser = new Object()  // this and niche wala both are same and correct
const tinderUser = {}

tinderUser.id = "12345a"
tinderUser.name = "Sahil"
tinderUser.isLoggedIn = "false"

console.log(tinderUser)

const regularUser = {
    email: "mail@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vipin",
            lastname: "Bhati"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // by this we can access obj3 in this {{ },{ }} type
// const obj3 = Object.assign({}, obj1, obj2) //by this we can access in this { } type, In this {} is target and obj1 and obj2 are source , if we don't give {} here then it will store all in obj1

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
     { 
     }
]

//users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));