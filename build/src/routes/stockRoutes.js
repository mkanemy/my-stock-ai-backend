"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const stockController = require('../controllers/stockController');
// GET method route
app.get('/details', (req, res) => {
    try {
        const response = stockController.stockGetDetailsController(req, res);
        res.statusCode = 200;
    }
    catch (e) {
        res.status(400).send('Bad Request: ' + e);
    }
});
module.exports = app;
