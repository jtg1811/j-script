// let score = "33"
// console.log(typeof score) // string
// valueNumber = Number(score)  // convert to number
// console.log(typeof valueNumber) // number
// console.log(valueNumber) // 33

// let score1 = "33abc"
// console.log(typeof Number(score1)) // still number

// // so need to be careful with conversion if its really a number or not
// console.log(Number(score1)) // NaN (Not a Number)

// // if score value is null , it will be converted to 0
// // if score value is undefined , it will be converted to NaN
// // if score value is true , it will be converted to 1
// // if score value is false , it will be converted to 0

let isLoggedIn = 1
let isLoggedInNumber = Boolean(isLoggedIn) // convert to boolean
console.log(isLoggedInNumber) // true
// if isLoggedIn is 0 , it will be converted to false
// if isLoggedIn is empty string , it will be converted to false


let a = 1
let stringNumber = String(a) // convert to string
console.log(typeof stringNumber) // string
console.log(stringNumber) // "1"
console.log(1+2);
console.log(1+2+"2");
console.log("1"+2+2);

// whichever enters first that data type will be used

let str1 = "jeet";
let str2 = " gandhi";
console.log(str1 + str2);  // jeet gandhi.  -> string concatenation

gameCounter = 0 
gameCounter++      // 1
console.log(gameCounter)  