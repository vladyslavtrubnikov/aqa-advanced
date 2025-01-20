const fetchWithError = require('./invalidURL');
const axios = require('axios');

jest.mock('axios');

describe('fetchWithError', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('має обробити помилку з недійсною URL-адресою', async () => {
    axios.get = jest.fn(() => Promise.reject(new Error('Invalid URL')));

    const result = await fetchWithError();
    expect(result).toBe('Error: Invalid URL');
  });

  test('не повинен обробляти відповідь від сервера', async () => {
    axios.get = jest.fn(() => Promise.reject({ request: {} }));

    const result = await fetchWithError();
    expect(result).toBe('Error: No response received from server.');
  });

  test('має обробляти відповідь сервера зі статусом помилки', async () => {
    axios.get = jest.fn(() =>
      Promise.reject({
        response: {
          status: 404,
          statusText: 'Not Found',
        },
      }),
    );

    const result = await fetchWithError();
    expect(result).toBe('Error: 404 - Not Found');
  });
});
