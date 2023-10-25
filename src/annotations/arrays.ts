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
