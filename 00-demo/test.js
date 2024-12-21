const user = {
    username: 'rohan',
    age: 21,
}
const data = '{"username":"rohan","age":21}'
console.log(JSON.stringify(user))

console.log(JSON.parse(data))
