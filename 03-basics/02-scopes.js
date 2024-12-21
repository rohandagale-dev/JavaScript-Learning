let a = 10
const b = 20
var c = 30

{
} //scope

if (true) {
    let a = 40
    const b = 50
    var c = 60
}

console.log(a)
console.log(b)
console.log(c)

function one() {
    const username = 'rohan'
    function two() {
        const website = 'youtube.com'
        console.log(username)
    }
    two()
}
one()

//function
function addOne(num) {
    return num + 1
}

//expression
const addTwo = function (num) {
    return num + 2
}
