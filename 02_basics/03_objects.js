// object literals

const mykey = Symbol()

const juser = {
    name : "jeet",
    age : 20,
    "fullname" : "jeet t gandhi",
    [mykey] : "hello",
    city : "surat",
    email : "jtg@gmail.com"
}

// console.log(juser.email)
// console.log(juser["email"])
// console.log(juser["fullname"])
// console.log(juser[mykey])

// // let id = Symbol(123)
// // let anothter_id = Symbol(123)
// // console.log(id==anothter_id)
// juser.city = "bangloare"
// console.log(juser)
// // Object.freeze(juser)
// juser.city = "surat"
// console.log(juser)

juser.greetings = function(){
    console.log(`hello js user , ${this.name}` )
}
console.log(juser.greetings)
console.log(juser.greetings())