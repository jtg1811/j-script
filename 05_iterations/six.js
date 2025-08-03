// for each doesnt return anything 

// so if we put any conditional statement in array in forEach its not gonna work !!!

// so we use filter

const myNums = [1,2,3,4,5,6,7,8,9]

// const numbers = myNums.filter((num) => num>2 )

const numbers = myNums.filter( (nums) => {
    return nums > 2
})

const newNums = []
myNums.forEach((myNums) => {
    if (myNums > 2){
        newNums.push(myNums)
    }
})

console.log(newNums)
// console.log(numbers)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
];

// const userBooks = books.filter((book) => {
//     // return book.genre === 'Science'
//     // return book.publish > 2000
//     return book.publish >= 1995 && book.genre === 'History'
// })

// console.log(userBooks)

const myNumbers = [1,2,3,4,5,6,7,8,9]
arr = []
const addTen = myNumbers.forEach((nums) => {
    arr.push(nums += 10)
})

console.log(arr)

const tenAdd = myNumbers.map((nums) => nums + 10)
console.log(tenAdd)

// chaining
const newNumbers = myNumbers.map((nums) => nums * 10)
                            .map((nums) => nums + 1)      // upper map val will pass here
                            .filter((nums) => {          // upper map val will pass here
                                if(nums > 40){
                                    return nums
                                }
                            })
console.log(newNumbers)