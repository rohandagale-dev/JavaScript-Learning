const score = 400
console.log(score)

const balance = new Number(400.54368)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

const data = Math.random() * 10000

console.log(Math.round(data))

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000)
}

const otp = generateOTP()
console.log(otp)

const data2 = 563.9568
console.log(Math.floor(data2))
