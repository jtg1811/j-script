// const myArr = [1,2,3,4,5,"jeet",true]
// // console.log(myArr)
// // console.log(myArr[0])
// // console.log(myArr.length)

// // array methods
// myArr.push(6)
// console.log(myArr)

// console.log(myArr.includes(2))
// console.log(myArr.indexOf(111)) // -1 if not found

// // console.log(myArr.pop()) // removes last element
// // console.log(myArr)

// // myArr.unshift(10) // adds element at the beginning
// // myArr.shift() // removes first element
// // console.log(myArr)

// const newArr = myArr.join()   // converst to string 
// console.log(newArr) 

const myn1 = [1,2,3,4,5,6,7]
console.log(myn1.slice(2,4))
console.log("A",myn1)

const myn2 = [1,2,3,4,5,6,7]
console.log(myn2.splice(2,4))  // splice(startindex,deletecount )
/*
 manipulates the original array
 splice will remove ele from the original array.
*/
console.log("B",myn2)  // B [1,2,7]
   // will return whose range is not included in splice
