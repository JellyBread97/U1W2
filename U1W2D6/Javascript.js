let myName = "Martin";
let mySurname = "Kotas";
console.log("Hello! My name is" + " " + myName + " " + mySurname + ".");
let myAge = 25;
let year = 2022;
let birthYear;
birthYear = year - myAge;
console.log("I was born in " + birthYear);

// EXTRA

let spaghetti = 400;
let guanciale = 250;
let yolks = 6;
let pecorinoRomano = 50;
let pepper = 6;

yolks = yolks * 18;

console.log("Spaghetti alla Carbonara Recipe:");
console.log("Let's start with cooking some pasta");
console.log("Mix egg yolks and cheese");

let sauce = yolks + pecorinoRomano;

console.log("Weight of sauce is: ", sauce);

console.log("Cook pasta in salted water");

let cookedSpaghetti = spaghetti * 1.8;

console.log("Weight of cooked spaghetti is: ", cookedSpaghetti);
console.log("Fry sliced guanciale in pan");
console.log(
  "Gently add cooked spaghetti in pan with guanciale and add sauce with pepper"
);

let pasta = cookedSpaghetti + sauce + pepper + guanciale;
console.log("Weight of ready pasta is: ", pasta);
