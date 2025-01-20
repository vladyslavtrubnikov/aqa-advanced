const axios = require('axios');
const baseUrl = require('./env.json');

async function fetchWithError() {
  try {
    const response = await axios.get(baseUrl);
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
}

module.exports = fetchWithError;
