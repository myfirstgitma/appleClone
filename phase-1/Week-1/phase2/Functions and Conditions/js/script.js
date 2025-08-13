//alert("hiyyy");
//Question1
//Define a simple function named myFirst that prints the word "Hello" on the console
// First define the function
//Then call the function

function myFirst() {
  console.log("Hello");
}
// calling the function
myFirst();
//Question2
//Define   a function called mySecond that takes a parameter and prints the parameter on console
// Feel free to give any value as a parameter in your function

//
function mySecond(parameter) {
  console.log(parameter);
}
// calling the function
mySecond("hello, word");
//Question3
// Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console
function myThird(parameter) {
  mySecond(parameter);
}
myThird("hello, from myThird");
//Question4
// Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console
function myFourth() {
  var number = [1, 2, 3];
  console.log(number[0]);
}
// calling the function
myFourth();
//Question5
// Write a function named myFifth that takes an array with two numbers in it as a parameter and
// prints the sum of the two numbers on console
function myFifth(number) {
  var number = [5, 10];
  console.log(number[0] + number[1]);
}
// calling the function
myFifth(5, 10);
//Question6
// ● Write a function that takes an integer minutes and converts it to seconds.

function converts(minutes) {
  return minutes * 60;
}
let Seconds = converts(120);
console.log(Seconds);
//Quetion7
// ● Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result
function number(num) {
  return num + 1;
}
console.log(number(5));
//Quetion8
// Write a function that takes the base and height of a triangle and returns its area.
function triArea(base, height) {
  return 0.5 * base * height;
}
console.log(triArea(10, 10));
//Quetion9
// Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the
// farmer wants to know the total number of legs and not the total number of animals.
function totalLegs(checKens, cows, pigs) {
  return checKens * 2 + cows * 4 + pigs * 4;
}
console.log(totalLegs(2, 4, 4));
//Quetion10
//- Create a function that takes an array containing only TWO numbers as a parameter
//  and returns a value that is 3 times the first element of the array.
function getFirstValue(arr) {
  return 3 * arr[0];
}
console.log(getFirstValue([2, 3]));

//Question on condition statement and - practice exercise
//Question 11
function isSameNum(num1, num2) {
  return num1 === num2;
}
console.log(isSameNum(2, 2));
console.log(isSameNum(2, "2"));
//Question 12
function divisible(num) {
  return num % 100 === 0;
}
console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));
//Question13
// The function takes a number (num) as input.
//✔ It checks if the number is divisible by 2 using num % 2 === 0.
//✔ If true, it returns "even", otherwise "odd".
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}

// Example usage:
console.log(isEvenOrOdd(3));
console.log(isEvenOrOdd(146));
console.log(isEvenOrOdd(19));
//Question 14
//● Create a function that returns
//○ “Invalid score” if score is above 100 or score is a negative number
//○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
//○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
//○ “Grade C” for any score below 79

function getGrade(score) {
  if (score > 100 || score < 0) {
    return "Invalid score";
  } else if (score >= 90) {
    return "Grade A";
  } else if (score >= 80) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}

// Example usage:
console.log(getGrade(95)); // "Grade A"
console.log(getGrade(85)); // "Grade B"
console.log(getGrade(70)); // "Grade C"
console.log(getGrade(105)); // "Invalid score"
console.log(getGrade(-5)); // "Invalid score"
