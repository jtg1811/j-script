// This .prototype is automatically created when you declare a function.

function user(name,userid) {
    this.name=name
    this.userid=userid
}

user.prototype.printMe = function(){
    console.log(`hello ${this.name}`)
}
const user1 = new user('jeet',1)
const user2 = new user('zeel',2)
user1.printMe()
user2.printMe()