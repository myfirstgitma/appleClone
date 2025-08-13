// 2. Create another module called "mySecond":
// a. Add another function in this module with the same name as above (myMultiplier).
// This function takes a number as a parameter and returns the value that is 3 times
// the parameter
// b. Execute the function inside the module. Pass the number 4 to the function
// c. Save the returned value in a variable and log the variable on the console. Now, run
// your module on the terminal to see the printed output
// d. Export your "myMultiplier" function so that other modules can use it
// mySecond.js

// a. Define another myMultiplier function that multiplies by 3
function myMultiplier(num) {
  return num * 3;
}

// b. Execute the function with the number 4
const result = myMultiplier(4);

// c. Save and log the result
console.log("Result of myMultiplier(4) from mySecond module:", result);

// d. Export the function
module.exports = { myMultiplier };