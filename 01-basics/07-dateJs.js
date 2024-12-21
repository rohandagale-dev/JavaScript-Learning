//Date Module
let date = new Date()

console.log(date)

console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleDateString())

let myDate = new Date(2024, 0, 28)
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

let timeStamp = Date.now()

console.log(date.getTime())

let newDate = new Date()
console.log(newDate.getMinutes())
