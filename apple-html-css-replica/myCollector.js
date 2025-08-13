// 3. Create another module called "myCollector":
// a. Import both functions from "myFirst" and "mySecond" modules inside of your
// "myCollector" module
// b. Pass the value 5 to both functions that are imported from "myFirst" and
// "mySecond" modules
// c. Run the "myCollector" module on your terminal to display the outputs on your
// console
// myCollector.js

// a. Import both myMultiplier functions with aliases
const first = require('./myFirst');
const second = require('./mySecond');

// b. Pass the value 5 to both functions
const resultFirst1 = first.myMultiplier(5);
const resultSecond1 = second.myMultiplier(5);

// c. Log the results to the console
console.log("Result from myFirst module:", resultFirst1);   // Should be 10
console.log("Result from mySecond module:", resultSecond1); // Should be 15

// 4. While you are in your "myCollector" module:
// a. Write a script inside of your "myCollector" module that passes the number 14 to
// your "myMultiplier" function that you imported from "myFirst" module and
// writes the returned value on a file called "results.txt". The result you write on the
// file should read like this: "The value of 14 when passed through the myMultiplier
// function is ( )."
// ■ Hint: You will need to find the core Node module that will allow you to
// create the “results.txt" file and write the result on this file
// b. Write another script inside of your "myCollector" module that passes the number
// 14 to your "myMultiplier" function that you imported from "mySecond" module
// and writes the returning value on the same file, the "results.txt" on a new line. The
// result you write on the file should read like this:
// "The value of 14 when passed through the myMultiplier function is ( )”.
// ■ Note: Make sure not to replace/remove what you wrote on your
// "results.txt" file previously.
// ■ Note: Also, make sure to add the new result on a new line, right below the
// result written previously
// myCollector.js

// a. Import required modules
// const fs = require('fs'); // built-in Node.js file system module
// const first = require('js/js/myFirst');
// const second = require('js/js/mySecond');

// // Get results from both multipliers using input value 14
// const resultFirst = first.myMultiplier(14);
// const resultSecond = second.myMultiplier(14);

// // Compose formatted strings
// const line1 = `The value of 14 when passed through the myMultiplier function is (${resultFirst}).\n`;
// const line2 = `The value of 14 when passed through the myMultiplier function is (${resultSecond}).\n`;

// // b. Write the first line to results.txt (overwrite or create file)
// fs.writeFileSync('results.txt', line1);

// // Append the second line to the same file without overwriting
// fs.appendFileSync('results.txt', line2);

// // Log to confirm write success
// console.log("Results have been written to results.txt");