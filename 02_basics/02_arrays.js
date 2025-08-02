// marvel_heroes = ["thor","ironman","captain america"]
// dc_heros = ["batman","superman","flash"]

// // 1. push.   will change the original array
// // let r = marvel_heroes.push(dc_heros)
// // console.log(r) // will push whole array as a single element

// // 2. concat  // does not change the original array
// let all_heroes = marvel_heroes.concat(dc_heros)
// console.log(all_heroes) // will concat the two arrays and return a new array

// // 3. spread operator
// let all_new_heroes = [...marvel_heroes, ...dc_heros]
// console.log(all_new_heroes) // will spread the two arrays and return a new array

const myarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(myarr.flat(Infinity))
// console.log(myarr.flat(1)) // will flatten the array by 1 level
// console.log(myarr.flat(2)) // will flatten the array by 2 levels


console.log(Array.isArray("jeet"))
console.log(Array.from("jeet")) // will convert the string to an array of characters
console.log(Array.from({name:"jeet"})) // will convert the object to an array of key-value pairs
// return empty because we didnt specify to convert on basis of key-value pairs


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// will create an array with the given elements