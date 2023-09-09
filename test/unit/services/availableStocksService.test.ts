const mocks = require('node-mocks-http');
const detailsService = require('../../../src/services/detailsService')
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
        var req = mocks.createRequest();

        let ticker = 'AAPL'

        // When / Then
        detailsService.getDetails(ticker, res)
    });
});

export {};