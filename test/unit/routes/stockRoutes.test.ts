import request from 'supertest';
import express from 'express';
const mocks = require('node-mocks-http');
const stockRoutes = require('../../../src/routes/stockRoutes');
const stockController = require('../../../src/controllers/stockController');

const stockApp = express();
stockApp.use("/", stockRoutes);

describe('Test Stock Routes', function () {

    test('Test that GET / stock details route correctly catches error', async () => {
        const mock = jest.spyOn(stockController, 'stockGetDetailsController');
        mock.mockImplementation(() => {
            throw new Error();
        });

        const res = await request(stockApp).get('/details');

        expect(res.statusCode).toEqual(400);
    });

});