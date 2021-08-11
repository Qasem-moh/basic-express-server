'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('MyTest', () => {

  it('handles my internal server errors', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });

  it('get name from /person ', async () => {
    const response = await request.get('/person?name=Qasem'); 
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object'); 
  });
});