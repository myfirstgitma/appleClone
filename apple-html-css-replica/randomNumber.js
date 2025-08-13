// Questions on Node Server
// Use the "HTTP" module for the questions from 5 to 8
// 5. Create a module called my "randomNumber".
// a. The "randomNumber" module has a function called random(). The random
// function just returns a random number when it gets executed
// b. Execute the function inside the module
// c. Save the returned value in a variable and log the variable on the console. Now, run
// your module on the terminal to see the printed output
// d. Export your module so that it is accessible to other module

// randomNumber.js

// a. Define the random() function
function random() {
  return Math.floor(Math.random() * 100); // random integer between 0–99
}

// b. Execute the function
const result = random();

// c. Save the result in a variable and log it
console.log("Random number generated:", result);

// d. Export the function
module.exports = { random };