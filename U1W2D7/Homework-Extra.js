// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = "male";
let gender =
  isMale === "male"
    ? console.log("Gender is male")
    : console.log("Gender is female");

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let integerOne = 5;
let integerTwo = 3;
integerOne === 8 ||
integerTwo === 8 ||
integerOne + integerTwo === 8 ||
integerOne - integerTwo === 8 ||
integerTwo - integerOne === 8
  ? console.log("Final value is 8")
  : console.log("Final value is not 8");

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let stringOne = "John";
let stringTwo = "Doe";
let concatenation = stringOne + stringTwo;
console.log(
  "Concatenation of " + stringOne + " and " + stringTwo + " is " + concatenation
);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let first = 18;
let second = 10;
let third = 96;
first > second && first > third && second > third
  ? console.log("Numbers from highest to lowest: " + first, second, third)
  : null;
first > second && first > third && third > second
  ? console.log("Numbers from highest to lowest: " + first, second, third)
  : null;
second > first && second > third && first > third
  ? console.log("Numbers from highest to lowest: " + first, second, third)
  : null;
second > first && second > third && third > first
  ? console.log("Numbers from highest to lowest: " + first, second, third)
  : null;
third > first && third > second && first > second
  ? console.log("Numbers from highest to lowest: " + first, second, third)
  : null;
third > first && third > second && second > first
  ? console.log("Numbers from highest to lowest: " + first, second, third)
  : null;

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let numberOne = 50;
let numberTwo = 20;
let average = (numberOne + numberTwo) / 2;
console.log(
  "The average of " + numberOne + " and " + numberTwo + " is " + average
);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let firstString = "abcdef";
let secondString = "abcdefgh";
let longer =
  firstString.length > secondString
    ? console.log("First string is longer")
    : console.log("Second string is longer");

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let value = 20.9;
value *= 0;
value == 0
  ? console.log("This value is an integer")
  : console.log("This value is not an integer");

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let numbr = 400;
let percent = 20;
let percentage = (numbr / 100) * percent;
console.log(percent, "% of", numbr, "is", percentage);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let nombre = 73;
let oddEven = nombre % 2;
oddEven == 1 ? console.log("Number is odd") : console.log("Number is even");
