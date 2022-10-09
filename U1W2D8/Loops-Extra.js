// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log(Math.max(...numbers));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log(Math.min(...numbers));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

const even = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(even);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let array = [0, 1, 2, 3, 4, 5];
var newArray = [];

for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) newArray.push(array[i]);
}
console.log(newArray);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

const word = "alphabet";
const noVowels = word.replace(/[aeiou]/gi, "");
console.log(noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let numberArray = [1, 2, 3, 4, 5];
let addOne = numberArray.map((num) => num + 1);
console.log(addOne);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let stringArray = ["epicode", "is", "great"];
let stringLength = [
  (stringArray[0] = stringArray[0].length),
  (stringArray[1] = stringArray[1].length),
  (stringArray[2] = stringArray[2].length),
];
console.log(stringLength);
