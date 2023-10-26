class Vehicle {
  constructor(public color: string) {}
  // method
  honk(): void {
    console.log("beep");
  }
}

class Bike extends Vehicle {
  private drive(): void {
    console.log("vroom vroom");
  }

  startDriving(): void {
    this.drive();
  }
}

const myBike = new Bike("red");

myBike.startDriving();

myBike.honk();

// modify -->
// Public by Default
// Private
// Protected
