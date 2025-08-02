// let a = 100
// if(true){
//     let a = 30
//     const b = 40
//     console.log("inner: ",a)
// }
// console.log(a)

// nested scopes

function one(){
    const username = "jeet"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    two()
    // console.log(website)
}
// one()

if(true){
    const username = "jeet"
    if(username === "jeet"){
        const website = "linkedin"
    }
    // console.log(website)
}
// console.log(username)

console.log(addNum(5))
function addNum(num){       // fully hoisted
    return num + 1
}


// console.log(addTwo(6))    // variables holding function cant be hoisted
// const addTwo = function(num){
//     return num + 2
// }
