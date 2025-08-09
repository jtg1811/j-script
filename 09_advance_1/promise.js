const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log('jeet gandhi')
        resolve()
    },1000)
})
promise.then(()=>{
    console.log('task completed')
})

new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log('tarak gandhi')
        resolve()
    },1000)
}).then(()=>{
    console.log('task completed 1')
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'jeet',email:'jeet@gmail.com'})
    },1000)
})
.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        error = true
        if(!error) {
            resolve({username:'jeet',password:'jeet123'})
        }
        else {
            reject('error : something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    // console.log(user.password)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('promise either resolved or rejected')
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        error = true
        if(!error) {
            resolve({username:'jeet',password:'jeet123'})
        }
        else {
            reject('error : something went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    }catch(error) {
        console.log(error)
    }
}
consumePromiseFive()

// const promiseSix = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const res = fetch('https://jsonplaceholder.typicode.com/users')
//         .then(resolve)
//         .catch(reject)
//     },1000)
// })
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}
getAllUsers()