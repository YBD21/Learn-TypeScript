class Vehicle {
  // method
  drive(): void {
    console.log("Car is Driving on its own");
  }

  honk(): void {
    console.log("beep");
  }
}

class Bike extends Vehicle {
  drive(): void {
    console.log("vroom vroom");
  }
}

const myBike = new Bike();

myBike.drive();

myBike.honk();
 