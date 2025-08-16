class User {
    constructor(username) {
        this.username=username
    }
    static logMe() {
        console.log(`user ${this.username} logged in`)
    }
}

class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.username=username
        this.email=email
    }
}

// const t1 = new Teacher("jtg","j@gmail.com")
// t1.logMe()
const u1 = new User("jtg1811")
u1.logMe()