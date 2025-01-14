const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

apiClient.interceptors.request.use(
  (config) => {
    console.log('Запити:', {
      method: config.method.toUpperCase(),
      url: config.url,
      headers: config.headers,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error('Помилка запиту:', error);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    console.log('Відповідь:', {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error('Помилка відповіді:', error);
    return Promise.reject(error);
  },
);

module.exports = apiClient;
