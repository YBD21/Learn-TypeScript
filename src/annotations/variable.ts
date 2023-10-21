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
let colors:string[] = ['red','green','blue']

// Classes
class Car {

}

let myCar: Car = new Car()

// Object literal 

let point:{x: number; y:number} = {
    x:10,
    y:20
};


// Function
const logNumber: (i:number) => void = (i:number) => {
    console.log(i)
}