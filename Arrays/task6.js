const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const newSortArray = [...numbersList];

newSortArray.sort((number, grow) => number - grow);

console.log(`Оригінальний масив: ${numbersList}`);
console.log(`Новий відсортований масив: ${newSortArray}`);
