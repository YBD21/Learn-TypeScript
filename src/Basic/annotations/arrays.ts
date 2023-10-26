const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMaker: string[][] = [];

// Help with inference when extracting values

const car = carMakers[0];
const yourCar = carMakers.pop();

// Prevent incompatiable values
// carMakers.push(100);

// Help with 'map' with suggest

carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());

// When to use typed arrays ?

// any time we need to represent a collection of records with some arbitary sort order
