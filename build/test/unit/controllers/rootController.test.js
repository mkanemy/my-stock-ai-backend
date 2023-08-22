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
const mocks = require('node-mocks-http');
const root = require('../../../src/controllers/rootController');
const dataQuery = require('../../../src/data/dataQuery');
describe('Test Root Controller', function () {
    test('root controller exists', () => __awaiter(this, void 0, void 0, function* () {
        // Given
        const mock = jest.spyOn(dataQuery, 'dataQuery');
        mock.mockReturnValue(['success!']);
        var req = mocks.createRequest();
        var res = mocks.createResponse();
        // When / Then
        let response = root.rootGetController(req, res).then((data) => expect(data).toBe('success!'));
    }));
    test('Test that root controller correctly returns error', () => __awaiter(this, void 0, void 0, function* () {
        const mock = jest.spyOn(dataQuery, 'dataQuery');
        mock.mockImplementation(() => {
            throw new Error();
        });
        var req = mocks.createRequest();
        var res = mocks.createResponse();
        let response = root.rootGetController(req, res).then((data) => expect(data).toBe('Error'));
    }));
});
