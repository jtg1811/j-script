// this.something... cant be use inside normal function but it can be work inside the objects

const user = {
    name : "jeet",
    age : 30,
    welcomeMessage : function welcome(){
        console.log("welcome....")
        console.log(this)
    }
}
user.welcomeMessage()
console.log(this)

// function hello(){
//     console.log(this)
// }
// hello()

// arrow function

// const addNum = (num1,num2) => {
//     return num1+num2
// }
// console.log(addNum(3,4))

const addNum = (num1,num2) => (num1 + num2)
console.log(addNum(3,4))