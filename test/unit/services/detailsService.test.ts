const mocks = require('node-mocks-http');
const detailsService = require('../../../src/services/detailsService')
const finnhub = require('finnhub')
const finnhubClient = new finnhub.DefaultApi()

describe('Test Stock Details Service', function () {

    test('stock details service exists happy path test', async () => {
        // Given
        const mockQuote = jest.spyOn(finnhubClient, 'quote');
        mockQuote.mockReturnValue({});
        const mockProfile = jest.spyOn(finnhubClient, 'companyProfile2');
        mockProfile.mockReturnValue({});
        const mockFinancials = jest.spyOn(finnhubClient, 'companyBasicFinancials');
        mockFinancials.mockReturnValue({});

        var req = mocks.createRequest();
        var res = mocks.createResponse();

        req.query.ticker = 'AAPL'

        // When / Then
        detailsService.getDetails(req, res)
    });
});

export {};