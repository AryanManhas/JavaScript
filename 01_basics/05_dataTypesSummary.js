// Primitive

// 7 Types : String , Number , Boolean , null(khali,empty not zero) , undefined , Symbol , BigInt

// const score = 100
// console.log(typeof(score));

// const scoreValue = 100.3
// console.log(typeof(scoreValue));

// const temp = null;
// console.log(temp);


// let userEmail;
// console.log(typeof(userEmail));

//  const id = Symbol('123')
//  const anotherId = Symbol('123')
//  console.log(id === anotherId);
//  console.log(typeof(id));
//  console.log(typeof(anotherId));
 
 

// const bigNumber = 213333234252n
// console.log(typeof(bigNumber))


// Reference (Non Primitive)

// Array , Objects , Functions

// const heros = ["shakitman" , "naagraj" , "doga"];
// let myObj = {
//     name : "aryan",
//     age : 22
// }

// const myFunction = function(){
//     console.log("Hello World!!");

// }

// +++++++++++++++++++++++++++++Storage++++++++++++++++++++

// Stack (Primitive) 

let myYoutube = "aryanmanhas6767"

let anotherName = myYoutube

anotherName = "manhasaryan7890"

console.log(anotherName);
console.log(typeof(anotherName));


let userOne = {
    email : "aryanmanhas6767@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;


userTwo.email = "manhasaryan7890@gmail.com"

console .log(userOne.email);
console.log(userTwo.email);
