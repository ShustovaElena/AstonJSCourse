import { DEFAULT_FUEL, WAY, RATIO } from "./constants.js";

export class Car {
  #maxPoints = 12;
  #maxImproveValue = 2;

  constructor(name = 'Unknown car', fuel = 0, lowFuelConsumption = 0, durability = 0,speed = 0) {
    this.name = name;
    this.fuel = fuel;
    this.lowFuelConsumption = lowFuelConsumption;
    this.durability = durability;
    this.speed = speed;
  }

  checkValue() {
    if (this.fuel + this.lowFuelConsumption + this.durability + this.speed > this.#maxPoints) {
      alert('Превышен лимит распределяемых очков');
      throw new Error('Превышен лимит распределяемых очков');
    }
  }
  
  improveCar(field, value) {
    if (value > this.#maxImproveValue) {
      alert('Вы можете увеличить это поле только на 1 или 2 пункта!');
      throw new Error('Вы можете увеличить это поле только на 1 или 2 пункта!');
    } else {
      this[field] += value;
      this.checkValue();
    }
  }

  calculatePowerReserve() {
    const totalFuel = DEFAULT_FUEL + this.fuel;
    return totalFuel * WAY + totalFuel * RATIO * WAY * this.lowFuelConsumption;
  }
}
