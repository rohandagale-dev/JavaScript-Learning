// const coding = [1, 2, 3, 4, 5]

// coding.forEach((item) => {
//     console.log(item)
// })

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const data = arr.filter((num) => {
    return num > 4
})

console.log(data)

const newNum = []

arr.forEach((item) => {
    if (item > 4) {
        newNum.push(item)
    }
})

console.log(newNum)
