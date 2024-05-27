// string convert to number
let myNumber = "116"
console.log(typeof myNumber);
console.log(typeof +myNumber);
console.log(typeof Number(myNumber));
console.log("=================");

// number convert to string
let myString = 116;
console.log(typeof myString);
console.log(typeof String(myString));
console.log(typeof (myString + " "));
console.log("=================");

//JavaScript parseInt()
const myNumber1 = "107";
const resultNumber = parseInt(myNumber1);
console.log(resultNumber);
console.log("=================");

const myNumber2 = "10.7";
const resultNumber1 = parseFloat(myNumber2);
console.log(typeof resultNumber1);
console.log("=================");

console.log(parseInt("113"));
console.log(parseInt("113", 16));
console.log(parseInt("  113   "));
console.log(parseInt("002"));
console.log(parseInt("2.9"));
console.log(parseInt("0x10"));
console.log("=================");

// string
console.log("10" + 10);
console.log(5 - "10");
console.log("java" + "Script");
console.log(" " + " ");
console.log(" " + 0);
console.log("modabbir" - "masum");
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);

// Types of JavaScript Operators

// 1:JavaScript Assignment
let x = 10;
// Assignment Operator (=)

// JavaScript Addition
// The Addition Operator (+) adds numbers:

let xx = 5;
let y = 2;
let z = xx + y;
console.log(z);

// JavaScript Multiplication
// The Multiplication Operator (*) multiplies numbers:
let ab = 10;
let ba = 5;
let multi = ab * ba;
console.log(multi);

// The subtraction operator (-) subtracts numbers.
let ac = 5;
let ca = 2;
let subtr = x - y;
console.log(subtr);

// The division operator (/) divides numbers.

let bc = 20;
let cb = 5;
let dividing = bc / cb;
console.log(dividing);

// what will be the output 
let result1 = "masum" / 2;
console.log(result1);

// interview question
let sum = 0.1 + 0.2;
console.log(sum.toFixed(3));

// what the result 
let strMulti = "masum" * 20;
console.log(strMulti);
let strMulti1 = 30 * "masum";
console.log(strMulti1);

// string (+) operator
let name1 = "masum";
let name2 = "hossen";
let fullName = name1 + " " + name2;
console.log(fullName.toUpperCase());

// Eual 
console.log(10 == 10);
console.log(10 == "10");

// equal value and equal type
// strict equal 
console.log(5 === "5");

// not equal 
console.log(5 != 10);

// greater than
console.log(3 > 1);

// 	less than
console.log(3 < 7);

// 	less than or equal to
console.log(5 <= 5);

// 	greater than or equal to
console.log(3 >= 4);

// equal == or strict === equal deferance 
// example
let sum1 = 2;
let sum2 = "2";

if(sum1 == sum2){
    console.log("this are a equal");
}else{
    console.log("this are a not equal");
}

if(sum1 === sum2){
    console.log("this are a equal");
}else{
    console.log("this are a not equal");
}


console.log("==========");

//JavaScript Type Operators 
// There are three type of logical Operators (&& - logical AND) (|| logical OR) (! logical NOT)

// Logical AND (&&) : return true if both operatore true , otherwise it return false
let xy = 5;
let yx = 10;
console.log(xy > 0 && yx < 0);
console.log("====================");
// Logical OR (||) operators
// Logical OR (||): Returns true if at least one operands true, otherwise it return false 
let aa = 15;
let baa = 0;
console.log(aa > 10 || baa > 10);
console.log("====================");
// Logical NOT (!) operators
// Returs true if the operand is false, and false if the operand is true
let isOpen = false;
console.log(!isOpen);
console.log("====================");

// Conditional (Ternary) Operator
// Syntax condition ? exprentionifTrue : exprentionifFalse ;
let age = 19;
let ageResult = age >= 18 ? "You are a alowed" : "You are a not alowed";
console.log(ageResult);
console.log("=================");

let student = 59;
let studentResult = student >= 60 ? "You are the pass" :  "Your are the fail";
console.log(studentResult);
console.log("=================");
/*  ======================
    conbine interview question
====================== */
console.log("5" - 3);
console.log(2 < 12 < 5);
console.log("10" + 10 + 10);
console.log("=================");
/* ====================
if..else condition 
===================== */

let team = 42;
if(team > 30){
    console.log("Go to the Beach");
}else{
    console.log("Watch TV at home");
}
console.log("=================");

let voterAge = 30;
let isCitizen = true;
let isRegister = true;
if(voterAge >= 18){
    if(isCitizen){
        if(isRegister){
            console.log("they are eligible to vote");
        }else{
            console.log("they are not eligible due to registration status");
        }
    }else{
        console.log("they are not eligible due to citizenship status");
    }
}else{
    console.log("they are not eligible to vote");
}

console.log("=================");

//! 1: write a program to check if a number is even or odd ?
let sums = "8";
if(sums % 2 === 0){
    console.log("this number is even");
}else{
    console.log("this number is odd");
}

//! 2: write a program to check if a number is positive, nagative, zero;
let num = -23;
if(num === 0){
    console.log("this num is zero");
}else if(num > 0){
    console.log("this num is positive");
}else{
    console.log("this num is nagative");
}

// JavaScript Switch Statement
// The switch statement is used to perform different actions based on different conditions.
// This example uses the weekday number to calculate the weekday name:
let day;
switch(new Date().getDay()){
    case 0: 
        day = "Sunday"
    break;
    case 1: 
        day = "Monday"
    break;
    case 2: 
        day = "Tuesday"
    break;
    case 3: 
        day = "Wednesday"
    break;
    case 4:
        day = "Thursday";
    break;
    case 5:
        day = "Friday";
    break;
    case 6:
        day = "Saturday";
}
console.log("Today is " + day.toUpperCase());

// If today is neither Saturday (6) nor Sunday (0), write a default message:
let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);

