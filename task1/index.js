import { CarCorporator } from "./carComparator.js";
import { user_choose, CAR_TYPES_PROPERTES, CAR_FIELD_TYPES, CARS } from "./constants.js";
import {Game} from './game.js';

const root = document.getElementById('root');
const carType = document.getElementById('select-car-type');
const carName = document.getElementById('input-car-name');
const createCarButton = document.getElementById('create-car');
const carTypePropertes = document.getElementById('car-type-propertes');
const carImprovePropertes = document.getElementById('car-improve-propertes');

const game = new Game(); 

const defineUserChoice = (event, property) => {
  user_choose[property] = event.target.value;
  console.log(user_choose);
};

const showCarTypePropertes = () => {
  carTypePropertes.innerHTML = `
    <h3>Характеристики автомобиля</h3>
    <p>Name: ${user_choose.carName}</p>
    <p>Fuel: ${CAR_TYPES_PROPERTES[user_choose.carType].fuel}</p>
    <p>Low Fuel Consumption: ${CAR_TYPES_PROPERTES[user_choose.carType].lowFuelConsumption}</p>
    <p>Durability: ${CAR_TYPES_PROPERTES[user_choose.carType].durability}</p>
    <p>Speed: ${CAR_TYPES_PROPERTES[user_choose.carType].speed}</p> 
  `;
};

const showCarImprovePropertes = () => {
  carImprovePropertes.innerHTML = `
    <h3>Улучшить автомобиль</h3>
    <select id="improve-property-name">
      <option value="fuel">fuel</option>
      <option value="lowFuelConsumption">lowFuelConsumption</option>
      <option value="durability">durability</option>
      <option value="speed">speed</option>
   </select>
    <input id="improve-property-value" placeholder="Введите значение изменяемого свойства">
    <button id="improve-property-button">Улучшить</button>
  `;

  const improvePropertyName = document.getElementById('improve-property-name');
  const improvePropertyValue = document.getElementById('improve-property-value');
  const improvePropertyButton = document.getElementById('improve-property-button');

  improvePropertyName.addEventListener('change', (event) => defineUserChoice(event, 'improveName'));
  improvePropertyValue.addEventListener('change', (event) => defineUserChoice(event, 'improveValue'));
  improvePropertyButton.addEventListener('click', () => game.createPlayerCar());
  improvePropertyButton.addEventListener('click', getRivalCar);
};

const getRivalCar = () => {
  root.innerHTML = ``;
  root.innerHTML = `
  <h3>Укажите количество автомобилей - соперников</h3>
  <input id="rival-car-count" placeholder="Введите количество автомобилей - соперников">
  <button id="rival-car-button">Установить</button>
  `;

  const rivalCarCount = document.getElementById('rival-car-count');
  const rivalCarButton = document.getElementById('rival-car-button');

  rivalCarCount.addEventListener('change', (event) => defineUserChoice(event, 'rivalCarCount'));
  rivalCarButton.addEventListener('click', () => game.createRivalCar());
  rivalCarButton.addEventListener('click', () => {
    const carCorporator = new CarCorporator();
    const compareCars = carCorporator.compare(CARS);
    getCompareCars(compareCars);
  });
};

const getCompareCars = (cars) => {
  console.log(cars);
  root.innerHTML = ``;
  root.innerHTML = `
  <h3>Сравнительные характеристики автомобилей</h3>
  <table>
    <tr>
      <th>Car name</th>
      <th>Power Reserve</th>
      <th>Durability</th>
      <th>Speed</th>
    </tr>
    ${cars.map((car) => {
      return `<tr>
        <td>${car.name}</td>
        <td>${car.powerReserve}</td>
        <td>${car.durability}</td>
        <td>${car.speed}</td>
      </tr>`
    }).join("")}
  </table>
  `;
};

carType.addEventListener('change', (event) => defineUserChoice(event, 'carType'));
carName.addEventListener('change', (event) => defineUserChoice(event, 'carName'));
createCarButton.addEventListener('click', showCarTypePropertes);
createCarButton.addEventListener('click', showCarImprovePropertes);

