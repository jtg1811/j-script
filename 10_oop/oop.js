// obj literal
const user = {
    username:"jeet",
    loginCount:8,
    signedIn:true,

    getUserDetails : function(){
        //console.log("user details")
        console.log(`username: ${this.username}`)
    }
}

console.log(user.username)
console.log(user.getUserDetails())

function userDetails(username,userid,mail){
    this.username=username
    this.userid=userid
    this.mail=mail
}
const user1 = new userDetails('jeet',1,'jeet@gmail.com')
console.log(user1)