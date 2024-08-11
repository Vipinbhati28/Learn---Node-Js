function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe();

/*

What happens behind the scenes when the "new" keyword is used ?

=> A new object is created: The new keyword initiates the creation
of a new Javascirpt object.

A prototype is linked: The newly created object gets linked to the 
prototype property of the constructor function. This means that it 
has access to properties and methods defined on the constructor's 
prototype.

The constructor function is called with the specified arguments and 
this is bound to newly creatred object. If no explicit return value 
is specified from the constructor, Javascript assumes this, the newly
created object, to be the intended return value.

And finally a new object is returned.

*/