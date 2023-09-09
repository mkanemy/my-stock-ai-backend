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
const availableStocksService = require('../../../src/services/availableStocksService');
const superagent = require('superagent');
describe('Test Available Stocks Service', function () {
    test('available stocks service exists happy path test', () => __awaiter(this, void 0, void 0, function* () {
        // Given
        const mockQuote = jest.spyOn(superagent, 'get');
        mockQuote.mockReturnValue(new Promise(() => {
            [{ "description": "Test", "displaySymbol": "Test" }];
        }));
        var res = mocks.createResponse();
        let ticker = 'AAPL';
        // When / Then
        availableStocksService.getAvailable(ticker, res);
    }));
});
