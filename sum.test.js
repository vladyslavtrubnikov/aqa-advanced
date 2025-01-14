// const axios = require("axios");
import axios from 'axios';

describe('test', () => {
  test('first expect', async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log(responce.data);
    expect(responce.status).toBe(200);
    expect(responce.data.id);
  });
});
