// ===== GLOBAL SCOPE =====

// Global variable declared
var globalabc = "I am Global";

// Function created
function showGlobal() {
    console.log(globalabc); // Accessing global variable inside function
}

// Function call
showGlobal();

// if block starts
if (true) {
    console.log(globalabc); // Accessing global variable inside block
}

// Global variables are accessible everywhere


// ===== FUNCTION SCOPE =====

// Function created
function functionScope() {
    var a = 10; // var inside function
    let b = 20; // let inside function
    const c = 30; // const inside function

    console.log(a); // Printing var
    console.log(b); // Printing let
    console.log(c); // Printing const
}

// Function call
functionScope();

// console.log(a); // Error: a is not defined outside function
// Variables inside function cannot be accessed outside


// ===== BLOCK SCOPE =====

// if block starts
if (true) {
    var x = 5; // var is not block scoped
    let y = 10; // let is block scoped
    const z = 15; // const is block scoped
}

// Printing var outside block
console.log(x); // Works

// console.log(y); // Error: y is block scoped
// console.log(z); // Error: z is block scoped

// var works outside block, let and const do not


// ===== SCOPE CHAIN =====

// Global variable
var name = "Global";

// Parent function
function parent() {
    var age = 20; // Parent function variable

    // Child function
    function child() {
        console.log(name); // Accessing global variable
        console.log(age); // Accessing parent variable
    }

    child(); // Calling child function
}

// Calling parent function
parent();

// JavaScript searches variable from inner to outer scope


// ===== VARIABLE SHADOWING =====

// Global variable
var number = 100;

// Function created
function shadowExample() {
    var number = 50; // Local variable shadows global variable
    console.log(number); // Prints local value
}

// Function call
shadowExample();

// Printing global variable
console.log(number); // Prints global value
