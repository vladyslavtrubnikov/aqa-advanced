const users = [
    {
        name: 'Franco',
        email: 'test@gmail.com',
        age: 25
    },
    {
        name: 'Jack',
        email: 'Jack1234@gmail.com',
        age: 37
    },
    {
        name: 'Pablo',
        email: 'Siesta@gmail.com',
        age: 33
    }
]

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}