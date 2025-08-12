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