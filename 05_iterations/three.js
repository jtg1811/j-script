// for of

// const arr = ["jeet","zeel","meet","manthan"]

// for(let val of arr) {
//   console.log(val)
// }

// const arr1 = [
//     {name:"jeet",id:1},
//     {name:"manthan",id:2},
//     {name:"zeel",id:3},
//     {name:"meet",id:4}
// ]

// for(let val of arr1) {
//     console.log(val.name)
//     console.log(val.id)
// }

// for(let val of arr1){
//     for(let key in val){
//         console.log(`${key} : ${val[key]}`)
//     }
// }

// map

const map = new Map()
map.set('IN','india')
map.set('fr','france')
map.set('us','united states')

for (const [key,value] of map){
    console.log(`${key} : ${value}`)
}