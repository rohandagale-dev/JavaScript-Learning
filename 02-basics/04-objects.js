// const tinderUser = new Object()  // singleton

const tinderUser = {}

;(tinderUser.id = '_id:12345'), (tinderUser.name = 'rohan')
tinderUser.isLoggedIn = false

const regularUser = {
  email: 'rohandagale28@gmail.com',
  fullname: {
    firstname: 'rohan',
    lastname: 'dagale',
  },
}

// console.log(tinderUser)
// console.log(regularUser.fullname)

const obj1 = {
  1: 'a',
  2: 'b',
}

const obj2 = {
  3: 'a',
  4: 'b',
}

// const obj3 = { ...obj1, ...obj2 }

const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('name'))

const course = {
  courename: 'js in hindi',
  price: '999',
  courseIntructor: 'histesh',
}

// course.courseIntructor
const { courseIntructor: rename } = course  // object de-structure

console.log(rename)

// JSON
// {
//   "name":'rohan',
//   "courname":"js in hindi",
//   "price":"free"
// }

console.log(JSON.stringify(course))
