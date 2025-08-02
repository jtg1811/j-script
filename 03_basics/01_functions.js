function sayHello(){
    console.log("hello function")
}
sayHello()

function addNumbers(num1,num2){
    let result = num1 + num2 
    return result
}
const result = addNumbers(3,6)
console.log(`result: ${result}`)

function loginUser(username){
    if (username === undefined){
        return "please enter username"
    }
    return `${username} just logged in`
}
console.log(loginUser("jeet"))

function loginUser(username="jeet"){      // default value
    if (username === undefined){
        return "please enter username"
    }
    return `${username} just logged in`
}