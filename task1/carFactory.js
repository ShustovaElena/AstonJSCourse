import { Civilian, Sport, Military } from "./typesCar.js";
import { CAR_TYPES, CAR_FIELD_TYPES } from "./constants.js";

export class CarFactory {

  #improveValue = 2;

  createCar(carType, name) {

    let car = null;

    switch (carType) {
      case 'Civilian':
        car = new Civilian(name);
        break;
      case 'Sport':
        car = new Sport(name);
        break;
      case 'Military':
        car = new Military(name);
        break;
      default:
        throw new Error(`Неизвестный тип машины: ${carType}`);
    }

    return car;
  }

  createRivalCar(name) {
    const randomType = this.getRandomValue(CAR_TYPES);

    const randomField = this.getRandomValue(CAR_FIELD_TYPES);

    const car = this.createCar(randomType, name);

    car.improveCar(randomField, this. #improveValue);

    return car;
  }

  getRandomValue(array) {
    const randomValue = Math.floor(Math.random() * array.length);
    return array[randomValue];
  }
}
