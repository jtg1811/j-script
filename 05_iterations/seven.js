// reduce

const myNums = [1,2,3]

const total = myNums.reduce((acc,currval) => {
    console.log(`acc: ${acc} currval: ${currval}`)
    return acc + currval
},0)
console.log(total)

shoppingCart = [
    {
        name : "mercedes",
        price : 1000
    },
    {
        name : "bmw",
        price : 4000
    },
    {
        name : "audis",
        price : 3000
    }
]

const pricetotal = []
let totalprice = 0
shoppingCart.forEach((item) => pricetotal.push(totalprice+=item.price))
console.log(totalprice)

const tprice = shoppingCart.reduce((totalprice,item) => {return totalprice+item.price},0)
console.log(tprice)