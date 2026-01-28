// ===============================
// JavaScript Closures
// ===============================


// ===== 1. BASIC CLOSURE =====

// Creating outer function
function outerFunction() {

    // Variable declared inside outer function
    var message = "Hello from outer function";

    // Inner function created
    function innerFunction() {

        // Inner function accessing outer variable
        console.log(message);
    }

    // Returning inner function
    return innerFunction;
}

// Calling outer function and storing returned function
var closureExample = outerFunction();

// Calling returned inner function
closureExample();


// ===== 2. CLOSURE WITH COUNTER =====

// Function to create counter
function createCounter() {

    // Counter variable (private)
    var count = 0;

    // Returning inner function
    return function () {

        // Incrementing counter value
        count++;

        // Printing counter value
        console.log("Counter value:", count);
    };
}

// Creating counter function
var counter = createCounter();

// Calling counter multiple times
counter(); // 1
counter(); // 2
counter(); // 3

// Counter value is remembered because of closure


// ===== 3. DATA PRIVACY USING CLOSURE =====

// Function created to store private data
function userData() {

    // Private variable
    var username = "student01";

    // Returning object with functions
    return {

        // Function to get username
        getUsername: function () {

            // Returning private variable
            return username;
        },

        // Function to update username
        setUsername: function (newName) {

            // Updating private variable
            username = newName;
        }
    };
}

// Creating object using function
var user = userData();

// Getting private value
console.log(user.getUsername());

// Updating private value
user.setUsername("student02");

// Getting updated value
console.log(user.getUsername());

// Direct access is not allowed
// console.log(username); // Error


// ===== 4. CLOSURE WITH LOOP =====

// Function created
function loopClosureExample() {

    // Empty array created
    var functions = [];

    // Loop starts
    for (let i = 0; i < 3; i++) {

        // Pushing function into array
        functions.push(function () {

            // Printing loop value
            console.log("Value of i:", i);
        });
    }

    // Returning array of functions
    return functions;
}

// Calling loop function
var loopFunctions = loopClosureExample();

// Calling each stored function
loopFunctions[0](); // 0
loopFunctions[1](); // 1
loopFunctions[2](); // 2

// let creates separate block scope for each loop iteration
