// for changing colors using in a given time interval
// below is a callback nesting  =>  call back hell
h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout( () => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("blue", 1000);
        });
    });
});

// this is call back hell because it is not a good way
// To preventing from call back hell there are Promises



function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
    "Chai Aur Code",
    () => {
        console.log("success : your data was saved");
        savetoDb(
            "Hello world",
            () => {
                console.log("success2: data2 saved");
                savetoDb(
                    "Vipin",
                    () => {
                        console.log("success3: data3 saved");
                    },
                    () => {
                        console.log("failure3: weak connection");
                    }
                );
            },
            () => {
                console.log("failure2 : weak connection");
            }
        );
    },
    () => {
        console.log("failure: weak connection. data not saved");
    }
);