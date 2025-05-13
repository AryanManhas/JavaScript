// immediatly invoked function expression 
// to remove the pollution caused by global scope 
(function chai(){
    // named iffy
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('Aryan')