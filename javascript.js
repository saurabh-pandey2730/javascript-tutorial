// console.log can print something on console 
console.log("hello world");

"use strict";
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable 

var firstName = "Saurabh";

// use a variable 
console.log(firstName);

// change value 

firstName = "Shaurya";

console.log(firstName);

// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "Saurabh"; // snake case writing 
// var firstName = "Saurabh"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 

// let keyword 
// declare variable with let keyword 

let firstName = "harshit";
firstName = "Mohit";
console.log(firstName);

// declare constants 

const pi = 3.14;
console.log(pi);

// String indexing 

let firstName = "saurabhmanipandey";

//  h    a   r   s   h   i   t 
//  0    1   2   3   4   5   6

// console.log(firstName[0]);
// length of string 
// firstName.length 

console.log(firstName.length);

console.log(firstName[firstName.length-2]);

// last Index : length - 1 

// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "  Saurabh ";

// console.log(firstName.length);
// firstName = firstName.trim(); // "Saurabh12"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // Saurabh
console.log(newString);

// typeof operator 

// data types (primitive data types)
// string "saurabh"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

// let age = 22; 
// let firstName = "harshit";

// // console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"


// // convert string to number. 

// let myStr = +"34";

// console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);
// string concatenation 

let string1 = "17";
let string2 = "10";

let newString1 = +string1 + +string2;
console.log(typeof newString1);

// template string 
let age = 24;
let firstName = "Shivansh"

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age}`

console.log(aboutMe);