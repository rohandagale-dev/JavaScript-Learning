let score = 0;
console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" --> 33
 "33abc" --> Nan
"null" --> 0
*/

let isLoggedIn = "rohan"; // if the value is present then it's true and when empty then false

let booleanType = Boolean(isLoggedIn);
console.log(booleanType);

//==========|| Operations ||==========//
let value = 3;
let negvalue = -value;
console.log(negvalue);

let str = "hellow";
let str2 = " world";
let str3 = str + str2;
console.log(str3);

console.log("1" + 2); // this is decided by ecma standards
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 3 + "2");

console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;  // pre increament and post increament
console.log(gameCounter)