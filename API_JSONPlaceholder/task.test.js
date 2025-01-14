const apiClient = require('./apiClient');

describe('Виконання запитів до API', () => {
  test('GET: users - отримати список користувачів', async () => {
    const response = await apiClient.get(`/users`);
    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('GET: Отримати користувача за ID', async () => {
    const userID = 5;
    const response = await apiClient.get(`/users/${userID}`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', userID);
    expect(response.data).toHaveProperty('name');
  });

  test('GET: отримати адресу користувача', async () => {
    const userId = 7;
    const response = await apiClient.get(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', userId);
    expect(response.data).toHaveProperty('address');
    //-------------------------------------------------------------
    const address = response.data.address;
    expect(address).toHaveProperty('street');
    expect(address).toHaveProperty('suite');
    expect(address).toHaveProperty('city');
    expect(address).toHaveProperty('zipcode');
  });

  test('POST: Створення нового користувача', async () => {
    const newUSer = {
      name: 'Alice Cooper',
      username: 'Alice_Cool_Cooper',
      email: 'Alice_Cool_Cooper@rosamond.me',
      userId: 11,
    };

    const response = await apiClient.post(`/users`, newUSer);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.name).toBe(newUSer.name);
    expect(response.data.email).toBe(newUSer.email);
  });

  test('PUT: редагування користувача', async () => {
    const userId = 10;
    const updatedUserData = {
      name: 'Jamy Dot',
      username: 'jamedot',
      email: 'jamedot@rosamond.me',
    };

    try {
      const response = await apiClient.put(`/users/${userId}`, updatedUserData);
      expect(response.status).toBe(200);
    } catch (error) {
      expect(error.response.status).toBe(500);
    }
  });
});
