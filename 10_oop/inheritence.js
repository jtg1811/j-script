class User {
    constructor(username) {
        this.username=username
    }
    logMe() {
        console.log(`this is username: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username,email,password) {
        super(username)
        this.username=username
        this.email=email
        this.password=password
    }
    sayHello() {
        console.log(`hello from ${this.username}`)
    }
}

const t1 = new Teacher('jtg','j@gmail.com',123)
t1.sayHello()
t1.logMe()

const u1 = new User('jeetg')
u1.logMe()
console.log(u1 instanceof Teacher)