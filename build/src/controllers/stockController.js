"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockGetDetailsController = void 0;
const stockService = require('../services/stockService');
function stockGetDetailsController(req, res) {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.ticker) || req.query.ticker === "") {
        throw new Error('Incorrect Arguments pass ticker=[ticker] at end of query');
    }
    stockService.getDetails(req.query.ticker, res);
}
exports.stockGetDetailsController = stockGetDetailsController;
