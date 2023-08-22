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
const rootRoutes = require('../../../src/routes/rootRoutes');
const rootController = require('../../../src/controllers/rootController');
const app = (0, express_1.default)();
app.use('/', rootRoutes);
describe('Test Root Routes', function () {
    test('Test that GET / root route exists and returns correctly', () => __awaiter(this, void 0, void 0, function* () {
        const mock = jest.spyOn(rootController, 'rootGetController');
        mock.mockReturnValue('success!');
        const res = yield (0, supertest_1.default)(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('success!');
    }));
    test('Test that POST / root route exists and returns correctly', () => __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).post('/');
        expect(res.text).toEqual('POST request to the homepage');
    }));
});
