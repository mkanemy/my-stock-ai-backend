const mocks = require('node-mocks-http');
const stock = require('../../../src/controllers/stockController');
const detailsService = require('../../../src/services/detailsService')

describe('Test Stock Controller', function () {

    test('stock controller exists happy path test', async () => {
        // Given
        const mock = jest.spyOn(detailsService, 'getDetails');
        mock.mockReturnValue(true);

        var req = mocks.createRequest();
        var res = mocks.createResponse();

        req.query.ticker = 'AAPL'

        // When / Then
        stock.stockGetDetailsController(req, res)

    });

    test('stock controller improper argument gives error', async () => {
        // Given
        const mock = jest.spyOn(detailsService, 'getDetails');
        mock.mockReturnValue(true);

        var req = mocks.createRequest();
        var res = mocks.createResponse();

        // When / Then
        expect(() => {
            stock.stockGetDetailsController(req, res)
        }).toThrow('Incorrect Arguments pass ticker=[ticker] at end of query');
    });

});

export {};