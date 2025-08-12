// function ----> object ----> null

// string ----> object ----> null

// array ----> object ----> null

const myHeroes = ["thor","spiderman"]

let heroPowers = {
    spiderman : 'sling',
    thor : 'hammer'
}

Array.prototype.powers = function() {
    console.log(`hello powers `)
}

// heroPowers.powers() 
myHeroes.powers()

// inheritance

const user = {
    name : 'jeet',
    email : 'jeet@gmail.com'
}

const teacher = {
    id : 1,
    subject : 'maths'
}

// modern syntax
Object.setPrototypeOf(teacher,user)

console.log(teacher.name)
console.log(teacher.email)

let anotherName = "jeetgandhi     "
String.prototype.truelength = function() {
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}

anotherName.truelength()