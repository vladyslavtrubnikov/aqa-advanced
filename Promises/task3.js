async function asyncFetchTodo() {

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
}

async function asyncFetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('Помилка отримання User');
    }
    return await response.json();
  } catch (error) {
    console.error('Помилки в fetchTodo', error);
    throw error;
  }
}

async function fetchAllData() {
  try {
    const [todo, user] = await Promise.all([asyncFetchTodo(), asyncFetchUser()]);
    console.log('Результат Promise.all:');
    console.log('Todo:', todo);
    console.log('User:', user);
  } catch (error) {
    console.error('Помилка у Promise.all:', error);
  }
}

async function fetchFirstData() {
  try {
    const result = await Promise.race([asyncFetchTodo(), asyncFetchUser()]);
    console.log('Результат Promise.race:', result);
  } catch (error) {
    console.error('Помилка у Promise.race:', error);
  }
}

fetchAllData();
fetchFirstData();

