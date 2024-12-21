// singleton
// Object.create()

// object literals

// const symb = Symbol('key')

// const user = {
//   name: 'rohan',
//   age: 18,
//   [symb]: 'rohan',
//   location: 'mumbai',
//   email: 'rohandagle@gmail.com ',
//   isLoggedIn: false,
//   lastLoginDays: ['monday', 'saturday'],
// }

// // Object.freeze(user)
// user.email = 'rohan'
// console.log(user.email)
// console.log(user['email']) //prefered
// console.log(user[symb])
// user.greeting = function () {
//   console.log('hello world')
// }

// user.greetingTwo = function () {
//   console.log(`hello user : ${this.name}`)
// }

// console.log(user.greeting())
// console.log(user.greetingTwo())

const course = {
  coursename: 'js in hindi',
  price: '999',
  courseInstructor: 'hitesh',
}

const { coursename, price } = course
console.log(coursename, ' : ', price)

// {
//   "name": "rohan",
//   "coursename": "js in hindi",
//   "price": "free"
// }

const data = fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log(data))
console.log(data)
