export const CAR_TYPES = ['Civilian', 'Sport', 'Military'];
export const CAR_TYPES_PROPERTES = {
  Civilian: {
    fuel: 2,
    lowFuelConsumption: 2,
    durability: 2,
    speed: 4,
  },
  Sport: {
    fuel: 2,
    lowFuelConsumption: 1,
    durability: 1,
    speed: 6,
  },
  Military: {
    fuel: 2,
    lowFuelConsumption: 2,
    durability: 4,
    speed: 2,
  },
};
export const CAR_FIELD_TYPES = ['fuel', 'lowFuelConsumption', 'durability', 'speed'];
export const CARS = [];
export const DEFAULT_FUEL = 5;
export const WAY = 200;
export const RATIO = 0.1;
export const SPEED_RATIO = 0.05;
export const DEFAULT_DURABILITY = 100;
export const DEFAULT_SPEED = 10;
export const user_choose = {
  carType: '',
  carName: '',
  rivalCarCount: 0,
  improveName: '',
  improveValue: 0,
}