/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const firstVariable = [1, 2, 3, 4, 5];
console.log(firstVariable);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const me = {
  name: "Martin",
  surname: "Kotas",
  email: "kotasmartin1997@gmail.com",
  age: 25,
};
const secondVariable = me;
console.log("\n", secondVariable);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

me.drivingLicense = true;
console.log("\n", me);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete me.age;
console.log("\n", me);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const me2 = {
  name: "Martin",
  surname: "Kotas",
  email: "kotasmartin1997@gmail.com",
};
me.email !== me2.email
  ? console.log("Emails don't match")
  : console.log("Emails match");

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

const totalShoppingCart = 51;
const shipping = 10;
let totalAmount;
totalAmount =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + shipping;
console.log("Your total amount to pay is:", totalAmount);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let withDiscount = totalAmount * 0.8;
let totalWithDiscount =
  withDiscount > 50 ? withDiscount : withDiscount + shipping;
console.log("Your total amount to pay is:", totalWithDiscount);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car1 = { brand: "Skoda", model: "Fabia", licensePlate: "Plate1" };
const car2 = Object.assign({}, car1);
const car3 = Object.assign({}, car1);
const car4 = Object.assign({}, car1);
const car5 = Object.assign({}, car1);
const car6 = Object.assign({}, car1);
car2.licensePlate = "Plate2";
car3.licensePlate = "Plate3";
car4.licensePlate = "Plate4";
car5.licensePlate = "Plate5";
car6.licensePlate = "Plate6";

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car1, car2, car3, car4, car5, car6];
console.log("All cars available for rent:", carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("All cars available for rent:", carsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const car7 = Object.assign({}, car1);
const car8 = Object.assign({}, car1);
const car9 = Object.assign({}, car1);
car10.licensePlate = "Plate7";
car11.licensePlate = "Plate8";
car12.licensePlate = "Plate9";

const carsForSale = [car7, car8, car9];
let totalCars = [carsForRent.concat(carsForSale)];

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
  console.log(i);
  console.log(carsForSale[i].brand);
  console.log(carsForSale[i].model);
  console.log(carsForSale[i].licensePlate);
}
