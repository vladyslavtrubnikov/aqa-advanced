const arr = [10, 20, 30, 40, 50];

const newArr = arr.reduce((num, element) => num + element, 0);

console.log(`Сумма елементів массиву ${newArr}`);
