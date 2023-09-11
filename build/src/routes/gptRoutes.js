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
exports.config = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.disable("x-powered-by");
const gptController = require('../controllers/gptController');
exports.config = {
    runtime: 'edge',
};
// GET method route
app.post('/summary', body_parser_1.default.json(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.statusCode = 200;
        yield gptController.getArticleSummary(req, res);
    }
    catch (e) {
        res.statusCode = 400;
        res.end('ERROR: ' + e);
    }
}));
module.exports = app;
