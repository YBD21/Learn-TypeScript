// examples of add function with typescript
// just for beginner
/*
const add = (a: number, b: number): number => {
  return a + b;
};
 */

// use like this
const add = (a: number, b: number) => {
  return a + b;
};

// anonymous function example

const multiply = function (a: number, b: number) {
  return a * b;
};

// Note : void can return null or undefined.
const logger = (message: string): void => {
  console.log(message);
};

// Never if it will noting use Never

// const throwError = (message: string): never => {
//   throw new Error(message);
// };

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// destructuring function example

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
