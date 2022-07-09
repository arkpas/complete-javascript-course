/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Lubu";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);


// ----- DATA TYPES -----
let jsIsFun = true;
console.log("jsIsFun:", jsIsFun);

// console.log(typeof true);
console.log("type:", typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

jsIsFun = "Sure";
console.log("jsIsFun:", jsIsFun);
console.log("type:", typeof jsIsFun);

let year;
console.log("year:", year);
console.log("type:", typeof year);

year = 1995;
console.log("year:", year);
console.log("type:", typeof year);

let nullVar = null;
console.log("nullVar:", nullVar);
console.log("type:", typeof nullVar);


// ----- let, const and var -----

let age = 30;
age = 31;

const birthYear = 1995;
// birthYear = 12;
// const job;

var job = "programmer";
job = "jobless";
console.log("Job: ", job);

lastName = "Paszenda";
console.log("Last name (global variable): ", lastName);


// ----- Basic Operators -----

const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;

console.log("Age Jonas: ", ageJonas);
console.log("Age Sarah: ", ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);


const firstName = "Jonas";
const lastName = "Paszenda";

console.log("Full name: ", firstName + " " + lastName);


let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100;

console.log("X value: ", x);


console.log("Is Jonas older than Sarah: ", ageJonas > ageSarah);

const isSarahFullAge = ageSarah >= 18;
console.log("Is Sarah full age: ", isSarahFullAge);

console.log("Is Jonas older than Sarah: ", currentYear - 1991 > currentYear - 2018);


// ----- Operator Precedence -----

const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;

console.log("Is Jonas older than Sarah:", currentYear - 1991 > currentYear - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log("X:", x, "Y:", y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log("Jonas age:", ageJonas);
console.log("Sarah age:", ageSarah);
console.log("Average age:", averageAge);
*/


// ----- String and Template Literals -----

const firstName = "Arek";
const job = "programmer";
const birthYear = 1995;
const currentYear = 2037;
const aboutMe = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + ".";

console.log(aboutMe);

const aboutMeTemplateLiteral = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}.`;

console.log(aboutMeTemplateLiteral);
console.log(`Just a regular string...`);
console.log("String with \n\
multiple \n\
lines");
console.log(`String
with
multiple
lines using 
template literals.`)