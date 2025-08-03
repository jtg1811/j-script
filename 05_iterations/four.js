// objects

const userDetails = {
    js : "JavaScript",
    cpp : "c++",
    py : "python",
    rb : "ruby"
}

for(const key in userDetails){
    console.log(key , userDetails[key])
}

const programming = ["js","cpp","c","py"]
// for(const key of programming){      key -> js,cpp ...
//     console.log(key)
// }

for(const key in programming){         // key -> 0,1,2,3.
    console.log(key,programming[key])
}