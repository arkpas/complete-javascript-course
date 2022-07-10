console.log("\n\n***** CHALLENGES *****\n\n")
/*
// Coding Challenge #1

const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const isMarkBMIHigher1 = markBMI1 > johnBMI1;
console.log("Mark BMI 1:", markBMI1);
console.log("John BMI 1:", johnBMI1);
console.log("Is Mark's BMI higher than John:", isMarkBMIHigher1)


const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;
const isMarkBMIHigher2 = markBMI2 > johnBMI2;
console.log("Mark BMI 2:", markBMI2);
console.log("John BMI 2:", johnBMI2);
console.log("Is Mark's BMI higher than John:", isMarkBMIHigher2);

*/
// Coding challenge #2

// Test data 1
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI 1 (${markBMI1}) is higher than John's (${johnBMI1}).`);
}
else {
    console.log(`John's BMI 1 (${johnBMI1}) is higher than Mark's (${markBMI1}).`);
}

// Test data 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI 2 (${markBMI2}) is higher than John's (${johnBMI2}).`);
}
else {
    console.log(`John's BMI 2 (${johnBMI2}) is higher than Mark's (${markBMI2}).`);
}
