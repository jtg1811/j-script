// // primitive data types 
// // string, number, boolean, null, undefined, symbol

// // non primitive data types
// // object, array, function

// let id = Symbol(123)
// let another_id = Symbol(123)
// console.log(id === another_id) // false, because symbols are unique
// console.log(id) // Symbol(123)
// console.log(typeof id) // symbol

// const bigNumber = 38488893089584986984506n
// console.log(typeof bigNumber) // 38488893089584986984506n

// let fruits = ["apple", "banana", "orange"]
// let obj = 
// {
//     name: "jeet",
//     age: 30,
// }
// console.log(fruits)
// console.log(typeof fruits) // object
// console.log(obj)
// console.log(typeof obj) // object

// const temp = null
// console.log(temp) // null
// console.log(typeof temp) // object (this is a known bug in JavaScript)

// const myFunction = function(){
//     console.log("This is a function");
// }
// myFunction()
// console.log(typeof myFunction) // function



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// primitive ( stack memory) vs non primitive ( heap memory )

// stack

let myname = "jeet"
let myname2 = myname // copy by value
myname2 = "gandhi" // this will not change myname
console.log(myname) // jeet
console.log(myname2) // gandhi


let user1 = {
    name: "jeet",
    age: 30
}
let user2 = user1 // copy by reference
user2.name = "gandhi" // this will change user1 as well
console.log(user1);