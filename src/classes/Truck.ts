// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  vin: string = '';
  color?: string;
  make: string = '';
  model: string = '';
  year?: number;
  weight?: number;
  topSpeed?: number;
  wheels: Wheel[] = []; // Initialize the wheels property with an empty array
  towingCapacity: number;
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super();
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    this.towingCapacity = towingCapacity;

    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (this.wheels.length !== 4) {
      this.wheels = [new Wheel(18, "DefaultBrand"), new Wheel(18, "DefaultBrand"), new Wheel(18, "DefaultBrand"), new Wheel(18, "DefaultBrand")];
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Vehicle): void {
    if (vehicle.weight && vehicle.weight <= this.towingCapacity) {
      console.log(`Vehicle with VIN ${vehicle.vin} is being towed`);
    } else {
      console.log(`Vehicle with VIN ${vehicle.vin} is too heavy to be towed`);
    }

    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
  


  // TODO: Override the printDetails method from the Vehicle class
  printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.size} inch ${wheel.brand}`).join(", ")}`);
  }
}


  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheel

// Export the Truck class as the default export
export default Truck;
