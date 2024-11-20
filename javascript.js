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