// object de-structuring

const user = {
    name : "jeet",
    age : 20,
    city : "surat"
}

const{age,city} = user
const{name:username} = user
console.log(username,age,city)


// json -> both key-value in string
// this will be data format when api is fetched

// {
//     "name":"jeet",
//     "age":"30"
// }

// api can also be in arrays ( objects in array )

[
    {},
    {},
    {}
]