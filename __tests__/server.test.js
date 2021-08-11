'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', () => {

  it('handles not found request', async () => {
 
    const response = await request.get('/testPadReq'); // async
    expect(response.status).toEqual(404);
  });

  it('handles not found request', async () => {
  
    const response = await request.post('/person'); // async
    expect(response.status).toEqual(404);
  });



});