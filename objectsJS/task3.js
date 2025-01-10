const car1 = {
  brand: 'Volvo',
  model: 'XC90',
  year: 2024,
};

const car2 = {
  brand: 'Jaguar',
  model: 'XJ220',
  owner: 'Уильям Лайонс',
};

const car3 = { ...car2, ...car1 };

console.log(car3);
