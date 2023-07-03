"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const rootController = require('../controllers/rootController');
// GET method route
app.get('/', (req, res) => {
    const response = rootController.rootGetController();
    res.send(response);
    res.sendStatus(200);
});
// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});
module.exports = app;
