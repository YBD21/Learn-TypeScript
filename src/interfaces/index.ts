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

const oldCivic = {
    name: "civic",
    year: new Date,
    broken: true,
  };


const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken ?  ${vehicle.name}`);
};

printVehicle(oldCivic);
