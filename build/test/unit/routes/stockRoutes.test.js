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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const mocks = require('node-mocks-http');
const stockRoutes = require('../../../src/routes/stockRoutes');
const stockController = require('../../../src/controllers/stockController');
const stockApp = (0, express_1.default)();
stockApp.use("/", stockRoutes);
describe('Test Stock Routes', function () {
    test('Test that GET / stock details route correctly catches error', () => __awaiter(this, void 0, void 0, function* () {
        const mock = jest.spyOn(stockController, 'stockGetDetailsController');
        mock.mockImplementation(() => {
            throw new Error();
        });
        const res = yield (0, supertest_1.default)(stockApp).get('/details');
        expect(res.statusCode).toEqual(400);
    }));
    test('Test that GET / available route correctly catches error', () => __awaiter(this, void 0, void 0, function* () {
        const mock = jest.spyOn(stockController, 'stockGetAvailableController');
        mock.mockImplementation(() => {
            throw new Error();
        });
        const res = yield (0, supertest_1.default)(stockApp).get('/available');
        expect(res.statusCode).toEqual(400);
    }));
});
