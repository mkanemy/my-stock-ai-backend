"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.disable("x-powered-by");
const stockController = require('../controllers/stockController');
// GET method route
app.get('/details', (req, res) => {
    try {
        res.statusCode = 200;
        stockController.stockGetDetailsController(req, res);
    }
    catch (e) {
        res.statusCode = 400;
        res.end('ERROR: ' + e);
    }
});
module.exports = app;
