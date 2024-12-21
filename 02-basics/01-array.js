const arr = [1, 2, 3, 4, 5]

const newArr = new Array(1, 2, 3, 4, 5)

// Array Methods
// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9) //not recommended
// arr.shift()

// console.log(arr.includes(9))
// console.log(arr.indexOf(5))
// const array = arr.join()
// console.log(array)

// slice, splice
console.log('original', arr)

const myArr = arr.slice(1, 3)
console.log(myArr)

console.log('copy', arr)

const myArr2 = arr.splice(1, 3)
console.log(myArr2)
console.log('original', arr)
