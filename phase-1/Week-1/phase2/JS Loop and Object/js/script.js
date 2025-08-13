// Questions on decision loops
// ************************
// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.
var i = 0;
function printFirstTenIntegers() {
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }
}

// Call the function to execute
printFirstTenIntegers();
//Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
function printNextFiveNumbers(num) {
  for (let i = num + 1; i <= num + 5; i++) {
    console.log(i);
  }
}

// call the function
printNextFiveNumbers(7);
// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number
function sumOfNextTenNumbers(startNumber) {
  let sum = 0;
  for (let i = startNumber + 1; i <= startNumber + 10; i++) {
    sum += i;
  }
  console.log("Sum of the next 10 numbers:", sum);
}

// call the function
sumOfNextTenNumbers(7);
// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// call the function
printArrayElements([10, 20, "Hello", 40, 50]);
// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
function printArrayLength(arr) {
  console.log("Total number of elements in the array:", arr.length);
}

// call the function
printArrayLength([1, "Hello", 8, 44]);
printArrayLength(["world", 13]);
// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
function sumArrayNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of all numbers in the array:", sum);
}

// call the function
sumArrayNumbers([5, 6, 99, 8, 76, 4, 68, 44]);
sumArrayNumbers([3, 0]);
// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
function subtractOddSumFromEvenSum(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  let result = evenSum - oddSum;
  console.log("Sum of odd numbers:", oddSum);
  console.log("Sum of even numbers:", evenSum);
  console.log("Difference between total even and total odd numbers:", result);
}

// call the function
subtractOddSumFromEvenSum([5, 6, 99, 8, 76, 4, 68, 44]);
// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
function printEvenIndexedElements(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    // Incrementing by 2 to get even indexes
    console.log(arr[i]);
  }
}

// call the function
printEvenIndexedElements([5, 6, 99, 8, 76, 4, 68, 44]);
printEvenIndexedElements([11, "sam", 3, 7, "car"]);
