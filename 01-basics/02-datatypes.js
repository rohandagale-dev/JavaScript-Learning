"use strict"; // treat all js code as newer version

// alert("hello") // we are using nodejs, not browser

// primitive data types
let name = "rohan" // 2 bytes per character
let age = 18; // 8 bytes
let isLoggedIn = false // 4 bytes
let value; // no memory allocation until value is assigned
let something = null; // 32bit (like a pointer)
let symbol = Symbol("a") //varies, typically small as it’s used as a unique identifier
let bigInt = 123n; //varies

console.log("name : ",typeof(name))
console.log("age : ",typeof(age))
console.log("isLoggedIn : ",typeof(isLoggedIn))
console.log("value : ",typeof(value))
console.log("something : ",typeof(something))
console.log("symbol : ",typeof(symbol))
console.log("bigInt : ",typeof(bigInt))

//non primitive data types
//objects, arrays 
