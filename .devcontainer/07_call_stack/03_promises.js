// here Below we use promises
// Promises JS ki asynchronous nature wale code ke baare mein btata hai ki vo resolve hoga ya reject aur fir jo bhi final value aayegi.
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


// Promises has two methods : .then and .catch
// .then used when promise is fulfilled
// .catch used when promise is rejected
savetoDb("Chai Aur Code")
.then(() => {
    console.log("promise was resolved");
})
.catch(() => {
    console.log("promise was rejected");
});