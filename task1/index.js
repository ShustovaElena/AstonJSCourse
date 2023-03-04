import { CarCorporator } from "./carComparator.js";
import { user_choose, CAR_TYPES_PROPERTES, CARS } from "./constants.js";
import {Game} from './game.js';

const root = document.getElementById('root');

const game = new Game(); 

const defineUserChoice = (event, property) => {
  user_choose[property] = event.target.value;
};

const showStartPage = () => {
  root.innerHTML = `
  <h3>Выберите тип автомобиль</h3>
  <select id="select-car-type">
      <option value=""></option>
      <option value="Civilian">Civilian</option>
      <option value="Sport">Sport</option>
      <option value="Military">Military</option>
  </select>

  <h3>Задайте имя автомобиля</h3>
  <input placeholder="Введите имя машины" id="input-car-name" />
  <button id="create-car">Создать автомобиль</button>

  <div id="car-type-propertes"></div>
  <div id="car-improve-propertes"></div>
  `;

  const carType = document.getElementById('select-car-type');
  const carName = document.getElementById('input-car-name');
  const createCarButton = document.getElementById('create-car');
  
  carType.addEventListener('change', (event) => defineUserChoice(event, 'carType'));
  carName.addEventListener('change', (event) => defineUserChoice(event, 'carName'));
  createCarButton.addEventListener('click', showCarTypePropertes);
  createCarButton.addEventListener('click', showCarImprovePropertes);
};

const showCarTypePropertes = () => {
  const carTypePropertes = document.getElementById('car-type-propertes');

  carTypePropertes.innerHTML = `
    <h3>Характеристики автомобиля</h3>
    <div class="car-propertes">
      <p>Name: ${user_choose.carName}</p>
      <p>Fuel: ${CAR_TYPES_PROPERTES[user_choose.carType].fuel}</p>
      <p>Low Fuel Consumption: ${CAR_TYPES_PROPERTES[user_choose.carType].lowFuelConsumption}</p>
      <p>Durability: ${CAR_TYPES_PROPERTES[user_choose.carType].durability}</p>
      <p>Speed: ${CAR_TYPES_PROPERTES[user_choose.carType].speed}</p> 
    </div>
  `;
};

const showCarImprovePropertes = () => {
  const carImprovePropertes = document.getElementById('car-improve-propertes');

  carImprovePropertes.innerHTML = `
    <h3>Улучшить автомобиль</h3>
    <select id="improve-property-name">
      <option value=""></option>
      <option value="fuel">fuel</option>
      <option value="lowFuelConsumption">lowFuelConsumption</option>
      <option value="durability">durability</option>
      <option value="speed">speed</option>
   </select>
    <input id="improve-property-value" min=1 max=2 type="number">
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

export const getRivalCar = () => {
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
  root.innerHTML = ``;
  root.innerHTML = `
  <h3 class="power-reserve">Запас хода вашего автомобиля: ${user_choose.powerReserve}</h3>

  <h3>Сравнительные характеристики автомобилей</h3>
  <table class="table">
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

document.addEventListener('DOMContentLoaded', showStartPage);

