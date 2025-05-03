// singleton --unique to itself only have one instance cannot have multiple instances generate by constructors

// object literals 

// object.create --constructor method and can be used to create singleton
const mySym = Symbol("key1")

const JsUser = {
    name : "Aryan",
    age : 18,
    location : "Aryan",
    [mySym] : "key1",// we will cover the value of symbol in square brackets because of syntax and we can only access it just like that using square brackets also declared just like string
    email : "aryanmanhas6767@gamil.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday" , "Saturday"]
  
}

console.log(JsUser.email) // when dot is used no need to take it as string also no bracket used as function
console.log(JsUser.name) // when dot is used no need to take it as string also no bracket used as function
console.log(JsUser["email"]) // when dot is not used the email variable will be seen as a string in background
console.log(JsUser["name"]) // when dot is not used the email variable will be seen as a string in background
console.log(JsUser[mySym]) // mySym will be written without double qutoes

// suppose if we want to declare an object with the name as "full name" then it will be impossible to access it through dot method 

JsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(JsUser.greeting);
