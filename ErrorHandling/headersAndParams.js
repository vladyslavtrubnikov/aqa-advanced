const axios = require('axios');

const sendRequest = async (url, params = {}, headers = {}) => {
  try {
    const response = await axios.get(url, {
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    return error.message || 'Unknown error';
  }
};

module.exports = sendRequest;
