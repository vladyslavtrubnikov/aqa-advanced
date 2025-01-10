const numberFor = 5;
const numberWhile = 7;

///табюлиця множення для 5
for (let i = 1; i <= 10; i++) {
  console.log(`${numberFor} * ${i} = ${numberFor * i}`);
}

console.log('-------------------------------------------------------------');

///таблиця множення для 7
let i = 1;
while (i <= 10) {
  console.log(`${numberWhile} * ${i} = ${numberWhile * i}`);
  i++;
}
