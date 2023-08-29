"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocks = require('node-mocks-http');
const detailsService = require('../../../src/services/detailsService');
const finnhub = require('finnhub');
const finnhubClient = new finnhub.DefaultApi();
describe('Test Stock Details Service', function () {
    test('stock details service exists happy path test', () => __awaiter(this, void 0, void 0, function* () {
        // Given
        const mockQuote = jest.spyOn(finnhubClient, 'quote');
        mockQuote.mockReturnValue({});
        const mockProfile = jest.spyOn(finnhubClient, 'companyProfile2');
        mockProfile.mockReturnValue({});
        const mockFinancials = jest.spyOn(finnhubClient, 'companyBasicFinancials');
        mockFinancials.mockReturnValue({});
        var req = mocks.createRequest();
        var res = mocks.createResponse();
        req.query.ticker = 'AAPL';
        // When / Then
        detailsService.getDetails(req, res);
    }));
});
