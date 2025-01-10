
function devide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Обидва числа мають бути цифрою');
  }
  if (denominator === 0) {
    throw new Error('Denominator не може бути нулем.');
  }

  return numerator / denominator;
}

const numberCases = [
  { numerator: 81, denominator: 9 },
  { numerator: '40', denominator: 10 },
  { numerator: 21, denominator: 0 },
  { numerator: 15, denominator: 7 },
  { numerator: 145, denominator: '33' },
];

numberCases.forEach(({ numerator, denominator }) => {
  try {
    const result = devide(numerator, denominator);
    console.log(`Результат ділення(${numerator}, ${denominator}):`, result);
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  } finally {
    console.log('Робота завершена');
  }
});

