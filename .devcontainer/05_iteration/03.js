const coding = ["js", "rby", "java", "python", "cpp"]

// () ke ander call back function hai aur iska koi naam bhi nhi hota
// coding.forEach( function (val) {
//     console.log(val);
// } )


// Another way for above is below 
coding.forEach( (item) => {
    console.log(item);
})

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
       languageName: "javascript",
       languagFileName: "js"
    },
    {
        languageName: "java",
        languagFileName: "java"
    },
    {
        languageName: "python",
        languagFileName: "py"
    },
]

myCoding.forEach( (item) =>{

    console.log(item.languageName);
}) 