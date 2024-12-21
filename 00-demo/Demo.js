/*
What is a Promise?
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
*/

const newPromise = new Promise((res, rej) => {
  let success = true

  if (success) {
    res('operation was successfull')
  } else {
    rej('operation failed')
  }
})

console.log(
  newPromise
    .then((res) => {
      console.log(res)
    })
    .catch((rej) => {
      console.log(rej)
    })
)

function greet(name) {
  return name
}

function callBack(callBack) {
  let name = 'rohan'
  const data = callBack(name)

  return {
    res() {
      console.log(data)
    },
  }
}

const data = callBack(greet).res()
