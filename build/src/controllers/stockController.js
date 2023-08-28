"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockGetDetailsController = void 0;
const stockService = require('../services/stockService');
function stockGetDetailsController(req, res) {
    if (!req || !req.query || !req.query.ticker || req.query.ticker === "") {
        throw new Error('Incorrect Arguments pass ticker=[ticker] at end of query');
    }
    stockService.getDetails(req.query.ticker, res);
}
exports.stockGetDetailsController = stockGetDetailsController;
