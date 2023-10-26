class Vehicle {
  // method
  drive(): void {
    console.log("Car is Driving on its own");
  }

  honk(): void {
    console.log("beep");
  }
}

const mycar = new Vehicle();

mycar.drive();

mycar.honk();


