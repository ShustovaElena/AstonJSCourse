import { CarFactory } from "./carFactory.js";
import { CARS } from "./constants.js";
import { user_choose } from "./constants.js";

export class Game {

  createPlayerCar() {
    const { carType, carName, improveName, improveValue } = user_choose;
    const factory = new CarFactory();
    const myCar = factory.createCar(carType, carName);
    myCar.improveCar(improveName, +improveValue);
    CARS.push(myCar);
    user_choose.powerReserve = myCar.calculatePowerReserve();
  }

  createRivalCar() {
    const { rivalCarCount } = user_choose;
    const factory = new CarFactory();
    for (let i = 1; i <= rivalCarCount; i++) {
      const rivalCar = factory.createRivalCar(`Car ${i}`);
      CARS.push(rivalCar);
    }
  }
}
