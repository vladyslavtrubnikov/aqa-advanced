function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка отримання todo');
            }
            return response.json();
        })
        .catch(error => {
            console.log('Помилка в fetchTodo:', error)
            throw error;
        })
};

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка отримання User')
            }
            return response.json();
        })
        .catch(error => {
            console.log('Ромилка fetchUser', error)
            throw error;
        })
};

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Результат Promise.all:');
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Помилка у Promise.all:', error);
    });


Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('Результат Promise.race:', result);
    })
    .catch(error => {
        console.error('Помилка у Promise.race:', error);
    });