// const newObj1 = {
//     name: 'test Name',
//     newObj: {
//         name2: 'New Name',
//         newMethod: function(){
//             console.log(this.name)
//         }
//     }

// };
// console.log(newObj1)
// newObj1.name = 'Перевіркка'
// newObj1.serName = 'surName'
// console.log(newObj1)
// delete newObj1.serName

// console.log(newObj1)

// const newObj2 = new Object();

// function newObj(name){
//     this.name = name
// }

// const newObj3 = new newObj('name')

// const newObj4 = {
//     newMethod: function(){
//         console.log(this.name);

//     }
// }

// const newObj5 = Object.create(newObj4)

// newObj5.name = "Teast"

// newObj5.newMethod();

///--------------------------

// let name = 'test'

// const newObj = {
//     name: name
// }

// console.log(newObj)

///--------------------------

// const age = 30;

// const persone = {
//     age: 28,
//     newMethod: function(){
//         console.log(this.age)
//     }
// }

// console.log(persone.age)

// const persone2 = {
//     age: 28,
//     name: 'test',
//     name2: 'перевірка нейму 2'
// }

// console.log(persone2.age)
// console.log(persone2.name2 ?? 'default')

// const newObj = {
//     name: 'Test Name',
//     lastName: 'Last Name',
//     age: 20
// }

// for(let key in newObj){
//     console.log(key + '-' + newObj[key])
// }

// const keys = Object.keys(newObj);

// const value = Object.values(newObj);

// const entries = Object.entries(newObj)

// console.log(keys)
// console.log(value)
// console.log(entries)
// console.log(entries[0] [0])

const objArr = [{ name: 'Test Name' }, { lastName: 'Last Name' }];

console.log(objArr[0].name);
