function greet(greeting){
    console.log(greeting + " , my name is "+this.name)
}

const person1 = {name:'jeet'}
greet("hello")
greet.call(person1,"hello")

const userDetails = {
    name:'zeel',
    introduce : function(subject) {
        console.log(`hello my name is ${this.name}, my fav subject is ${subject}`)
    }
}
userDetails.introduce("maths") // hello my name is zeel, my fav subject is maths
userDetails.introduce.call(person1,"maths") // hello my name is jeet, my fav subject is maths


function setUserName(username) {
    this.username=username
}
function createUser(username,email,password) {
    setUserName.call(this,username)
    this.email=email
    this.password=password
}
const user1 = new createUser('jeet','j@gmail.com','j123')
console.log(user1)