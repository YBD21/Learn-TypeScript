// Tuple - Array-like structure where each element represents some property of a record.

const drink = {
  color: "brown",
  carbonated: false,
  suger: 40,
};

type Drink = [string, boolean, number];

// Example of Tuple
const pepsi: Drink = ["brown", true, 40];
const sprint: Drink = ["clear", true, 40];
const cokeZero: Drink = ["Borwn", true, 0];
