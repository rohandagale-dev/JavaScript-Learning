const user = {
    username: 'rohan',
    price: 900,

    welcome: function () {
        console.log(this)
        return `welcome ${this.username}`
    },
}

// console.log(user.welcome())
// user.username = 'sam'
// console.log(user.welcome())

// console.log(this)

// function chai() {
//     let username = 'rohan'
//     console.log(this.username) //doesn't work with function
//     console.log(this)
// }

// chai()

// const chai = function () {
//     let username = 'rohan'
//     console.log(this.username) //doesn't work with function
// }

// chai()

// const chai = () => {
//     let username = 'rohan'
//     console.log(this)
// }

// chai()

const addTwo = (num) => {
    return num * 2
}

const addTwoImplicite = (num) => num * 2 // implicite return

console.log(addTwo(3))
console.log(addTwoImplicite(3))
