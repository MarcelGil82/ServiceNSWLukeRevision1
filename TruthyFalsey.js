// solo IF statement
// let age = 38;
// if (age > 30) {
//     console.log("You are older than 30");
// }

// 1 Write an if statement that evaluates a boolean condition.
// Make sure the statement evaluates as false

// let bool = false;
// if (bool == true) {
//     console.log("this is true")
// }
// way it should be done for this question
let otherBool = false;
if(otherBool) {
    console.log("This is true")
}

// 2 Write an if statement that evaluates a number as a condition.
// Make sure the statement evaluates as false
let num = 0;
if (num) {
    console.log("This is a number")
}

// 3 Write an if statement that evaluates a negative number as a condition.
// Make sure the statement evaluates as true
let negNum = -100;
if (negNum) {
    console.log("Number is negative")
}

// 4 Write an if statement that evaluates a string.
// Try out the following values for the string: 
// 0, false, NaN, undefined

let value1 = "";
if (value1) {
    console.log("This is a truthy since its's in a string")
}
let value2 = "0";
if (value2) {
    console.log("This is a truthy since its's in a string")
}
let value3 = "false";
if (value3) {
    console.log("This is a truthy since its's in a string")
}
let value4 = "NaN";
if (value4) {
    console.log("This is a truthy since its's in a string")
}
let value5 = "undefined";
if (value5) {
    console.log("This is a truthy since its's in a string")
}