const cname = 'rohan' // string primitive
const repoCount = 50

console.log(cname + repoCount)
// string interpolation
console.log(`Hello my name is ${cname} and my repo count is ${repoCount}`)

const gameName = new String('rohan') // string object
gameName[0] = 's'
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(cname.length)
console.log(gameName.toUpperCase())
console.log(gameName)
console.log(gameName.charAt(4))

const newString = gameName.substring(0, 2)
console.log(newString)

const s3 = gameName.slice(2, 4)
console.log(s3)

const s4 = '    rohan dagale gmail com    '
console.log(s4.trim())
