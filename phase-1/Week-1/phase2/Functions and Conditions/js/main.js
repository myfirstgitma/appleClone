// what do you mean this With functions you can reuse code
// You can write code that can be used many times.
// You can use the same code with different arguments, to produce different results.

// Why Use Functions?
// - Avoid Repetition – If a piece of code needs to run multiple times, a function helps you avoid copying and pasting the same code.
// - Improve Readability – Functions make code cleaner and easier to understand.
// - Allow Dynamic Inputs – You can pass different arguments to a function, making it more flexible
console.log(3 * 3); // 9
console.log(5 * 5); // 25
console.log(10 * 10); // 100

function square(num) {
  return num * num;
}

console.log(square(3)); // 9
console.log(square(5)); // 25
console.log(square(10)); // 100
// 1. Function Declaration
// A function declaration is created using the function keyword and a function name.
//  It can be accessed before its definition due to hoisting.
// Example: Function Declaration
// ✔ Hoisted – Can be used before it's defined.
// ✔ Has a name – Easily identifiable in debugging.
// You can call greet() anywhere in the code, even before its definition

function greet() {
  return "Hello!";
}

console.log(greet()); // "Hello!"

// 2. Function Expression
// A function expression is stored in a variable. Unlike function declarations,
//  expressions are not hoisted, meaning they must be defined before use.
// Example: Function Expression
// ✔ Not Hoisted – Cannot be used before definition.
// ✔ Anonymous or Named – Can be anonymous (function()) or have a name (function greet()).
// ✔ Can be assigned to variables – Making it useful for dynamic function assignment.
// | Feature | Function Declaration | Function Expression |
// | Hoisted? | Yes | No |
//|Needs a variable?\yes | No | Yes |
// | Can be anonymous?\no | No | Yes |
const greet = function () {
  return "Hello!";
};

console.log(greet()); // "Hello!"
// 1. Parameters
// - Definition: Parameters are placeholders that are defined when creating a function.
// - They act as input variables that the function expects when called.
// - Example:
function greet(name) {
  // 'name' is a parameter
  return "Hello, " + name + "!";
}
// 2. Arguments
// - Definition: Arguments are actual values passed into a function when it is executed.
// - They replace the parameters with real data.
// - Example:
console.log(greet("Tess")); // "Hello, Tess!"
//EX1
// Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
  return "something " + a;
}
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));
//Ex2
//Create a function that takes voltage and current and returns the calculated power
function circuitPower(voltage, current) {
  return voltage * current;
}
console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3));
console.log(circuitPower(480, 20));
//Ex3
//Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
  return 2 * (length + width);
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));
//Ex4
//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
//(n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.)
function sumPolygon(n) {
  if (n < 3) {
    return "A polygon must have at least 3 sides.";
  }
  return (n - 2) * 180;
}

console.log(sumPolygon(3));
console.log(sumPolygon(4));
console.log(sumPolygon(6));
//Ex5
//Given two numbers, return true
// if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));
//EX6
//Create a function that takes two numbers as arguments and returns their sum
function addition(a, b) {
  return a + b;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));
