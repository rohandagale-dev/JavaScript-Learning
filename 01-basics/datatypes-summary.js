// primitive

// 7 types (all types are call by value )

// string, number, boolean, null, undefined, Symbol, BigInt

//dynamically typed language
const score = 100;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id, anotherId);
console.log(id === anotherId);

const bigNumber = 3654898565213266n;
console.log(typeof bigNumber);

//Reference (non primitive)

//array, objects, functions

const heros = ["shaktiman", "ironman", "hulk"];

let myObj = {
  name: "rohan",
  age: 22,
};

const myFunction = function () {
  console.log("function is called");
};

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

//============== memory============//

// stack (Primitive),  copy referecne
// heap(Non-primitive)  address reference

let mname = "rohan";

let anotherName = mname;
anotherName = "baker";
console.log(anotherName);
console.log(mname)

let userOne = {
  email: "rohan@gmail.com",
  upi:"user@ybl"
}


let userTwo = userOne;
userTwo.email = "john@gmail.com"
console.log(userOne)
console.log(userTwo)