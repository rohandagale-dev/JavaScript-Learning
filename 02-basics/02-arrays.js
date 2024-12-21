const marvel = ['thor', 'spiderman', 'ironman']

const dc = ['superman', 'flash', 'batman']

// marvel.push(dc)

// console.log(marvel[3])

const data = marvel.concat(dc)

console.log(data)

const data2 = [...marvel, ...dc] // spread operator
// console.log(data2)

const another_arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]

console.log(another_arr.flat(2))

console.log(Array.isArray('rohan'))
console.log(Array.from('rohan'))
console.log(Array.from({ name: 'rohan' }))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
 