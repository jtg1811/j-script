console.log(2>1)

console.log("2">1)

console.log(3 > "2")

console.log(2 != "2") // false
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0) 

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false    

// strict checking. -> === -> checks data type as well 

console.log(2 === 2) // true
console.log(2 === "2") // false 
console.log(2 !== "2") // true