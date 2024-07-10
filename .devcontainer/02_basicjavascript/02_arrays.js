const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "batman", "flash"]

marvel.push(dc)

console.log(marvel)  //arrays can take take anything as input, like in this it will array itself of dc as input along with its elemnet
console.log(marvel[3][1]) // In this 0th index is thor , 1th is ironman and 2th is spiderman and 3th is whole array if dc; [3][1] means index 3th, [1] means 1th position of 3th index i.e. batman.

// concat also works like push
// push works on existing array but concat returns a new array
const allHeros = marvel.concat(dc)
console.log(allHeros)

// One more operator also used for same thing is spread operqator(...)
// where concat csn be used only for two add , but spread opertor can used for many values

const indianheros = ["shaktiman", "krish", "flying jatt"]

const newheros = [...marvel, ...dc, ...indianheros]
console.log(newheros)

const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherarr = anotherarr.flat(Infinity) //flat used make one array of many array , we can gave how many no. of array we want to make one and if don't know no. then we can use Infinity.
console.log(real_anotherarr)

console.log(Array.isArray("Vipin")) // used to check anything is an array or not
console.log(Array.from("Vipin")) // used to make an array
console.log(Array.from({name: "Vipin"})) //return empty array , we should directly give value or string(*****  Interesting for Interview *****)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //of is also used also used to make array
