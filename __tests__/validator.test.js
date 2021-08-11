const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
describe('Api req', () => {
  it('handel Err', async () => {
    const response = await request.post('/bad');
    expect(response.status).toEqual(500);
  });
  it('get data from /data ', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });
  it('/ route works', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    console.log(response.text);
    expect(response.text).toEqual('Home route');
  });
});