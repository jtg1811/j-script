const userDetails = {
    email : "jeet@gmail.com",
    fullname : {
        firstname : "jeet",
        lastname : "gandhi"
    }
}

console.log(userDetails.fullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}
// const obj3 = Object.assign({},obj1,obj2,obj4)            // obj1,obj2,obj4 act as src and {} as target

// or by spread

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3) 


// when data will come from database
const users = [
    {
        id : 1,
        name : "jeet"
    },
    {
        id : 2,
        name : "meet"
    }
]

// console.log(users[0].name)

// console.log(userDetails)
// console.log(Object.keys(userDetails))
// console.log(Object.values(userDetails))
console.log(Object.entries(userDetails))
console.log(userDetails.hasOwnProperty('age'))  // false
console.log(userDetails.hasOwnProperty('fullname'))   // true