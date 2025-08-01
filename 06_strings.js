let name = "jeet"
let age = 20

console.log(`my name is ${name} and my age is ${age}`)

const gameName = new String("cricket")

// console.log(gameName) // [String: 'cricket']
// console.log(typeof gameName) // object
// console.log(gameName.__proto__) // String {}
// console.log(gameName.toUpperCase()) // CRICKET

// console.log(gameName.length) // 7
// console.log(name.length) // 4

console.log(gameName.charAt(2)) // i
console.log(gameName.indexOf("c")) // 0

console.log(name.substring(1, 3)) // ee

let newString = gameName.substring(0, 4);
console.log(newString) // cric

console.log(gameName.slice(-7,4)) // cric


const newStringOne = "      jeet   "
console.log(newStringOne)
console.log(newStringOne.trim())

const username = "jeetgandhi1804"
console.log(username.replace("04","11"))
console.log(username.includes("gandhi"))

const username1 = "jeetgandhi1804"
console.log(username1.split("t")); // ['jee', 'gandhi1804' ]
console.log(username1.endsWith(4));    // true
console.log(username1.concat("3107"));