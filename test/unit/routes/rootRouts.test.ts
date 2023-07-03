import request from 'supertest';
import express from 'express';
const rootRoutes = require('../../../src/routes/rootRoutes');

const app = express();
app.use('/', rootRoutes);

describe('Test Root Routes', function () {

    test('Test that / root route exists and returns correctly', async () => {
        const res = await request(app).get('/');

        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('We made it :D');
    });

});