const axios = require('axios');
const sendRequest = require('./Request');
const baseUrl = require('./env.json');

jest.mock('axios');

describe('sendRequest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('повинен успішно виконати запит і повернути дані', async () => {
    const mockUrl = baseUrl;
    const mockParams = { userId: 123 };
    const mockHeaders = { Authorization: 'Bearer token123' };

    // Мокаємо успішну відповідь від сервера
    axios.get = jest.fn().mockResolvedValue({ data: { message: 'Success' } });

    const result = await sendRequest(mockUrl, mockParams, mockHeaders);

    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      params: mockParams,
      headers: mockHeaders,
    });
    expect(result).toEqual({ message: 'Success' });
  });

  test('повинен обробити помилку при відсутності відповіді від сервера', async () => {
    const mockUrl = baseUrl;
    const mockParams = { userId: 123 };
    const mockHeaders = { Authorization: 'Bearer token123' };

    axios.get = jest.fn().mockRejectedValue({ request: {} });

    const result = await sendRequest(mockUrl, mockParams, mockHeaders);

    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      params: mockParams,
      headers: mockHeaders,
    });
    expect(result).toBe('Error: No response received from server.');
  });

  test('повинен обробити помилку від сервера зі статусом помилки', async () => {
    const mockUrl = baseUrl;
    const mockParams = { userId: 123 };
    const mockHeaders = { Authorization: 'Bearer token123' };

    axios.get = jest.fn().mockRejectedValue({
      response: {
        status: 404,
        statusText: 'Not Found',
      },
    });

    const result = await sendRequest(mockUrl, mockParams, mockHeaders);

    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      params: mockParams,
      headers: mockHeaders,
    });
    expect(result).toBe('Error: 404 - Not Found');
  });

  test('повинен обробити інші помилки запиту', async () => {
    const mockUrl = baseUrl;
    const mockParams = { userId: 123 };
    const mockHeaders = { Authorization: 'Bearer token123' };

    axios.get = jest.fn().mockRejectedValue(new Error('Request failed'));

    const result = await sendRequest(mockUrl, mockParams, mockHeaders);

    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      params: mockParams,
      headers: mockHeaders,
    });
    expect(result).toBe('Error: Request failed');
  });
});
