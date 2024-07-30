// promise chaining 
// promise chaining is that when we have multiple .then 
function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}
savetoDb("Chai Aur Code");


// here below is the promise chaining.

savetoDb("Chai Aur Code")
.then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDb("helloworld");
})
.then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return savetoDb("Vipin");
})
.then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("result of promise: ", error);
});