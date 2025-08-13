// Node Modules and Node Server - Practice Exercises
// Questions on Node Modules
// 1. Create a module called "myFirst":
// a. Inside the "myFirst" module, log a simple text that says "My first module" on the
// console.
// b. Run the module and see the output of the code you just wrote in this module
// c. Write a function called "myMultiplier" inside of your "myFirst" module. This
// function takes a single number as a parameter and returns a value that is 2 times the
// parameter
// d. Execute the function inside the module. Pass the number 4 to the function
// e. Save the returned value in a variable and log the variable on the console. Now, run
// your module on the terminal to see the printed output
// f. Export your "myMultiplier" function so that other modules can use it

// myFirst.js

// a. Log a simple text
console.log("My first module");

// c. Define the function
function myMultiplier(num) {
  return num * 2;
}

// d. Execute the function with the number 4
const result = myMultiplier(4);

// e. Save the returned value and log it
console.log("Result of myMultiplier(4):", result);

// f. Export the function
module.exports = { myMultiplier };


