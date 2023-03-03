import { CarFactory } from "./carFactory.js";
import { CARS } from "./constants.js";

class Game {
  start() {
    this.createPlayerCar();
    this.createRivalCar(2);
  }

  createPlayerCar() {
    const factory = new CarFactory();
    const myCar = factory.createCar('Civilian', 'My Car');
    myCar.improveCar('fuel', 2);
    CARS.push(myCar);
    myCar.calculatePowerReserve();
  }

  createRivalCar(countRivalCar) {
    const factory = new CarFactory();
    for (let i = 1; i <= countRivalCar; i++) {
      const rivalCar = factory.createRivalCar(`Car ${i}`);
      CARS.push(rivalCar);
    }
  }
}

const game = new Game();
game.start();
console.log(CARS);