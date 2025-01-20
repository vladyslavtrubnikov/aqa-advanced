const axios = require('axios');

const sendRequest = async (url, params, headers) => {
  try {
    const response = await axios.get(url, {
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      return 'Error: No response received from server.';
    } else {
      return `Error: ${error.message}`;
    }
  }
};

module.exports = sendRequest;
