// ///callback function

// function calbackFunction(name, calback) {
//     console.log(name);
//     calback(10, 30);
// }

// function newFunction(a, b) {
//     console.log(a + b)
// }

// calbackFunction('first function', newFunction)

// const arr = [1, 2, 3, 34, 5]

// console.log(arr.map((num) => num * 2));

// const arr2 = [1, 2, 3, 34, 5]

// for (let i = 0; i < arr2.length; i++) {
//     arr2[i] *= 2
// }

// console.log(arr2)

///  this
// const newObj = {
//     name: 'Arx',
//     newFunction: function () {
//         console.log(this.name)
//     }
// }

// newObj.newFunction()

// function newFunction(name) {
//     this.name = name;
//     this.print = function () {
//         console.log(`This name = ${this.name}`)
//     }
// }

// const newEx = new newFunction('test');
// newEx.print();

// const newObj = {
//     name: 'test',
//     newFunction: () => {
//         console.log(this.name)
//     }
// }

// const secondObj = {name: 'New Name'}
// newObj.newFunction.call(secondObj)

// const numbers = [1, 2, 3, 4, 5]

// const squareNumbers = numbers.map(num => num * num)

// const evenNumbers = numbers.filter(num => num % 2 ===0)

// numbers.forEach(num => console.log(num))

// const persone = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     printName: function () {
//         setTimeout(() => {
//             console.log(this.fullName());
//         }, 1000);
//     }
// };

// persone.printName()

// function newFunction(){
//     let name  = 'Test'

//     function printName(){
//         console.log(name)
//     }

//     return printName;
// }

// const newName = newFunction()

// newName();

// function summArray (arr, index) {
//     if (index < 0){
//         return 0;
//     } else {
//         return arr[index] + summArray(arr, index - 1)
//     }
// }

// const numbers = [1,2,3,4,5]

// const totalSum = summArray(numbers, numbers.length - 1)
// console.log(totalSum)

const add = (a, b) => a + b;

const add2 = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(add(3, 4));
console.log(add2(3)(4));

const range = (a, b) => (a > b ? [] : [a, ...range(a + 1, b)]);
console.log(range(4, 7));

const range1 = (a, b) => {
  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
};

console.log(range1(4, 7));
