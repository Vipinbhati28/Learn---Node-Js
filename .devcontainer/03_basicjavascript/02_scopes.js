let a =300;    // global scope
if(true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);  // block scope
}

console.log(a);


function one() {
    const username = "vipin"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}
one()

if(true) {
    const username = "vipin"
    if(username === "vipin") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(6))

function addone(num){
    return num+1
}

addTwo(5)      // here we declared function before declaration of funtion 
const addTwo = function(num){
    return num+2
}


