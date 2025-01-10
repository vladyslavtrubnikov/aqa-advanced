
class TodoRequest {
  async classFetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Помилка отримання todo');
      }
      return await response.json();
    } catch (error) {
      console.error('Помилка в TodoRequest:', error);
      throw error;
    }
  }
}

class UserRequest {
  async classFetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Помилка отримання user');
      }
      return await response.json();
    } catch (error) {
      console.error('Помилка в UserRequest:', error);
      throw error;
    }
  }
}

async function mainRequest() {
  const todoRequest = new TodoRequest();
  const userRequest = new UserRequest();

  try {
    const [todo, user] = await Promise.all([todoRequest.classFetchTodo(), userRequest.classFetchUser()]);
    console.log('Результат Promise.all:');
    console.log('Todo:', todo);
    console.log('User:', user);
  } catch (error) {
    console.error('Помилка у Promise.all:', error);
  }

  try {
    const result = await Promise.race([todoRequest.classFetchTodo(), userRequest.classFetchUser()]);
    console.log('Результат Promise.race:', result);
  } catch (error) {
    console.error('Помилка у Promise.race:', error);
  }
}

