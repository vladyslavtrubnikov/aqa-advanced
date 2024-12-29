const personOwn = {
    firstName: 'Rick',
    lastName: 'Sanchez',
    age: 70
}

personOwn.email = 'Shwifty@gcmail.com';

delete personOwn.age;

console.log(personOwn)