const axios = require('axios');
const sendRequest = require('./headersAndParams');
const baseUrl = require('./env.json');

jest.mock('axios');

describe('sendRequest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('повинен включати кастомні заголовки в запит', async () => {
    const mockUrl = baseUrl;
    const mockHeaders = { Authorization: 'Bearer token123' };
    const mockParams = { userId: 42 };

    axios.get = jest.fn().mockResolvedValue({
      data: { books: [{ title: 'Book 1' }, { title: 'Book 2' }] },
    });

    const result = await sendRequest(mockUrl, mockParams, mockHeaders);

    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      params: mockParams,
      headers: mockHeaders,
    });
    expect(result).toEqual({
      books: [{ title: 'Book 1' }, { title: 'Book 2' }],
    });
  });

  test('повинен обробляти помилки запиту', async () => {
    const mockUrl = baseUrl;
    const mockHeaders = { Authorization: 'Bearer token123' };
    const mockParams = { userId: 42 };

    axios.get = jest.fn().mockRejectedValue(new Error('Request failed'));

    const result = await sendRequest(mockUrl, mockParams, mockHeaders);

    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      params: mockParams,
      headers: mockHeaders,
    });
    expect(result).toBe('Request failed');
  });
});
