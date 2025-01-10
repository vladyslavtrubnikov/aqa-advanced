const numbers = [5, -9, 0, 7, -5, 0, 15, -8];

let positiveCount = 0;

let negativeCount = 0;

let zeroCount = 0;

for (const number of numbers) {
    if (number > 0) {
        positiveCount++
    } else if (number < 0) {
        negativeCount++
    } else {
        zeroCount++
    }
};



console.log(`Кількість позитивних чисел: ${positiveCount}`);

console.log(`Кількість негативних чисел: ${negativeCount}`);

console.log(`Кількість нулів: ${zeroCount}`);
