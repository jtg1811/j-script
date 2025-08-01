const accountId = 12345
let accountnName = 'Jeet'
var accountEmail = 'jeet@123'
accountCity = 'Mumbai'

// accountId = 54321.  cant cange const variable
accountnName = 'Gandhi' // can change let variable
accountEmail = 'jeet@456' // can change var variable
accountCity = 'Pune' // can change global variable

console.table([accountEmail, accountCity, accountId, accountnName]);