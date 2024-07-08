const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);

//both returns number but uper wala direct return krta hai but niche wala number btakar return karta jisse 100% confirm ye number hota hai

console.log(balance.toString().length);
console.log(balance.toFixed(2));

console.log(balance.toFixed(1));
console.log(balance.toFixed(4));

//toFixed ke baad jo bhi digit hoga utne hi zero aayenge

const otherNumber = 123.8913;
console.log(otherNumber.toPrecision(3));

//toPrecision used to return nearby value , isme hum 1-21 tak range ke hi no. daal skte hai aur vo hi no. daalenge  jitna decimal se phle honge

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
//this is according to US standards 

//for Indian standard we use:
console.log(hundreds.toLocaleString('en-IN'));

// **************** Now learn some maths **************************

console.log(Math);
console.log(Math.abs(-4));  //abs stands for absolute value in this no matter we agve +ve value aor -ve value it will alsways return +ve value
console.log(Math.round(5.2)); //round stands for roundoff value this will roundoff value of any value
console.log(Math.ceil(4.1));  //ceil stands for ceiling which means it will return always top value 
console.log(Math.floor(4.9)); //floor will return smaller value of any value