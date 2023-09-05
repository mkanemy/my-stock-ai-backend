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
const stock = require('../../../src/controllers/stockController');
const detailsService = require('../../../src/services/detailsService');
const availableStocksService = require('../../../src/services/availableStocksService');
describe('Test Stock Controller', function () {
    test('stock controller exists happy path test', () => __awaiter(this, void 0, void 0, function* () {
        // Given
        const mock = jest.spyOn(detailsService, 'getDetails');
        mock.mockReturnValue(true);
        var req = mocks.createRequest();
        var res = mocks.createResponse();
        req.query.ticker = 'AAPL';
        // When / Then
        stock.stockGetDetailsController(req, res);
    }));
    test('available stocks exists happy path test', () => __awaiter(this, void 0, void 0, function* () {
        // Given
        const mock = jest.spyOn(availableStocksService, 'getAvailable');
        mock.mockReturnValue(true);
        var res = mocks.createResponse();
        var req = mocks.createRequest();
        req.query.ticker = 'AAPL';
        // When / Then
        stock.stockGetAvailableController(req, res);
    }));
    test('stock controller improper argument gives error', () => __awaiter(this, void 0, void 0, function* () {
        // Given
        const mock = jest.spyOn(detailsService, 'getDetails');
        mock.mockReturnValue(true);
        var req = mocks.createRequest();
        var res = mocks.createResponse();
        // When / Then
        expect(() => {
            stock.stockGetDetailsController(req, res);
        }).toThrow('Incorrect Arguments pass ticker=[ticker] at end of query');
    }));
});
