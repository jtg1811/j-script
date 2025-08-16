class User {
    constructor(username,email,password) {
        this.username=username
        this.email=email
        this.password=password
    }
    get password() {
        return this._password
    }
    set password(password) {
        this._password=password
    }
}
const jeet = new User('jtg1811','j@gmail.com','abc')
console.log(jeet.password)
jeet._password="123"
console.log(jeet.password)