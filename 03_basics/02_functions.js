function cart(...prices){
    return prices
}
console.log(cart(10,20,30))
const user = {
    name:"jeet",
    age:30,
    email:"j@google.com"
}
function userDetails(anyUser){
    return `username is ${anyUser.name} age is ${anyUser.age} and email is ${anyUser.email}`
}
console.log(userDetails(user))

const mynewArr = [100,200,300,400]
function returnSecondValue(myarr){
    return myarr[1]
}
console.log(returnSecondValue(mynewArr))