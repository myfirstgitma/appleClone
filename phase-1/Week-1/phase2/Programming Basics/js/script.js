//alert("my js fiel is connected!!");
//Qustion-1
console.log(24 > 3);
console.log(2 < "12");
console.log(0 == 2);
console.log(2.0 === 2);
console.log(2 == "2");
console.log(2 < "john");
console.log(2 > "john");
if (!isNaN("john")) {
  console.log(2 < "john"); // Avoids meaningless comparisons
} else {
  console.log("Invalid comparison: 'john' is not a number.");
}
console.log(2 < "john"); // false (because "john" converts to NaN)
console.log(isNaN(parseInt("john"))); // true (detects invalid input)
console.log("2" < "2");
console.log("2" > "12");
console.log(1 == 1 || 3 == 2 || 3 == 7);
console.log(1 == 1 && 2 == 2 && 3 == 7);
console.log(1 == 1 || (2 == 2 && 3 == 7));
console.log(
  (1 == true && true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
);
// 1. what is the expresstion returns true?
// A/ `1` === 1
console.log(`1` === 1);
// B/ 1==1
console.log(1 == 1);
// C/ 1===1
console.log(1 === 1);
// D/ B and c from above
/*
- Option A ('1' === 1)
- The === operator checks both value and type.
- '1' is a string, while 1 is a number.
- Since their types differ, the comparison returns false.
- Option B (1 == 1)
- The == operator checks only value, ignoring type.
- Since both values are 1, this comparison returns true.
- Option C (1 === 1)
- The === operator checks value and type.
- Since both values are 1 and both are numbers, the comparison returns true.
- Option D (B and C from above)
- Since both Option B and Option C are true, Option D is also correct.
Final Answer: Option D (B and C from above)
*/
// 2. what is the value of x in this statements?
var x = 1 == true;
console.log(x);
// A/ 1 B/ true, C/ false, D/ undefine
/*- So 1 == true evaluates to true, meaning x will be assigned the value true.
Final Answer: Option B (true)*/
// 3. what is the value of y frome the following statements?
var x = 10;
var y = x > 5 && x < 15;
console.log(y);
/*- x > 5 → Since x is 10, this condition evaluates to true.
- x < 15 → Since x is 10, this condition also evaluates to true.
- The && (logical AND) operator requires both conditions to be true for the overall expression to return true.
So, y = true.
A / 10, B/ 5, C/ 15, D/ true
Final Answer: Option D (true)*/
// 4. what is the value of x from the following statements?
var x = 5; // x is initialized with the value 5
x += 3; // This is shorthand for x = x + 3, so x becomes 8
console.log(x); // Outputs: 8
/* A/ 3, B/ 8, C/ 15, D/ 5
Final Answer: 8*/
// 5. what is the value of y from the following statements?
var x = 10;
var y = x++;
console.log(y);
/* A/ 10, B, 11, C/ 13
- y = x++ assigns 10 to y, then increases x by 1.
var y = ++x;, then y would be 11.

Final Answer: Option A (10)*/

// 6. what is the value of y in following statements/
var x = 1;
var y = x !== 2;
console.log(y);
/*- The !== operator means "not equal in value or type".
- Since x is 1 and 2 is a different number, x !== 2 evaluates to true.
- Therefore, y is assigned true.
Final Answer: true
A/ 1, B/ 2, C/, false, D/true*/
//7. what is the output of (+"2" + 2)?
console.log(+"2" + 2);
/*- The +"2" converts the string "2" into the number 2 (unary + operator).
- Now, the expression becomes 2 + 2, which results in 4.
Final Output:4

 */
//8, what is the output of (7%3)?
console.log(7 % 3);
/*- The % operator (modulus) returns the remainder when dividing 7 by 3.
- 7 ÷ 3 equals 2 with a remainder of 1.
- So, 7 % 3 evaluates to 1
 */
//9, what is the output of (2+true)?
console.log(2 + true);
/*- true in JavaScript is treated as 1 when used in a numeric operation.
- So, the expression becomes 2 + 1.
- The result is 3.
Final Output: 3*/

// Question 3:
//Write asimple script that adds 1 and 2 display the result on the console?
let a = 1;
let b = 2;
let c = a + b;
console.log(c);
// Question4
let firstName = "good ";
let lastName = "tess";
let fullName = firstName + lastName;
console.log(fullName);
