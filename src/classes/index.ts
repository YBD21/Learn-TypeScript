class Vehicle {
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

const myBike = new Bike();

myBike.startDriving();

myBike.honk();

// modify -->
// Public by Default
// Private
// Protected
