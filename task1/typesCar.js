import { Car } from "./car.js";

export class Civilian extends Car {
  constructor(name, fuel = 2, lowFuelConsumption = 2, durability = 2,speed = 4) {
    super(name, fuel, lowFuelConsumption, durability,speed);
  }
}

export class Sport extends Car {
  constructor(name, fuel = 2, lowFuelConsumption = 1, durability = 1,speed = 6) {
    super(name, fuel, lowFuelConsumption, durability,speed);
  }
}

export class Military extends Car {
  constructor(name, fuel = 2, lowFuelConsumption = 2, durability = 4,speed = 2) {
    super(name, fuel, lowFuelConsumption, durability,speed);
  }
}