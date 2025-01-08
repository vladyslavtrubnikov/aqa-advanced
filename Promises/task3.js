async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Помилка отримання todo');
        }
        return await response.json();
    } catch (error) {
        console.error('Помилка в fetchTodo:', error);
        throw error;
    }
};

async function fetchUser() {
    try {
        const repornce = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Помилка отримання User')
        }
        return await response.json();
    } catch (error) {
        console.error('Помилки в fetchTodo', error);
        throw error;
    }
};

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Помилка отримання user');
        }
        return await response.json();
    } catch (error) {
        console.error('Помилка в fetchUser:', error);
        throw error;
    }
}


async function fetchAllData() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Результат Promise.all:');
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Помилка у Promise.all:', error);
    }
}

// Використання async/await для Promise.race
async function fetchFirstData() {
    try {
        const result = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Результат Promise.race:', result);
    } catch (error) {
        console.error('Помилка у Promise.race:', error);
    }
}


fetchAllData();
fetchFirstData();