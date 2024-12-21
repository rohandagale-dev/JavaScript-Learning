const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const newArr = arr.map((item) => item)

console.log(newArr)

const data = arr.reduce((acc, curr) => {
    console.log(acc, curr)
    return acc + curr
}, 0)

console.log(data)
