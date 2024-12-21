// parameters
function addTwoNumbers(n1, n2) {
    return n1 * n2
}

const result = addTwoNumbers(3, 5) //arguments
console.log(result)

function calculatePrice(val1, val2, ...nums) {
    //rest operator
    return nums
}

console.log(calculatePrice(100, 200, 300, 400, 500))

const user = {
    name: 'Rohan',
    price: 199,
}

function handleObj(obj) {
    console.log(`username is: ${obj.name} & price is: ${obj.price}`)
}

handleObj(user)

const newArr = [100, 200, 300, 400]

function returnArray(getArray) {
    return getArray[1]
}

console.log(returnArray(newArr))
