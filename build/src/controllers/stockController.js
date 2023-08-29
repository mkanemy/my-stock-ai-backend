"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockGetAvailableController = exports.stockGetDetailsController = void 0;
const detailsService = require('../services/detailsService');
const availableStocksService = require('../services/availableStocksService');
function stockGetDetailsController(req, res) {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.ticker) || req.query.ticker === "") {
        throw new Error('Incorrect Arguments pass ticker=[ticker] at end of query');
    }
    detailsService.getDetails(req.query.ticker, res);
}
exports.stockGetDetailsController = stockGetDetailsController;
function stockGetAvailableController(req, res) {
    availableStocksService.getAvailable(req.query.ticker, res);
}
exports.stockGetAvailableController = stockGetAvailableController;
