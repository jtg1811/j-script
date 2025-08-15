// class user {
//     constructor(username,email,password) {
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUserName() {
//         return `${this.username}`.toUpperCase()
//     }
// }
// const u1 = new user('jtg','j@gmail.com','123')
// console.log(u1.encryptPassword())
// console.log(u1.changeUserName())

function User(username,email,password) {
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}
const u1 = new User('jtg','j@gmail.com','123')
console.log(u1.changeUserName())
console.log(u1)