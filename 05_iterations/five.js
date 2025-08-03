// for each

const coding = ["js","py","cpp","c"]

// coding.forEach(function (item){
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr)
})

const myCoding = [
    {
        programLanguage : "JavaScript",
        languageFile : "JS"
    },
    {
        programLanguage : "python",
        languageFile : "py"
    },
    {
        programLanguage : "java",
        languageFile : "java"
    }
]

for(const code of myCoding){
    for(const key in code){
        console.log(`${key} :   ${code[key]}`)
    }
}

myCoding.forEach((item) => {
    console.log(item.programLanguage)
})