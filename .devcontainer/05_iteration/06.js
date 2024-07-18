// Array.reduce()

const array1 = [1,2,3,4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);

// above accumulator initially takes 0 and currenty value 1, then add both 
// the add we get is 1 then it will take 1 as accumulator and 2 as current value then add both
// the add we get is 3 it will take 3 as accumulator and 3 as current value and so on....


// Also can write as 
const myNums = [1,2,3];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and curval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "DSA course",
        price: 5999
    },
    {
        itemName: "DevOps course",
        price: 3999
    },
    {
        itemName: "Mobile Dev course",
        price: 8999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);