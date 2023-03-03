import { DEFAULT_FUEL, WAY, RATIO, DEFAULT_DURABILITY, SPEED_RATIO, DEFAULT_SPEED, CARS } from "./constants.js";

export class CarCorporator {

  #maxPowerReserve = 0;
  #maxDurability = 0;
  #maxSpeed = 0;

  calculatePowerReserve(fuel, lowFuelConsumption) {
    const totalFuel = DEFAULT_FUEL + fuel;
    const powerReserve =  totalFuel * WAY + totalFuel * RATIO * WAY * lowFuelConsumption;
    
    if (this.#maxPowerReserve < powerReserve) {
      this.#maxPowerReserve = powerReserve;
    } 
    return powerReserve;
  }

  calculateTotalDurability(durability) {
    const totalDurability = DEFAULT_DURABILITY + durability * RATIO * DEFAULT_DURABILITY;

    if (this.#maxDurability < totalDurability) {
      this.#maxDurability = totalDurability;
    } 
    return totalDurability;
  }

  calculateTotalSpeed(speed) {
    const totalSpeed = DEFAULT_SPEED + speed * SPEED_RATIO * DEFAULT_SPEED;

    if (this.#maxSpeed < totalSpeed) {
      this.#maxSpeed = totalSpeed;
    } 
    return totalSpeed;
  }

  calculateValueForCompare(cars) {
    const result = cars.map((car) => {
      return {
        powerReserve: this.calculatePowerReserve(car.fuel, car.lowFuelConsumption),
        durability: this.calculateTotalDurability(car.durability),
        speed: this.calculateTotalSpeed(car.speed),
        name: car.name,
      }
    });

    return result;
  }

  getPercentages(carsValues) {
    return carsValues.map((car) => {
      return {
        powerReserve: Math.round((car.powerReserve / this.#maxPowerReserve) * 100) + '%',
        durability: Math.round((car.durability / this.#maxDurability) * 100) + '%',
        speed: Math.round((car.speed / this.#maxSpeed) * 100) + '%',
        name: car.name,
      }
    })
  }

  compare(cars) {
    const carsValues = this.calculateValueForCompare(cars);
    return this.getPercentages(carsValues);
  }
}
