/*
Types :
  1. Primitive Types : 
                       number 
                       boolean
                       void
                       undefined
                       string
                       symbol
                       null

  2. Object Types : 
                       functions
                       arrays
                       classes
                       objects

*/

// veriable declearation of annotation
const numberOfapple: number = 5;

// numberOfapple = 'Ten' -- error

// Build in objects
let currentDate: Date = new Date();

// Array -- string of an array
let colors: string[] = ["red", "green", "blue"];

// Classes
class Car {}

let myCar: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use anntoations
// 1) Function that returns the 'any' type

const json = '{"x" : 10 , "y" : 20}';

const coordinates: { x: number; y: number } = JSON.parse(json); // currentType any
console.log(coordinates); // {x: 10 , y:20}

// 2) When we declare a variable on one line
// add initalizate it later

let words = ["red", "blue", "green"];

let foundWord : boolean; // declear datatype as boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
} 

// 3) Variable whose type cannot be inferred correctly
let numberList = [-10,-1,12];
// below datatypes either boolean or number
let numberAboveZero : boolean | number = false; // default false

for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0){
        numberAboveZero = numbers[i];
    }
} 
