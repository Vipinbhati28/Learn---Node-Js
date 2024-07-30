// async keyword creates Async function 
// it allow us to write asynchronous code in more readable and structured manner. 
// it can use await keyword to pause execution until a Promise is either resolved or rejected.
// async function greet() {
//     throw "404 page not found";
//     return "hello!";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with err : ", err);
// });

// let demo = async () => {
//     return 5;
// }



// ++++++------await keyword------+++++++
// only async function can use await keyword
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}
// below every num we get num by gap of 1 sec by the using of await keyword
async function demo() {
    await getNum();
    await getNum();
    await getNum();
}