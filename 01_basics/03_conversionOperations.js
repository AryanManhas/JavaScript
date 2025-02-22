// let score = undefined

// console.log(typeof score);

// console.log (typeof(score));

// let valueInNumber = Number(score)

// console.log(typeof (valueInNumber));
// console.log(valueInNumber);

// wil convert the alphanumberic to number but the conversion will result in NaN
// converts the null value to 0
// converts undefined to NAN
// converts boolean 1 for True and 0 for False
// converts the string to NaN (NotINNumber)

// "33" => 33
// "33abc" => NaN (but datatype will be Number)
// true => 1; false =>0;

let isLoggedIn = "Aryan"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// ""(empty) => false
// "aryan"(string) => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
