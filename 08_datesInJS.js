// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate) // object

// let myCreateDate = new Date(2025 , 0 , 1)        // months start from 0 in JS
// let myCreateDate1 = new Date(2025 , 0 , 1, 10, 30, 10)
// let myCreateDate2 = new Date("2025-01-03") // YYYY-MM-DD format

// //    year, month, date, hours, minutes, seconds

// console.log(myCreateDate.toDateString()) 
// console.log(myCreateDate1.toLocaleString()) 
// console.log(myCreateDate2.toLocaleString());


let myTimeStamp = Date.now(); // returns the number of milliseconds since January 1, 
console.log(myTimeStamp) 
console.log(Math.floor(myTimeStamp/1000))

let myDate = new Date();
console.log(myDate.getFullYear())
console.log(myDate.getDay())

console.log(myDate.toLocaleDateString('default',{
    weekday: 'long',
    timeZone: 'Asia/Kolkata'
}))