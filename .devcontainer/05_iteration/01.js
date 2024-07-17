// Some higher order loops

// for of loop
// ["", "", ""] -> string in array
// [{}, {}, {}] -> object in array


const arr = [1,2,3,4,5];
for(const val of arr){
    console.log(val);
}

const message = "Ram Ram";
for(const greet of message){
    console.log(`Each char is ${greet}`);
}


// MAPS

const map = new Map()
map.set('IN', "India")
map.set('RU', "Russia")
map.set('IS', "Israel")
map.set('IN', "India")
console.log(map);

// for(const key of map){   
//     console.log(key);
// }

// we also can print key and value separately as below
for(const [key, value] of map){
    console.log(key, ':-', value);
}
