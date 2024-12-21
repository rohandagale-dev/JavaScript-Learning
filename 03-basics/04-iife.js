;(function () {
    console.log('this is IIFE function')
})()
;((name) => {
    console.log(`this is IIFE function ${name}`)
})('rohan')

// ()()
// function defination -> function execution
