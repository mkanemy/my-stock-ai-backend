const mocks = require('node-mocks-http');
const availableStocksService = require('../../../src/services/availableStocksService')
const superagent = require('superagent');

describe('Test Available Stocks Service', function () {

    test('available stocks service exists happy path test', async () => { 
        // Given
        const mockQuote = jest.spyOn(superagent, 'get');
        mockQuote.mockReturnValue(new Promise(() => {
            [{"description": "Test", "displaySymbol": "Test"}]
            }),
        );

        var res = mocks.createResponse();

        let ticker = 'AAPL'

        // When / Then
        availableStocksService.getAvailable(ticker, res)
    });
});

export {};