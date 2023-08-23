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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const rootController = require('../controllers/rootController');
// GET method route
app.get('/root', (req, res) => {
    function doRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield rootController.rootGetController();
            res.statusCode = 200;
            res.send(response);
        });
    }
    doRequest();
});
// POST method route
app.post('/root', (req, res) => {
    res.status(200).send('POST request to the homepage');
});
app.get('/favicon.ico', (req, res) => res.status(204));
module.exports = app;
