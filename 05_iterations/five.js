// for each

const coding = ["js","py","cpp","c"]

// coding.forEach(function (item){
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)