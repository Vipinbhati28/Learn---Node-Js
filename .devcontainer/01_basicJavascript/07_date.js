let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate); // Date is always a object type

let myCreatedDate = new Date(("01-16-14"));  // MM-DD-YYYY(Indian Standard)
console.log(myCreatedDate.toLocaleDateString());

// When we calculate time it will come in miliseconds from 1-Jan-1970.
let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
// In javascript months starts from 0th index that means January is 0th and Feb is 1th month 


console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})