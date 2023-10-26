// Example of Long annotations
/*
// object that define a car
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken ?  ${vehicle.name}`);
};
*/

// Fix long annotation with interface

// creating a new type
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  summary(): string {
    return `Name : ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
